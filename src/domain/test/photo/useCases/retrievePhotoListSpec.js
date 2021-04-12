import {expect} from 'chai'
import {HttpMocker} from '@s-ui/mockmock'
import domain from '../../../index'

const mocker = new HttpMocker()

describe('retrievePhotoListUseCaseSpec', () => {
  beforeEach(() => {
    mocker.create()
  })

  afterEach(() => {
    mocker.restore()
  })

  it('should return an photo list', async () => {
    const params = {
      page: '2'
    }

    const photoListFakeApiResponse = [
      {
        id: '0',
        author: 'Alejandro Escamilla',
        width: 5616,
        height: 3744,
        url: 'https://unsplash.com/photos/yC-Yzbqy7PY',
        download_url: 'https://picsum.photos/id/0/5616/3744'
      },
      {
        id: '1',
        author: 'Alejandro Escamilla',
        width: 5616,
        height: 3744,
        url: 'https://unsplash.com/photos/LNRyGwIJr5c',
        download_url: 'https://picsum.photos/id/1/5616/3744'
      }
    ]

    mocker
      .httpMock('https://picsum.photos')
      .get('/v2/list?page=2&limit=10')
      .reply(photoListFakeApiResponse, 200)

    const photoList = await domain
      .get('retrieve_photo_list_use_case')
      .execute(params)

    expect(photoList).to.exist
    expect(photoList.photos).to.be.an('array')
    expect(photoList.photos[0]).to.have.property('id')
    expect(photoList.photos[0]).to.have.property('image')
  })
})
