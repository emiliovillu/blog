import {useContext} from 'react'
import {Context} from '../../context'

const baseClass = 'wb-Header'

export function Header() {
  const {i18n} = useContext(Context)

  return (
    <header className={baseClass} aria-label="main navigation">
      <span className={`${baseClass}-title`}>{i18n.t('HEADER.TITLE')}</span>
    </header>
  )
}
