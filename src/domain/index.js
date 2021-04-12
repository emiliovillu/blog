import {EntryPointFactory} from '@s-ui/domain'
import ConfigFactory from './config/factory'

// prettier-ignore
const useCases = {
  retrieve_photo_list_use_case: () => import('./photo/useCases/factories/RetrievePhotoList')
}

const config = ConfigFactory.config()

const EntryPoint = EntryPointFactory({useCases, config})
const domain = new EntryPoint()

export default domain
