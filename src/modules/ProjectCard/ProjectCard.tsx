import type { Project } from '@/modules/Content/content'
import {
  ProjectSlider,
  type Slide,
} from '@/modules/ProjectSlider/ProjectSlider'
import { ProjectStructure } from '@/modules/ProjectStructure/ProjectStructure'
import { Accordion } from '@/modules/Accordion/Accordion'
import './project-card.scss'

export interface ProjectCardProps {
  project: Omit<Project, 'slides'>
  slides: Slide[]
  roleLabel: string
  stackLabel: string
  ndaLabel: string
  structureLabel: string
  moreLabel: string
  lessLabel: string
  eager?: boolean
}

function displayUrl(url: string) {
  const { host, pathname } = new URL(url)
  return host + pathname.replace(/\/$/, '')
}

export function ProjectCard({
  project,
  slides,
  roleLabel,
  stackLabel,
  ndaLabel,
  structureLabel,
  moreLabel,
  lessLabel,
  eager = false,
}: ProjectCardProps) {
  return (
    <article className="project-card glass" data-reveal>
      <div className="project-card__media">
        {project.nda ? (
          <ProjectStructure
            lines={project.nda.structure}
            label={structureLabel}
            notice={ndaLabel}
          />
        ) : (
          <ProjectSlider slides={slides} label={project.title} eager={eager} />
        )}
        {project.links.length > 0 && (
          <ul className="project-card__links">
            {project.links.map((url) => (
              <li key={url}>
                <a
                  className="project-card__link"
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {displayUrl(url)}
                  <span aria-hidden="true"> ↗</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>
        <p className="project-card__role">
          <strong>{roleLabel}:</strong> {project.role}
        </p>
        <ul className="tag-list" aria-label={stackLabel}>
          {project.stack.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
        <Accordion openLabel={moreLabel} closeLabel={lessLabel}>
          <ul className="project-card__highlights">
            {project.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Accordion>
      </div>
    </article>
  )
}
