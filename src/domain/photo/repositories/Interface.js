import {Repository} from '@s-ui/domain'

export default class PhotoRepositoryInterface extends Repository {
  list() {
    throw new Error(
      'list method should be implemented in PhotoRepository interface'
    )
  }
}
