/**
 * Moves the hero glow after the pointer. Writes only CSS variables inside
 * one rAF per frame, so the browser just composites a transformed layer.
 * The glow fades out when the pointer leaves the hero and fades back in on
 * return (the transition lives in CSS). Returns a cleanup function.
 */
export function initGlow(root: HTMLElement): () => void {
  if (!window.matchMedia('(pointer: fine)').matches) return () => {}

  let frame = 0
  let x = 0
  let y = 0

  function onPointerMove(event: PointerEvent) {
    const rect = root.getBoundingClientRect()
    x = event.clientX - rect.left
    y = event.clientY - rect.top
    if (frame) return
    frame = requestAnimationFrame(() => {
      root.style.setProperty('--x', `${x}px`)
      root.style.setProperty('--y', `${y}px`)
      frame = 0
    })
  }

  function setVisible(visible: boolean) {
    root.style.setProperty('--glow-opacity', visible ? '1' : '0')
  }

  const onPointerEnter = () => setVisible(true)
  const onPointerLeave = () => setVisible(false)

  root.addEventListener('pointermove', onPointerMove)
  root.addEventListener('pointerenter', onPointerEnter)
  root.addEventListener('pointerleave', onPointerLeave)

  return () => {
    root.removeEventListener('pointermove', onPointerMove)
    root.removeEventListener('pointerenter', onPointerEnter)
    root.removeEventListener('pointerleave', onPointerLeave)
    cancelAnimationFrame(frame)
  }
}
