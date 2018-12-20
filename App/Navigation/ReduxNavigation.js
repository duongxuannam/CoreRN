import React from 'react'
import PropTypes from 'prop-types'
import { BackHandler, Platform } from 'react-native'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

class ReduxNavigation extends React.Component {
  static propTypes = {
    nav: PropTypes.object,
  }

  UNSAFE_componentWillMount() {
    if (Platform.OS === 'ios') return
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = this.props
      console
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
    const { nav, dispatch } = this.props
    return <React.Fragment>
      <AppNavigation
        state={nav}
        dispatch={dispatch}
      />
    </React.Fragment >
  }
}

// const App = reduxifyNavigator(ReduxNavigation, 'root')

// const mapStateToProps = (state) => ({
//   state: state.nav,
// })
// export default connect(mapStateToProps)(App)
const mapStateToProps = state => ({
  nav: state.nav,
  // other optional props
})

export default connect(mapStateToProps)(ReduxNavigation)


