import {FetcherFactory as SUIFetcherFactory} from '@s-ui/domain'

import HttpsPhotoRepository from './Https'
import {photoListResponseToPhotoListValueObjectMapper} from '../mappers/factory'

export const httpsPhotoRepository = () =>
  new HttpsPhotoRepository({
    photoListResponseToPhotoListValueObjectMapper: photoListResponseToPhotoListValueObjectMapper(),
    fetcher: SUIFetcherFactory.httpFetcher({})
  })
