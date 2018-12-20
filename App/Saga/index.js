import { all } from 'redux-saga/effects'
import appRootSagas from './AppSagas'


export default function * root () {
  yield all([
    appRootSagas(),
  ])
}
