import {useContext} from 'react'
import {Context} from '../../context'

const baseClass = 'wb-Footer'

export function Footer() {
  const {i18n} = useContext(Context)

  return (
    <footer className={baseClass}>
      <div className={`${baseClass}-container`}>
        <a
          href={i18n.t('FOOTER.SOCIAL_LINK.FACEBOOK')}
          target="_blank"
          rel="noreferrer"
        >
          <img src={`${process.env.CDN}/facebook-icon.svg`} alt="Facebook" />
        </a>
        <a href={i18n.t('FOOTER.SOCIAL_LINK.GOOGLE_PLAY')}>
          <img
            src={`${process.env.CDN}/google-play-icon.svg`}
            alt="Google Play"
          />
        </a>
        <a
          href={i18n.t('FOOTER.SOCIAL_LINK.INSTRAGRAM')}
          target="_blank"
          rel="noreferrer"
        >
          <img src={`${process.env.CDN}/instagram-icon.svg`} alt="Instagram" />
        </a>
        <a href={i18n.t('FOOTER.SOCIAL_LINK.APP_STORE')}>
          <img src={`${process.env.CDN}/app-store-icon.svg`} alt="App Store" />
        </a>
      </div>
    </footer>
  )
}
