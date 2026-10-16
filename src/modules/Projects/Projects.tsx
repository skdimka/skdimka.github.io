import { Fragment } from 'react'
import type { Project } from '@/modules/Content/content'
import { useTranslations, type Lang } from '@/modules/I18n/i18n'
import { ProjectCard } from '@/modules/ProjectCard/ProjectCard'
import type { Slide } from '@/modules/ProjectSlider/ProjectSlider'
import './projects.scss'

export interface ProjectsItem {
  project: Omit<Project, 'slides'>
  slides: Slide[]
}

export interface ProjectsProps {
  lang: Lang
  items: ProjectsItem[]
}

export function Projects({ lang, items }: ProjectsProps) {
  const t = useTranslations(lang)

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title" data-reveal>
          {t('projects.title')}
        </h2>
        <div className="projects">
          {items.map(({ project, slides }, index) => (
            <Fragment key={project.title}>
              {/* Static marker of where the card sits in the flow: sticky
                  cards can't be scroll triggers (see stack.logic.ts). */}
              {index > 0 && (
                <span className="projects__marker" aria-hidden="true" />
              )}
              <ProjectCard
                project={project}
                slides={slides}
                roleLabel={t('projects.role')}
                stackLabel={t('projects.stack')}
                ndaLabel={t('projects.nda')}
                structureLabel={t('projects.structure')}
                moreLabel={t('projects.more')}
                lessLabel={t('projects.less')}
                eager={index === 0}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
