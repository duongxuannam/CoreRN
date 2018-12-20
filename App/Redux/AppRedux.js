import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null,
  startupSuccess: null,
  test: ['boolean'],
})

export const AppTypes = Types
export default Creators


export const INITIAL_STATE = Immutable({
  isReady: false,
})

const startup = (state) => {
  return state.merge({ isReady: false })
}
const startupSuccess = (state) => {
  return state.merge({ isReady: true })
}
const test = (state,{boolean}) => {
  return state.merge({ name: boolean })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.STARTUP]: startup,
  [Types.STARTUP_SUCCESS]: startupSuccess,
  [Types.TEST]: test,
})
