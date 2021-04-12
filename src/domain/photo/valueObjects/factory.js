import PhotoListValueObject from './PhotoList'
import {photoResponseToPhotoEntityMapper} from '../mappers/factory'

export const photoListValueObject = photos => {
  return new PhotoListValueObject({
    photos: photos.map(photoResponse =>
      photoResponseToPhotoEntityMapper().map(photoResponse)
    )
  })
}
