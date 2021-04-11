import I18n from '@s-ui/i18n'
import Polyglot from '@s-ui/i18n/lib/adapters/polyglot'
import es from './es.json'

function createI18n({culture, adapter, languages}) {
  const i18n = new I18n({adapter})
  i18n.languages = languages
  i18n.culture = culture
  return i18n
}

const LANGUAGES = {
  SPANISH: 'es-ES'
}

async function initI18n() {
  const culture = 'es-ES'
  const adapter = new Polyglot()

  const importLiterals = {
    [LANGUAGES.SPANISH]: () => {
      return es
    }
  }
  const languageModule = await importLiterals[culture]()
  const dictionaries = {[culture]: languageModule}

  return createI18n({culture, adapter, languages: dictionaries})
}

export {initI18n}
