import React from 'react'
import PropTypes from 'prop-types'
import { BackHandler, Platform } from 'react-native'
import AppNavigation from './AppNavigation'


export default class ReduxNavigation extends React.Component {
  static propTypes = {
    nav: PropTypes.object,
  }

  UNSAFE_componentWillMount() {
    if (Platform.OS === 'ios') return
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props
      // change to whatever is your first screen, otherwise unpredictable results may occur
      if (nav.routes.length === 1 && nav.routes[0].index === 0 &&
        nav.routes[0].routes[0].routes.length === 1 && nav.routes[0].routes[0].index === 0) {
        return false
      }
      // if (shouldCloseApp(nav)) return false
      dispatch({ type: 'Navigation/BACK' })
      return true
    })
  }

  componentWillUnmount() {
    if (Platform.OS === 'ios') return
    BackHandler.removeEventListener('hardwareBackPress')
  }

  render() {
    return <AppNavigation />
     
 
  }
}



