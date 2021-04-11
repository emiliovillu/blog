import {useContext} from 'react'
import {Context} from '../../context'

const baseClass = 'wb-Aside'

export function Aside() {
  const {i18n} = useContext(Context)

  return (
    <aside className={baseClass}>
      <a
        className={`${baseClass}-link`}
        href={i18n.t('ASIDE.LINK.SUZUKI.URL')}
        target="_blank"
        rel="noreferrer"
      >
        {i18n.t('ASIDE.LINK.SUZUKI.TEXT')}
      </a>
      <a
        className={`${baseClass}-link`}
        href={i18n.t('ASIDE.LINK.HONDA.URL')}
        target="_blank"
        rel="noreferrer"
      >
        {i18n.t('ASIDE.LINK.HONDA.TEXT')}
      </a>
      <a
        className={`${baseClass}-link`}
        href={i18n.t('ASIDE.LINK.DUCATI.URL')}
        target="_blank"
        rel="noreferrer"
      >
        {i18n.t('ASIDE.LINK.DUCATI.TEXT')}
      </a>
      <a
        className={`${baseClass}-link`}
        href={i18n.t('ASIDE.LINK.HIMALAYAN.URL')}
        target="_blank"
        rel="noreferrer"
      >
        {i18n.t('ASIDE.LINK.HIMALAYAN.TEXT')}
      </a>
    </aside>
  )
}
