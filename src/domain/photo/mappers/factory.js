import PhotoListResponseToPhotoListValueObjectMapper from './PhotoListResponseToPhotoListValueObjectMapper'
import PhotoResponseToPhotoResponseEntityMapper from './PhotoResponseToPhotoEntityMapper'
import {photoListValueObject} from '../valueObjects/factory'
import {photoEntity} from '../entities/factory'

export const photoListResponseToPhotoListValueObjectMapper = () =>
  new PhotoListResponseToPhotoListValueObjectMapper({
    photoListValueObjectFactory: photoListValueObject
  })

export const photoResponseToPhotoEntityMapper = () =>
  new PhotoResponseToPhotoResponseEntityMapper({
    photoEntityFactory: photoEntity
  })
