import {useContext, useState} from 'react'
import Carrusel from 'carrusel-package'
import {Context} from '../../context'

import {Aside} from '../../components/aside/index'
import SliderData from '../../utils/SliderData'

const baseClass = 'wb-Home'

export function Home() {
  const {i18n, domain} = useContext(Context)
  const [slides, setSlides] = useState(SliderData)
  const [uploadedImages, setUploadedImages] = useState([])

  const handleCurrentChange = current => {
    if (uploadedImages.find(image => image === current)) return

    setUploadedImages(preState => [...preState, current])

    const isRequieredRequest =
      current !== 0 && current % 3 === 0 && current < 10

    if (isRequieredRequest)
      domain
        .get('retrieve_photo_list_use_case')
        .execute({page: current})
        .then(response => {
          const {photos} = response
          setSlides(preState => [...preState, ...photos])
        })
  }

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
          <Carrusel onCurrentChange={handleCurrentChange} slides={slides} />
        </div>
        <p>{i18n.t('PAGE.HOME.SECOND_POST_TEXT')}</p>
        <p>{i18n.t('PAGE.HOME.SECOND_POST_TEXT')}</p>
      </div>
      <Aside />
    </div>
  )
}
