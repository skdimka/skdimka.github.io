import { useEffect } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { getContent } from '@/modules/Content/content'
import { Hero } from './Hero'
import { initGlow } from './glow.logic'

const meta = {
  title: 'Modules/Hero',
  component: Hero,
  parameters: { layout: 'fullscreen' },
  args: { lang: 'en', profile: getContent('en').profile },
  decorators: [
    (Story) => {
      useEffect(() => {
        const root = document.querySelector<HTMLElement>('[data-glow]')
        return root ? initGlow(root) : undefined
      }, [])
      return <Story />
    },
  ],
} satisfies Meta<typeof Hero>

export default meta
type Story = StoryObj<typeof meta>

export const English: Story = {}

export const Russian: Story = {
  args: { lang: 'ru', profile: getContent('ru').profile },
}
