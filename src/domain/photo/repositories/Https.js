import PhotoRepositoryInterface from './Interface.js'

export default class HttpPhotoRepository extends PhotoRepositoryInterface {
  constructor({photoListResponseToPhotoListValueObjectMapper, fetcher}) {
    super()
    this._photoListResponseToPhotoListValueObjectMapper = photoListResponseToPhotoListValueObjectMapper
    this._fetcher = fetcher
  }

  async list({page}) {
    try {
      const url = `https://picsum.photos/v2/list?page=${page}&limit=10`

      const response = await this._fetcher.get(url)
      const photoList = response.data || []

      const photoListValueObject = this._photoListResponseToPhotoListValueObjectMapper.map(
        photoList
      )

      return photoListValueObject
    } catch (error) {
      throw console.error(error)
    }
  }
}
