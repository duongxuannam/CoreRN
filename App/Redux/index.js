import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import { reducer as nav } from './NavigationRedux'
import { reducer as app } from './AppRedux'
import rootSaga from '../Saga'
import ReduxPersist from '../Config/ReduxPersist'
import { createStore, applyMiddleware, compose } from 'redux'
import Rehydration from '../Service/Rehydration'
import createSagaMiddleware from 'redux-saga'
// import ScreenTracking from './ScreenTrackingMiddleware'
import { navigationMiddleware } from '../Navigation/AppNavigation'
// import configureStore from './CreateStore'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav,
  app,
})


const configureStore = (rootReducer, rootSaga) => {

  const middleware = []
  const enhancers = []

  /* ------------- Navigation Middleware ------------ */

  // const navigationMiddleware = createReactNavigationReduxMiddleware(
  //   'root',
  //   state => state.nav
  // )
  middleware.push(navigationMiddleware)

  /* ------------- Analytics Middleware ------------- */
  // middleware.push(ScreenTracking)

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = null // eslint-disable-line
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = createStore // eslint-disable-line
  const store = createAppropriateStore(rootReducer, compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    Rehydration.updateReducers(store)
  }

  // kick off root saga
  let sagasManager = sagaMiddleware.run(rootSaga)

  return {
    store,
    sagasManager,
    sagaMiddleware,
  }
}


export default () => {
  let finalReducers = reducers
  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)

  if (module.hot) { // eslint-disable-line
    module.hot.accept(() => { // eslint-disable-line
      const nextRootReducer = require('./').reducers  // eslint-disable-line
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('../Saga').default // eslint-disable-line
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware.run(newYieldedSagas)
      })
    })
  }

  return store
}