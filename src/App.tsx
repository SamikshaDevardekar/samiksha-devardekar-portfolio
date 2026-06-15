import { useEffect } from 'react'
import { FaJava, FaReact, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaServer } from 'react-icons/fa'
import { SiSpringboot, SiTypescript, SiTailwindcss, SiPostgresql } from 'react-icons/si'
import { FiExternalLink, FiLinkedin, FiPhone, FiMail } from 'react-icons/fi'

const skills = [
  { name: 'Java', icon: FaJava },
  { name: 'Spring Boot', icon: SiSpringboot },
  { name: 'Microservices', icon: FaServer },
  { name: 'REST APIs', icon: FiExternalLink },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'React', icon: FaReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Git', icon: FaGitAlt },
  { name: 'GitHub', icon: FaGithub },
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
]

const strengths = [
  'Write clean and maintainable code for long-term scalability',
  'Design backend APIs with security and performance in mind',
  'Build responsive and accessible user interfaces',
  'Work effectively in team environments using Git workflows',
]

const education = [
  {
    period: '2021 - 2025',
    degree: 'B.Tech (CSE)',
    school: "KIT's College of Engineering, Kolhapur",
    grade: 'Outstanding (9.49/10)',
  },
  {
    period: '2020 - 2021',
    degree: 'HSC',
    school: 'Shri. P. B. Patil Jr. College, Mudal',
    grade: 'First class with distinction (97.67%)',
  },
  {
    period: '2018 - 2019',
    degree: 'SSC',
    school: 'Shri. M. V. Warake Highschool, Turambe',
    grade: 'First class withdistinction (96.00%)',
  },
]

const projects = [
  {
    title: 'GenAI Based YouTube Video Summarizer',
    description: 'A modular system that processes YouTube URLs to produce multilingual transcripts, AI-driven summaries,timestamps and audio output',
  },
  {
    title: 'Dairy Farm Automation',
    description: 'Developed responsive web interfaces for tracking cattle and calf data, including health, breeding and lifecycle records',
  },
  {
    title: 'Mental Health Tracker',
    description: 'Created a wellness web app with daily mood logging, activity tracking, and personalized insights to support consistent mental health habits.',
  },

]

const experience = [
  {
    role: 'Junior Software Engineer',
    duration: 'Jun 2025 - Present',
    points: [
      'Integrated REST APIs to enable reliable frontend-backend data flow.',
      'Implemented Microsoft Graph API based document upload into customer-specific OneDrive folders.',
      'Built multi-tenant architecture for agencies and organizations with role-based access control.',
    ],
  },
  {
    role: 'Software Developer Intern',
    duration: 'Jan 2025 - May 2025',
    points: [
      'Developed responsive React pages for customer onboarding, installation, and requisition workflows.',
      'Ensured mobile-first behavior and cross-browser compatibility across modules.',
    ],
  },
]

function App() {
  useEffect(() => {
    const revealedElements = document.querySelectorAll<HTMLElement>('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 },
    )

    revealedElements.forEach((element) => observer.observe(element))

    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0
      document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(3))

      const timelineGrids = document.querySelectorAll<HTMLElement>('.timeline-grid')
      timelineGrids.forEach((grid) => {
        const rect = grid.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const start = viewportHeight * 0.85
        const end = -rect.height * 0.25
        const raw = (start - rect.top) / (start - end)
        const clamped = Math.min(1, Math.max(0, raw))
        grid.style.setProperty('--timeline-progress', clamped.toFixed(3))
      })
    }

    updateScrollProgress()
    window.addEventListener('scroll', updateScrollProgress, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateScrollProgress)
    }
  }, [])

  return (
    <main className="container">
      <section className="hero panel reveal">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="name-row">
              <h1 className="name-animated">Samiksha Devardekar</h1>
              <p className="tag tag-desktop">Java Full Stack Developer</p>
            </div>
            <p className="tag tag-mobile">Java Full Stack Developer</p>
            <p className="hero-subtitle">
              Building modern, scalable, and user-focused digital products with Java, Spring Boot,
              Microservices, React, and TypeScript.
            </p>
            <div className="hero-actions">
              <a
                className="resume-btn"
                href="https://drive.google.com/file/d/18LDOLHguSOi-UxnerBQw9pepXpMp3Z36/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
              <a
                className="ghost-btn"
                href="https://www.linkedin.com/in/samiksha-devardekar-749343253"
                target="_blank"
                rel="noreferrer"
              >
                <FiLinkedin size={18} className="btn-icon" />
                <span className="btn-label">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="panel reveal">
        <h2>About Me</h2>
        <p>
          I am Samiksha Devardekar, a software engineer passionate about creating production-ready
          web applications. I enjoy combining strong backend engineering with polished frontend
          design to deliver reliable and meaningful user experiences.
        </p>
      </section>

      <section className="panel reveal timeline-panel">
        <h2>Experience</h2>
        <div className="cards timeline-grid">
          {experience.map((item) => (
            <article key={item.role} className="card timeline-card">
              <h3>{item.role}</h3>
              <p className="muted">{item.duration}</p>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="panel reveal">
        <h2>Projects</h2>
        <div className="cards">
          {projects.map((project) => (
            <article key={project.title} className="card project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel reveal">
        <h2>Technical Skills</h2>
        <div className="skill-list">
          {skills.map((skill) => (
            <span key={skill.name} className="skill-chip">
              <skill.icon size={16} className="skill-icon" />
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      <section className="panel reveal">
        <h2>Core Strengths</h2>
        <div className="cards strengths-grid">
          {strengths.map((strength) => (
            <article key={strength} className="card strength-card">
              <p>{strength}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel reveal timeline-panel">
        <h2>Education</h2>
        <div className="cards timeline-grid">
          {education.map((item) => (
            <article key={item.degree} className="card timeline-card">
              <h3>{item.degree}</h3>
              <p className="muted">{item.period}</p>
              <p className="edu-school">{item.school}</p>
              <p className="edu-grade">{item.grade}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel footer-cta reveal">
        <h2>Open to Opportunities</h2>
        <p>
          I am currently seeking opportunities in backend and full-stack software development where
          I can contribute to impactful products and continue growing as an engineer.
        </p>
      </section>
      
      <div className="footer-icons reveal">
        <a href="https://www.linkedin.com/in/samiksha-devardekar-749343253" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <FiLinkedin size={18} />
          <span>LinkedIn</span>
        </a>
        <a href="tel:9404581956" aria-label="Call">
          <FiPhone size={18} />
          <span>Call</span>
        </a>
        <a href="mailto:samikshadevardekar1956@gmail.com" aria-label="Email">
          <FiMail size={18} />
          <span>Email</span>
        </a>
      </div>
      
      <p className="site-footer reveal">
        © {new Date().getFullYear()} Samiksha Devardekar · <a href="mailto:samikshadevardekar1956@gmail.com">samikshadevardekar1956@gmail.com</a>
      </p>
    </main>
  )
}

export default App
