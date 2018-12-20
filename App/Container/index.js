import React, { PureComponent } from 'react'
import { Provider } from 'react-redux'
import createStore from '../Redux'
import RootContainer from './RootContainer'
// import { store } from '../Navigation/ReduxNavigation'
const store = createStore()

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}
