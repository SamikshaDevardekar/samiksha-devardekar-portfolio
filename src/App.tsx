import { useEffect } from 'react'
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaServer,
} from 'react-icons/fa'
import {
  SiSpringboot,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
} from 'react-icons/si'
import {
  FiExternalLink,
  FiLinkedin,
  FiCode,
  FiCpu,
  FiShield,
  FiLayout,
  FiUsers,
  FiAward,
  FiCheckCircle,
} from 'react-icons/fi'

import { Navbar } from './components/Navbar'
import { StatsBar } from './components/StatsBar'
import { ProjectCard, type ProjectData } from './components/ProjectCard'
import { ContactSection } from './components/ContactSection'

const RESUME_URL =
  'https://drive.google.com/file/d/1ntxKXCMGqBHx9h61Zhsan8IyaGJnVfLd/view?usp=drive_link'

const skillDomains = [
  {
    title: 'Backend & APIs',
    description:
      'High-performance RESTful APIs, Spring Boot microservices, security & persistence',
    skills: [
      { name: 'Java', icon: FaJava, color: '#f89820' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f' },
      { name: 'Microservices', icon: FaServer, color: '#a855f7' },
      { name: 'REST APIs', icon: FiExternalLink, color: '#38bdf8' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    ],
  },
  {
    title: 'Frontend & Modern Web',
    description:
      'Type-safe interactive user interfaces with responsive, accessible designs',
    skills: [
      { name: 'React.js', icon: FaReact, color: '#61dafb' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'HTML5', icon: FaHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
    ],
  },
  {
    title: 'Tools & Architecture',
    description:
      'Version control, Microsoft Graph API, multi-tenancy & enterprise workflows',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#f05032' },
      { name: 'GitHub', icon: FaGithub, color: '#ffffff' },
      { name: 'MS Graph API', icon: FiExternalLink, color: '#00a4ef' },
      { name: 'Multi-Tenant RBAC', icon: FiShield, color: '#ec4899' },
    ],
  },
]

const projects: ProjectData[] = [
  {
    title: 'GenAI Based YouTube Video Summarizer',
    category: 'GenAI & NLP',
    description:
      'A modular AI pipeline that processes YouTube URLs to extract video transcripts, generate multilingual summaries, and synthesize audio outputs with interactive timestamp markers.',
    tags: ['Python', 'FastAPI', 'OpenAI API', 'MongoDB'],
    highlights: [
      'Multilingual transcript parsing and instant audio narration',
      'Interactive timestamp breakdown markers for rapid content navigation',
      'AI-driven contextual key takeaways with high precision',
    ],
  },
  {
    title: 'Dairy Farm Automation Platform',
    category: 'Enterprise IoT & Web',
    description:
      'An end-to-end telemetry and operations platform tracking cattle health metrics, calf growth lifecycle, breeding history, and automated environmental sensors.',
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    highlights: [
      'Real-time cattle health telemetry with temperature & activity indices',
      'Calf lifecycle growth curves and breeding status workflows',
      'High-density, responsive dashboard for multi-barn monitoring',
    ],
  },
  {
    title: 'MindScape - Mental Health Tracker',
    category: 'Wellness & Behavioral Analytics',
    description:
      'A holistic wellness web application featuring daily mood logging, mindfulness activity habit tracking, and personalized emotional insights to encourage mental well-being.',
    tags: ['Python', 'NLP', 'SQLite'],
    highlights: [
      'Visual mood tracking graphs with weekly emotional distribution charts',
      'Mindfulness streak tracker with daily guided habit checklists',
      'Encrypted local data storage ensuring user privacy and trust',
    ],
  },
]

const experience = [
  {
    role: 'Software Engineer',
    period: 'Jun 2025 - Present',
    badge: 'Current Role',
    points: [
      'Integrated resilient REST APIs to power seamless end-to-end data flow between React frontends and Spring Boot microservices.',
      'Architected Microsoft Graph API-based automated document ingestion and synchronization directly into client-specific OneDrive directories.',
      'Implemented robust multi-tenant architecture supporting agency and enterprise organizational partitions with fine-grained role-based access control (RBAC).',
    ],
    tech: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'MS Graph API', 'RBAC'],
  },
  {
    role: 'Software Developer Intern',
    period: 'Jan 2025 - May 2025',
    badge: 'Internship',
    points: [
      'Engineered responsive React interfaces for end-to-end customer onboarding, device installation, and automated requisition workflows.',
      'Enforced mobile-first responsive design paradigms, cross-browser compatibility, and WCAG accessibility standards across core application modules.',
      'Collaborated in agile Git workflows, participating in sprint reviews, code refactoring, and integration testing.',
    ],
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Git', 'Agile'],
  },
]

const strengths = [
  {
    title: 'Clean & Scalable Code',
    desc: 'Writing modular, self-documenting code built for maintainability, reliability, and long-term extensibility.',
    icon: FiCode,
  },
  {
    title: 'Secure API Architecture',
    desc: 'Designing backend microservices with rigorous authentication, data validation, and optimal query performance.',
    icon: FiShield,
  },
  {
    title: 'Responsive Modern UIs',
    desc: 'Crafting fluid, accessible web interfaces that render flawlessly across smartphones, tablets, and desktops.',
    icon: FiLayout,
  },
  {
    title: 'Collaborative Agile Git',
    desc: 'Thriving in fast-paced teams with Git branching strategies, detailed code reviews, and cross-functional alignment.',
    icon: FiUsers,
  },
]

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    period: '2021 - 2025',
    school: "KIT's College of Engineering, Kolhapur",
    grade: 'Outstanding Distinction (9.34 / 10 CGPA)',
    badge: 'Top Tier Honors',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    period: '2020 - 2021',
    school: 'Shri. P. B. Patil Jr. College, Mudal',
    grade: 'First Class with Distinction (97.67%)',
    badge: 'Distinction',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    period: '2018 - 2019',
    school: 'Shri. M. V. Warake Highschool, Turambe',
    grade: 'First Class with Distinction (96.00%)',
    badge: 'Distinction',
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
      { threshold: 0.12 },
    )

    revealedElements.forEach((element) => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <Navbar resumeUrl={RESUME_URL} />

      <main className="container">
        {/* HERO SECTION */}
        <section id="hero" className="panel hero-panel hero-standalone reveal">
          <div className="hero-badge-row">
            <div className="status-pill">
              <span className="status-indicator"></span>
              <span>Available for Full-Time Opportunities</span>
            </div>
            <div className="hero-location-badge">
              <span>📍 Kolhapur, India · Open to Relocation & Remote</span>
            </div>
          </div>

          <h1 className="hero-name">Samiksha Devardekar</h1>

          <div className="hero-title-badge">
            <FiCpu size={18} />
            <span>Java Full Stack Developer</span>
          </div>

          <p className="hero-description">
            Building scalable, production-ready digital products with{' '}
            <strong>Java</strong>, <strong>Spring Boot</strong>,{' '}
            <strong>Microservices</strong>, <strong>React.js</strong>, and{' '}
            <strong>TypeScript</strong>. Focused on clean architecture, high
            performance, and exceptional user experiences.
          </p>

          <div className="hero-tech-pills">
            <span className="hero-tech-pill">Java 17</span>
            <span className="hero-tech-pill">Spring Boot 3</span>
            <span className="hero-tech-pill">Microservices</span>
            <span className="hero-tech-pill">REST APIs</span>
            <span className="hero-tech-pill">PostgreSQL</span>
            <span className="hero-tech-pill">React.js</span>
            <span className="hero-tech-pill">TypeScript</span>
          </div>

          <div className="hero-ctas">
            <a
              className="cta-primary"
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink size={18} />
              <span>View Resume</span>
            </a>
            <a
              className="cta-ghost"
              href="https://www.linkedin.com/in/samiksha-devardekar-749343253"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              className="cta-ghost"
              href="https://github.com/SamikshaDevardekar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={18} />
              <span>GitHub</span>
            </a>
            <a
              className="cta-ghost"
              href="#contact"
            >
              <span>Get In Touch</span>
            </a>
          </div>
        </section>

        {/* STATS BAR */}
        <StatsBar />

        {/* ABOUT ME SECTION (BENTO LAYOUT) */}
        <section id="about" className="panel reveal">
          <div className="section-header">
            <span className="section-tag">Background & Philosophy</span>
            <h2>About Me</h2>
          </div>

          <div className="about-grid">
            <div className="about-main-text">
              <p>
                Hello! I am <strong>Samiksha Devardekar</strong>, a Software
                Engineer with a strong foundation in Computer Science and an
                uncompromising dedication to engineering quality. I graduated
                with an Outstanding CGPA of <strong>9.34 / 10</strong> from KIT's
                College of Engineering, Kolhapur.
              </p>
              <p>
                My engineering focus bridges both sides of modern applications:
                designing resilient, secure backend systems with{' '}
                <strong>Java & Spring Boot microservices</strong>, while
                crafting fluid, high-converting frontends with{' '}
                <strong>React and TypeScript</strong>.
              </p>
              <p>
                Whether integrating third-party APIs like Microsoft Graph,
                structuring multi-tenant RBAC systems, or exploring AI-driven
                summarizers, I take pride in delivering maintainable, production-ready
                software that solves real problems.
              </p>
            </div>

            <div className="about-bento-cards">
              <div className="about-mini-card">
                <div className="about-mini-title">
                  <FiCode className="about-mini-icon" />
                  <span>Backend First Mindset</span>
                </div>
                <p className="about-mini-desc">
                  Designing secure RESTful contracts, relational models in PostgreSQL, and clean microservices.
                </p>
              </div>

              <div className="about-mini-card">
                <div className="about-mini-title">
                  <FiLayout className="about-mini-icon" />
                  <span>Modern Frontend Craft</span>
                </div>
                <p className="about-mini-desc">
                  Building reactive, responsive, component-driven UIs with strict TypeScript types and smooth styling.
                </p>
              </div>

              <div className="about-mini-card">
                <div className="about-mini-title">
                  <FiAward className="about-mini-icon" />
                  <span>Academic Excellence</span>
                </div>
                <p className="about-mini-desc">
                  Consistently at the top tier: 9.34 B.Tech CGPA, 97.67% HSC, and 96.00% SSC.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="panel reveal">
          <div className="section-header">
            <span className="section-tag">Career Milestones</span>
            <h2>Professional Experience</h2>
            <p className="section-subtitle">
              Demonstrated track record of delivering enterprise features, third-party integrations, and responsive customer-facing portals.
            </p>
          </div>

          <div className="experience-timeline">
            {experience.map((item) => (
              <article key={item.role} className="exp-card">
                <div className="exp-card-header">
                  <h3 className="exp-role-title">{item.role}</h3>
                  <span className="exp-badge">{item.period}</span>
                </div>

                <ul className="exp-points-list">
                  {item.points.map((point) => (
                    <li key={point} className="exp-point-item">
                      <FiCheckCircle size={16} className="point-bullet" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="exp-tech-tags">
                  {item.tech.map((t) => (
                    <span key={t} className="exp-tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="panel reveal">
          <div className="section-header">
            <span className="section-tag">Featured Work</span>
            <h2>Showcase Projects</h2>
            <p className="section-subtitle">
              Selected projects demonstrating full-stack engineering, AI integrations, and high-performance user dashboards.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section id="skills" className="panel reveal">
          <div className="section-header">
            <span className="section-tag">Capabilities</span>
            <h2>Technical Skills</h2>
            <p className="section-subtitle">
              Comprehensive toolkit spanning enterprise backend architectures, modern frontend systems, and developer tooling.
            </p>
          </div>

          <div className="skills-domain-grid">
            {skillDomains.map((domain) => (
              <div key={domain.title} className="skill-domain-card">
                <div className="domain-header">
                  <h3 className="domain-title">{domain.title}</h3>
                  <p className="domain-desc">{domain.description}</p>
                </div>

                <div className="domain-chips">
                  {domain.skills.map((skill) => {
                    const Icon = skill.icon
                    return (
                      <span
                        key={skill.name}
                        className="skill-chip-v2"
                        style={
                          {
                            '--chip-color': skill.color,
                            '--chip-glow': `${skill.color}33`,
                          } as React.CSSProperties
                        }
                      >
                        <Icon />
                        <span>{skill.name}</span>
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CORE STRENGTHS */}
        <section id="strengths" className="panel reveal">
          <div className="section-header">
            <span className="section-tag">Engineering Values</span>
            <h2>Core Strengths</h2>
            <p className="section-subtitle">
              Principles and standards that define how I approach problem solving and engineering teamwork.
            </p>
          </div>

          <div className="strengths-grid">
            {strengths.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="strength-card">
                  <div className="strength-icon-box">
                    <Icon />
                  </div>
                  <h3 className="strength-title">{item.title}</h3>
                  <p className="strength-desc">{item.desc}</p>
                </article>
              )
            })}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="panel reveal">
          <div className="section-header">
            <span className="section-tag">Academic Background</span>
            <h2>Education</h2>
            <p className="section-subtitle">
              A solid foundation in Computer Science principles with a consistent record of distinction.
            </p>
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <article key={item.degree} className="edu-card">
                <div>
                  <div className="edu-card-top">
                    <span className="edu-period">{item.period}</span>
                  </div>
                  <h3 className="edu-degree">{item.degree}</h3>
                  <p className="edu-institution">{item.school}</p>
                </div>

                <div className="edu-badge-score">
                  <FiAward size={16} />
                  <span>{item.grade}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <ContactSection />

        {/* SITE FOOTER */}
        <footer className="site-footer-wrapper reveal">
          <div className="footer-content">
            <span className="footer-brand">Samiksha Devardekar</span>
            <p className="footer-copy">
              Designed & Built with React & TypeScript · ©{' '}
              {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}

export default App
