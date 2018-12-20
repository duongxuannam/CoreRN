import { all, takeLatest } from 'redux-saga/effects'
import  { AppTypes } from '../Redux/AppRedux'

function* appRootSagas() {
  yield all([
    yield takeLatest(AppTypes.STARTUP, startup),
    yield takeLatest(AppTypes.TEST, test),

  ])
}


function* startup(action) { // eslint-disable-line
  try {
    console.log('start up') // eslint-disable-line
    // show error
  } catch (error) {
    // show error
    console.log('start up error', error) // eslint-disable-line
  }
}

function* test(action) { // eslint-disable-line
  try {
    console.log('action ',action) // eslint-disable-line

    // show error
  } catch (error) {
    // show error
    console.log('start up error', error) // eslint-disable-line

  }
}

export default appRootSagas
