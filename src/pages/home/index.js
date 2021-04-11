import {useContext} from 'react'
import Carrusel from 'carrusel-package'
import {Context} from '../../context'

import {Aside} from '../../components/aside/index'

const baseClass = 'wb-Home'

export function Home() {
  const {i18n} = useContext(Context)

  return (
    <div className={baseClass}>
      <div>
        <div className={`${baseClass}-banner`}>
          <img
            className={`${baseClass}-bannerImage`}
            src="https://moto.suzuki.es/assets/images/listado_motos/2021/DL650XAM1_YU1_Right.jpg"
            alt="v-strom"
          />
        </div>
        <h1 className={`${baseClass}-title`}>{i18n.t('PAGE.HOME.TITLE')}</h1>
        <p>{i18n.t('PAGE.HOME.FIRST_POST_TEXT')}</p>
        <div className={`${baseClass}-carrusel`}>
          <Carrusel />
        </div>
        <p>{i18n.t('PAGE.HOME.SECOND_POST_TEXT')}</p>
        <p>{i18n.t('PAGE.HOME.SECOND_POST_TEXT')}</p>
      </div>
      <Aside />
    </div>
  )
}
