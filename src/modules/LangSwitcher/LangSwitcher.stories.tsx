import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, within } from 'storybook/test'
import { LangSwitcher } from './LangSwitcher'

const meta = {
  title: 'Modules/LangSwitcher',
  component: LangSwitcher,
  args: { lang: 'en', label: 'Language' },
} satisfies Meta<typeof LangSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const English: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('link', { name: /English/ })).toHaveAttribute(
      'aria-current',
      'page',
    )
    await expect(
      canvas.getByRole('link', { name: /Русский/ }),
    ).not.toHaveAttribute('aria-current')
  },
}

export const Russian: Story = {
  args: { lang: 'ru', label: 'Язык' },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByRole('link', { name: /Русский/ })).toHaveAttribute(
      'href',
      '/ru/',
    )
  },
}
