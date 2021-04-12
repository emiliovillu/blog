export default class PhotoListResponseToPhotoListValueObjectMapper {
  constructor({photoListValueObjectFactory}) {
    this._photoListValueObjectFactory = photoListValueObjectFactory
  }

  map = photoListResponse => {
    const photoListValueObject = this._photoListValueObjectFactory(
      photoListResponse
    )

    return photoListValueObject
  }
}
