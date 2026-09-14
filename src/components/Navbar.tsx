import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiFileText, FiSend } from 'react-icons/fi'

interface NavbarProps {
  resumeUrl: string
}

export const Navbar = ({ resumeUrl }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)

      const sections = ['about', 'experience', 'projects', 'skills', 'education', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`navbar-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="nav-brand" onClick={(e) => scrollToSection(e, '#app')}>
          <span className="brand-bracket">&lt;</span>
          <span className="brand-text">SD</span>
          <span className="brand-bracket">/&gt;</span>
          <span className="brand-dot"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="nav-resume-btn"
            title="Open Resume"
          >
            <FiFileText size={16} />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="nav-contact-btn"
          >
            <FiSend size={15} />
            <span>Hire Me</span>
          </a>

          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-panel">
            <ul className="mobile-menu-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`mobile-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                    onClick={(e) => scrollToSection(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="mobile-menu-cta">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mobile-resume-btn"
                >
                  <FiFileText size={16} />
                  <span>View Resume</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
