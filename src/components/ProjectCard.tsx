import { FiCheck } from 'react-icons/fi'

export interface ProjectData {
  title: string
  category: string
  description: string
  tags: string[]
  highlights: string[]
}

interface ProjectCardProps {
  project: ProjectData
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="project-card-interactive project-card-textonly">
      <div className="project-card-header">
        <span className="project-category-badge-inline">{project.category}</span>
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <ul className="project-highlights">
          {project.highlights.map((h, i) => (
            <li key={i} className="highlight-item">
              <FiCheck className="highlight-icon" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
