import { createStore, applyMiddleware, compose } from 'redux'
import Rehydration from '../Service/Rehydration'
import ReduxPersist from '../Config/ReduxPersist'
import createSagaMiddleware from 'redux-saga'
import { navigationMiddleware } from '../Navigation/AppNavigation'
import { composeWithDevTools } from 'redux-devtools-extension'

// creates the store
export default (rootReducer, rootSaga) => {

  const middleware = []
  const enhancers = []

  /* ------------- Navigation Middleware ------------ */

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
  // const store = createAppropriateStore(rootReducer, compose(...enhancers))
  const store = createAppropriateStore(rootReducer, composeWithDevTools(...enhancers))

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
