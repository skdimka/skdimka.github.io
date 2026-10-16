import './project-structure.scss'

export interface ProjectStructureProps {
  /** Tree lines; indentation is two spaces per level. */
  lines: string[]
  label: string
  notice: string
}

/**
 * Stand-in for screenshots on closed projects: a notice and a module tree.
 */
export function ProjectStructure({
  lines,
  label,
  notice,
}: ProjectStructureProps) {
  return (
    <figure className="project-structure">
      <p className="project-structure__notice">
        <span aria-hidden="true">🔒</span> {notice}
      </p>
      <figcaption className="project-structure__label">{label}</figcaption>
      <ul className="project-structure__tree">
        {lines.map((line, index) => {
          const depth = line.length - line.trimStart().length
          return (
            <li
              key={index}
              className="project-structure__line"
              style={{ paddingLeft: `${depth * 0.5}em` }}
            >
              {line.trim()}
            </li>
          )
        })}
      </ul>
    </figure>
  )
}
