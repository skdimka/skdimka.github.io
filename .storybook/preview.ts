import type { Preview } from '@storybook/react-vite'
import '../src/styles/main.scss'

const preview: Preview = {
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    // Fail the story test run on accessibility violations.
    a11y: { test: 'error' },
  },
}

export default preview
