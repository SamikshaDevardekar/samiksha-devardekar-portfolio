import { useState } from 'react'
import { FiMail, FiPhone, FiLinkedin, FiCopy, FiCheck, FiSend, FiMapPin } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'

export const ContactSection = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null)

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2500)
  }

  const email = 'samikshadevardekar1956@gmail.com'
  const phone = '9404581956'

  return (
    <section id="contact" className="panel contact-panel reveal">
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-badge">
            <span className="pulsing-dot"></span>
            <span>Available for Opportunities</span>
          </div>
          <h2 className="contact-heading">Let's Build Something Exceptional</h2>
          <p className="contact-subtext">
            I am actively seeking full-time Software Engineering roles where I can combine Java,
            Spring Boot microservices, and React to build scalable, high-impact systems.
          </p>
        </div>

        <div className="contact-grid">
          {/* Quick Copy Contact Cards */}
          <div className="contact-card">
            <div className="contact-card-icon">
              <FiMail size={22} />
            </div>
            <div className="contact-card-info">
              <span className="contact-card-title">Email</span>
              <span className="contact-card-val">{email}</span>
            </div>
            <div className="contact-card-actions">
              <button
                className={`contact-copy-btn ${copiedType === 'email' ? 'copied' : ''}`}
                onClick={() => copyToClipboard(email, 'email')}
                title="Copy email to clipboard"
              >
                {copiedType === 'email' ? (
                  <>
                    <FiCheck size={16} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy size={16} />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${email}`}
                className="contact-send-btn"
                title="Send direct email"
              >
                <FiSend size={15} />
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">
              <FiPhone size={22} />
            </div>
            <div className="contact-card-info">
              <span className="contact-card-title">Phone</span>
              <span className="contact-card-val">+91 {phone}</span>
            </div>
            <div className="contact-card-actions">
              <button
                className={`contact-copy-btn ${copiedType === 'phone' ? 'copied' : ''}`}
                onClick={() => copyToClipboard(phone, 'phone')}
                title="Copy phone number to clipboard"
              >
                {copiedType === 'phone' ? (
                  <>
                    <FiCheck size={16} />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy size={16} />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <a
                href={`tel:${phone}`}
                className="contact-send-btn"
                title="Call phone"
              >
                <FiPhone size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Social Link Row */}
        <div className="contact-social-row">
          <a
            href="https://www.linkedin.com/in/samiksha-devardekar-749343253"
            target="_blank"
            rel="noreferrer"
            className="social-btn linkedin"
          >
            <FiLinkedin size={18} />
            <span>Connect on LinkedIn</span>
          </a>
          <a
            href="https://github.com/SamikshaDevardekar"
            target="_blank"
            rel="noreferrer"
            className="social-btn github"
          >
            <FaGithub size={18} />
            <span>GitHub Profile</span>
          </a>
          <div className="location-pill">
            <FiMapPin size={15} />
            <span>Kolhapur, India · Open to Relocation & Remote</span>
          </div>
        </div>
      </div>
    </section>
  )
}
