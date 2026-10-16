/** Page scroll (px) after which open accordions close by themselves. */
const CLOSE_AFTER_SCROLL = 120

function setOpen(root: HTMLElement, open: boolean) {
  const toggle = root.querySelector<HTMLButtonElement>('.accordion__toggle')
  const label = root.querySelector<HTMLElement>('.accordion__label')
  const panel = root.querySelector<HTMLElement>('.accordion__panel')
  if (!toggle || !label || !panel) return

  root.classList.toggle('is-collapsed', !open)
  toggle.setAttribute('aria-expanded', String(open))
  label.textContent = open
    ? (toggle.dataset.labelClose ?? '')
    : (toggle.dataset.labelOpen ?? '')
  // Collapsed content must not be reachable by keyboard or screen readers.
  panel.inert = !open
}

/**
 * Collapses every `[data-accordion]` and makes its button toggle it. An
 * opened accordion closes again once the page scrolls on, so expanded
 * content never makes a card scroll inside. Returns a cleanup function.
 */
export function initAccordions(root: ParentNode = document): () => void {
  const accordions = [...root.querySelectorAll<HTMLElement>('[data-accordion]')]
  let openedAt: number | null = null

  const closeAll = () => {
    accordions.forEach((el) => setOpen(el, false))
    openedAt = null
  }

  const onClick = (event: Event) => {
    const el = (event.currentTarget as HTMLElement).closest<HTMLElement>(
      '[data-accordion]',
    )
    if (!el) return
    const open = el.classList.contains('is-collapsed')
    closeAll()
    if (open) {
      setOpen(el, true)
      openedAt = window.scrollY
    }
  }

  const onScroll = () => {
    if (
      openedAt !== null &&
      Math.abs(window.scrollY - openedAt) > CLOSE_AFTER_SCROLL
    ) {
      closeAll()
    }
  }

  const toggles = accordions
    .map((el) => el.querySelector<HTMLButtonElement>('.accordion__toggle'))
    .filter((el): el is HTMLButtonElement => el !== null)

  closeAll()
  toggles.forEach((btn) => btn.addEventListener('click', onClick))
  window.addEventListener('scroll', onScroll, { passive: true })

  return () => {
    toggles.forEach((btn) => btn.removeEventListener('click', onClick))
    window.removeEventListener('scroll', onScroll)
  }
}
