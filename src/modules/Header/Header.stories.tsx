import type { Meta, StoryObj } from '@storybook/react-vite'
import { Header } from './Header'

const meta = {
  title: 'Modules/Header',
  component: Header,
  parameters: { layout: 'fullscreen' },
  args: { lang: 'en', cv: '/Dmitrii_Skopintsev_CV.pdf' },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const English: Story = {}

export const Russian: Story = {
  args: { lang: 'ru', cv: '/Skopintsev_Dmitrii_CV_RU.pdf' },
}

export const Mobile: Story = {
  globals: { viewport: { value: 'mobile1' } },
}
