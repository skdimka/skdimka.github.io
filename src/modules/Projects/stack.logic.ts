import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

/** Media query under which cards are stacked (mirrors projects.scss). */
export const STACK_QUERY =
  '(min-width: 861px) and (prefers-reduced-motion: no-preference)'

/** Edges of this many cards stay visible above the pinned one. */
const VISIBLE_DEPTH = 3

/**
 * Stacked project cards. Every card has the same, almost full-screen height
 * and pins under the header (CSS `position: sticky`). Each time a new card
 * slides over, every card underneath goes one level deeper: it steps up by
 * `--stack-step`, shrinks and dims, so their top edges form a visible
 * stack. Cards deeper than VISIBLE_DEPTH fade out behind the others.
 * Desktop only and off for reduced motion. Returns a cleanup function.
 *
 * Scroll triggers are static `.projects__marker` elements placed where each
 * card sits in the flow: a stuck sticky card reports its pinned position,
 * so it can't be a reliable trigger itself.
 */
export function initProjectStack(root: ParentNode = document): () => void {
  gsap.registerPlugin(ScrollTrigger)
  const mm = gsap.matchMedia()

  mm.add(STACK_QUERY, () => {
    const list = root.querySelector<HTMLElement>('.projects')
    if (!list) return

    const cards = gsap.utils.toArray<HTMLElement>(
      list.querySelectorAll(':scope > .project-card'),
    )
    const markers = gsap.utils.toArray<HTMLElement>(
      list.querySelectorAll(':scope > .projects__marker'),
    )
    const step = () =>
      parseFloat(getComputedStyle(list).getPropertyValue('--stack-step')) || 0

    // Look of a card `depth` levels below the top of the stack.
    const atDepth = (depth: number) => {
      const d = Math.min(depth, VISIBLE_DEPTH)
      return {
        y: () => -d * step(),
        scale: 1 - d * 0.05,
        filter: `brightness(${1 - d * 0.15})`,
        opacity: depth > VISIBLE_DEPTH ? 0 : 1,
      }
    }

    // Arrival of card `next` (from entering the viewport until pinned)
    // pushes every earlier card one level deeper.
    for (let next = 1; next < cards.length; next++) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: markers[next - 1],
          // Marker bottom = card top: the card enters at the viewport bottom.
          start: 'bottom bottom',
          // Marker top = card top minus --stack-top: the card is pinned.
          end: 'top top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      })
      for (
        let card = Math.max(0, next - VISIBLE_DEPTH - 1);
        card < next;
        card++
      ) {
        const depth = next - card
        tl.fromTo(
          cards[card],
          atDepth(depth - 1),
          { ...atDepth(depth), ease: 'none', immediateRender: false },
          0,
        )
      }
    }
  })

  return () => mm.revert()
}
