import {useContext} from 'react'
import Carrusel from 'carrusel-package'
import {Context} from '../../context'

const baseClass = 'wb-Home'

export function Home() {
  const {i18n} = useContext(Context)

  return (
    <div className={baseClass}>
      <div className={`${baseClass}-banner`}>
        <img
          className={`${baseClass}-bannerImage`}
          src="https://moto.suzuki.es/assets/images/listado_motos/2021/DL650XAM1_YU1_Right.jpg"
          alt="v-strom"
        />
      </div>

      <div className={`${baseClass}-carrusel`}>
        <Carrusel />
      </div>
      <h1>{i18n.t('PAGE.HOME.TITLE')}</h1>
    </div>
  )
}
