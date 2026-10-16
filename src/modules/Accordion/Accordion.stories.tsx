import { useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, userEvent, within } from 'storybook/test'
import { Accordion } from './Accordion'
import { initAccordions } from './accordion.logic'

const meta = {
  title: 'Modules/Accordion',
  component: Accordion,
  decorators: [
    (Story) => {
      useEffect(() => initAccordions(), [])
      return (
        <div style={{ maxWidth: 480, padding: 24 }}>
          <Story />
        </div>
      )
    },
  ],
  args: {
    openLabel: 'More about the project',
    closeLabel: 'Hide details',
    children: (
      <ul>
        <li>Stations map on Mapbox GL</li>
        <li>PDF viewer on pdf.js</li>
      </ul>
    ),
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const toggle = await canvas.findByRole('button', {
      name: 'More about the project',
    })
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(toggle)
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await expect(toggle).toHaveAccessibleName('Hide details')
  },
}
