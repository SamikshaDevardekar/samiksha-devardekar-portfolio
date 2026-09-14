import { FiAward, FiCode, FiLayers, FiCheckCircle } from 'react-icons/fi'

export const StatsBar = () => {
  const stats = [
    {
      value: '9.34',
      unit: '/ 10',
      label: 'B.Tech CGPA',
      sublabel: 'Outstanding Distinction',
      icon: FiAward,
      accent: 'stat-accent-pink',
    },
    {
      value: '12+',
      unit: 'Tech',
      label: 'Skills Mastered',
      sublabel: 'Java, Spring Boot, React, TS',
      icon: FiCode,
      accent: 'stat-accent-cyan',
    },
    {
      value: '3+',
      unit: 'Shipped',
      label: 'Full-Stack Apps',
      sublabel: 'GenAI, IoT & HealthTech',
      icon: FiLayers,
      accent: 'stat-accent-purple',
    },
    {
      value: '100%',
      unit: 'Ready',
      label: 'Production Focus',
      sublabel: 'REST APIs, Microservices, RBAC',
      icon: FiCheckCircle,
      accent: 'stat-accent-emerald',
    },
  ]

  return (
    <section className="stats-bar-section reveal">
      <div className="stats-grid">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div key={idx} className={`stat-card ${stat.accent}`}>
              <div className="stat-icon-wrapper">
                <Icon size={22} className="stat-icon" />
              </div>
              <div className="stat-content">
                <div className="stat-number-row">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-unit">{stat.unit}</span>
                </div>
                <h4 className="stat-label">{stat.label}</h4>
                <p className="stat-sublabel">{stat.sublabel}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
