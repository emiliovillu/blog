/* eslint-disable camelcase */
export default class PhotoResponseToAdEntityMapper {
  constructor({photoEntityFactory}) {
    this._photoEntityFactory = photoEntityFactory
  }

  map = photoResponse => {
    const {download_url, url} = photoResponse

    const photoEntity = this._photoEntityFactory({
      id: url,
      image: download_url
    })

    return photoEntity
  }
}
