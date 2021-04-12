import {HttpMocker} from '@s-ui/mockmock'

function createMocker() {
  const mocker = new HttpMocker()
  mocker.create()
  return mocker
}

export {createMocker}
