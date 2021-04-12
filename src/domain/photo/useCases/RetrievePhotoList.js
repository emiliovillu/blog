import {UseCase} from '@s-ui/domain'

export default class RetrievePhotoListUseCase extends UseCase {
  constructor({photoRepository}) {
    super()
    this._photoRepository = photoRepository
  }

  async execute({page = '1'}) {
    const photoListValueObject = await this._photoRepository.list({page})

    return photoListValueObject.toJSON()
  }
}
