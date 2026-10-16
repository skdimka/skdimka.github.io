import { describe, expect, it } from 'vitest'
import { homePath, ui, useTranslations, type Lang } from './i18n'

describe('homePath', () => {
  it('keeps the default language at the root', () => {
    expect(homePath('en')).toBe('/')
  })

  it('prefixes other languages', () => {
    expect(homePath('ru')).toBe('/ru/')
  })
})

describe('ui dictionaries', () => {
  it('have the same keys in every language', () => {
    const [base, ...rest] = Object.values(ui).map((dict) =>
      Object.keys(dict).sort(),
    )
    rest.forEach((keys) => expect(keys).toEqual(base))
  })

  it('translate by key', () => {
    const t = useTranslations('ru' satisfies Lang)
    expect(t('nav.projects')).toBe('Проекты')
  })
})
