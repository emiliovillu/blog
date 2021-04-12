import RetrievePhotoListUseCase from '../RetrievePhotoList'
import {httpsPhotoRepository} from '../../repositories/factory'

export default () =>
  new RetrievePhotoListUseCase({
    photoRepository: httpsPhotoRepository()
  })
