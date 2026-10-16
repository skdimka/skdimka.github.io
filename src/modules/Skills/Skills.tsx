import { useTranslations, type Lang } from '@/modules/I18n/i18n'
import './skills.scss'

export interface SkillsProps {
  lang: Lang
  groups: Record<string, string[]>
}

export function Skills({ lang, groups }: SkillsProps) {
  const t = useTranslations(lang)

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title" data-reveal>
          {t('skills.title')}
        </h2>
        <div className="skills">
          {Object.entries(groups).map(([group, items]) => (
            <div key={group} className="skills__group glass" data-reveal>
              <h3 className="skills__title">{group}</h3>
              <ul className="tag-list">
                {items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
