import PhotoEntity from './photo'

export const photoEntity = ({id, image}) => {
  return new PhotoEntity({
    id,
    image
  })
}
