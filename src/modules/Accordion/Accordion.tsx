import { useId, type ReactNode } from 'react'
import './accordion.scss'

export interface AccordionProps {
  /** Button text while collapsed. */
  openLabel: string
  /** Button text while expanded. */
  closeLabel: string
  children: ReactNode
}

/**
 * Disclosure with an animated panel. Server-rendered expanded, so the
 * content is readable without JS; `accordion.logic.ts` collapses it and
 * wires the button.
 */
export function Accordion({ openLabel, closeLabel, children }: AccordionProps) {
  const panelId = useId()

  return (
    <div className="accordion" data-accordion>
      <button
        type="button"
        className="accordion__toggle"
        aria-expanded="true"
        aria-controls={panelId}
        data-label-open={openLabel}
        data-label-close={closeLabel}
      >
        <span className="accordion__label">{closeLabel}</span>
        <span className="accordion__icon" aria-hidden="true" />
      </button>
      <div className="accordion__panel" id={panelId}>
        <div className="accordion__inner">{children}</div>
      </div>
    </div>
  )
}
