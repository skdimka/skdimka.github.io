# AGENTS.md

Rules for humans and AI agents working on this repository. Read before
changing code.

## Overview

Personal portfolio of Dmitrii Skopintsev: a static Astro site in English
(`/`) and Russian (`/ru/`). UI is written as React components rendered at
build time — the page ships no framework runtime, only a small script that
enhances the markup (GSAP reveal, pointer glow).

## Stack

- **Framework:** Astro (static output), React for components.
- **Language:** TypeScript (strict).
- **Styles:** SCSS, BEM class names, design tokens in `src/styles/_tokens.scss`.
- **Motion:** GSAP + ScrollTrigger.
- **Tests:** Vitest (unit, Node) and Storybook stories run in Chromium via
  Playwright, with axe accessibility checks.
- **Quality:** ESLint, Prettier, Stylelint, husky + lint-staged, commitlint.

## Structure

```text
src/
  modules/     # Self-contained units: component, styles, logic, stories, tests
  layouts/     # Astro layouts (<head>, global styles)
  pages/       # Routes: index.astro (en), ru/index.astro
  runtime/     # Client entry that enhances server-rendered markup
  styles/      # Tokens and global styles
  assets/      # Images optimized by astro:assets
```

A module lives in `src/modules/<Name>/` and owns everything it needs:

| File               | Purpose                                         |
| ------------------ | ----------------------------------------------- |
| `Name.tsx`         | Server-rendered component (no hydration)        |
| `name.scss`        | Module styles, imported by the component        |
| `*.logic.ts`       | Framework-agnostic DOM logic, returns a cleanup |
| `Name.stories.tsx` | Stories — they are tests, not just demos        |
| `*.node.test.ts`   | Unit tests that run in Node                     |

Import across modules with the `@/modules/...` alias, everything else in
`src` with `@/...`.

## Content and i18n

- Text content per language: `src/modules/Content/content.ts`.
- UI strings: `src/modules/I18n/i18n.ts`. Every language must have the same
  keys — a unit test enforces this.
- Images are optimized in `HomePage.astro` with `getImage` and passed to
  React components as plain `<img>` props.

## Rules

- Keep logic out of the render layer: DOM behavior goes to `*.logic.ts`
  and is started from `src/runtime/main.ts`.
- Respect `prefers-reduced-motion`: motion is opt-in at runtime.
- Accessibility is part of the contract. Stories fail on axe violations
  (`a11y.test: 'error'`); fix the markup instead of disabling rules.
- Every new or changed UI module gets stories covering default, language
  and mobile variants; add `play` assertions for behavior that matters.
- SCSS: `@use`, never `@import`; BEM class names (Stylelint enforces).
- Do not copy code from employer or client projects — only public work.

## Commands

```sh
npm run dev              # Dev server at localhost:4321
npm run build            # Static build → dist/
npm run check            # Astro + TypeScript diagnostics
npm test                 # Unit + Storybook tests
npm run storybook        # Storybook at localhost:6006
npm run lint             # ESLint, Stylelint, Prettier check
npm run fix              # Auto-fix all of the above
```

## Commits

[Conventional Commits](https://www.conventionalcommits.org), scope is the
module name when there is one:

```text
feat(Hero): add pointer glow
fix(LangSwitcher): include visible text in accessible name
docs: describe module structure
```

Checked by commitlint in the `commit-msg` hook; `pre-commit` runs
lint-staged.

## Before finishing a task

- `npm run lint`, `npm run check`, `npm test` and `npm run build` pass.
- Both `/` and `/ru/` are checked, desktop and mobile width.
- No secrets, personal data beyond what the site already shows, or stray
  `console.log` calls.
