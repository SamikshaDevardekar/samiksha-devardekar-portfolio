import { useEffect } from 'react'

const skills = [
  'Java',
  'Spring Boot',
  'Microservices',
  'REST APIs',
  'PostgreSQL',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Git',
  'GitHub',
  'HTML',
  'CSS',
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
    degree: 'B.Tech',
    school: "KIT's College of Engineering, Kolhapur",
    grade: 'First class distinction (9.35/10)',
  },
  {
    period: '2020 - 2021',
    degree: 'HSC',
    school: 'Shri. P. B. Patil Jr. College, Mudal',
    grade: 'First class distinction (97.67%)',
  },
  {
    period: '2018 - 2019',
    degree: 'SSC',
    school: 'Shri. M. V. Warake Highschool, Turambe',
    grade: 'First class distinction (96.00%)',
  },
]

const projects = [
  {
    title: 'Fashion Recommendation System',
    description: 'Built an intelligent fashion search platform using machine learning and deep learning to suggest personalized outfits and accessories from images.',
  },
  {
    title: 'Mental Health Tracker',
    description: 'Created a wellness web app with daily mood logging, activity tracking, and personalized insights to support consistent mental health habits.',
  },
  {
    title: 'Dairy Farm Automation',
    description: 'Developed a livestock records platform with reusable React components, REST API integration, and validation-first data entry workflows.',
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
      { threshold: 0.2 },
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
          <div>
            <p className="tag">Java Full Stack Developer</p>
            <h1 className="name-animated">Samiksha Devardekar</h1>
            <p className="hero-subtitle">
              Building modern, scalable, and user-focused digital products with Java, Spring Boot,
              Microservices, React, and TypeScript.
            </p>
            <div className="hero-actions">
              <a
                className="resume-btn"
                href="https://drive.google.com/file/d/1YHcDHq5_tfoS3lDu7JNqeHpA_dPTGPuQ/view?usp=drivesdk"
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
                LinkedIn
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
            <article key={project.title} className="card">
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
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="panel reveal">
        <h2>Core Strengths</h2>
        <div className="cards">
          {strengths.map((strength) => (
            <article key={strength} className="card">
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
              <p>{item.school}</p>
              <p>{item.grade}</p>
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
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.54c0-1.07-.8-1.91-1.92-1.91S3.3 3.89 3.3 4.96c0 1.05.79 1.9 1.9 1.9h.02c1.13 0 1.94-.85 1.94-1.9ZM20.7 13.41c0-3.5-1.87-5.13-4.36-5.13-2.01 0-2.92 1.1-3.42 1.87V8.5H9.55c.04 1.09 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.68.12-.92.27-.68.89-1.39 1.92-1.39 1.35 0 1.9 1.03 1.9 2.54V20h3.38v-6.59Z" />
          </svg>
          LinkedIn
        </a>
        <a href="tel:9404581956" aria-label="Call">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19.95 15.39c-.32 0-1.57-.25-1.92-.32-.48-.1-.95.05-1.28.38l-1.4 1.4a14.92 14.92 0 0 1-8.2-8.2l1.4-1.4c.34-.34.48-.81.38-1.28-.07-.35-.32-1.6-.32-1.92A2.05 2.05 0 0 0 6.56 2H4.05C2.92 2 2 2.92 2 4.05 2 14.52 9.48 22 19.95 22 21.08 22 22 21.08 22 19.95v-2.51a2.05 2.05 0 0 0-2.05-2.05Z" />
          </svg>
          Call
        </a>
        <a href="mailto:samikshadevardekar1956@gmail.com" aria-label="Email">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2Zm2 5.27-8.95 5.6a2 2 0 0 1-2.1 0L2 9.27V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.27Z" />
          </svg>
          Email
        </a>
      </div>
      <p className="site-footer reveal">
        © {new Date().getFullYear()} Samiksha Devardekar · <a href="mailto:samikshadevardekar1956@gmail.com">samikshadevardekar1956@gmail.com</a>
      </p>
    </main>
  )
}

export default App
