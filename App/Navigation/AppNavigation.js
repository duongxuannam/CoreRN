import { createStackNavigator, createAppContainer } from 'react-navigation'
import TabNavigation from './TabNavigation'
import SearchNavigation from '../Container/Search'
import {
  reduxifyNavigator, createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'

const PrimaryNav = createStackNavigator({
  TabNavigation: { screen: TabNavigation },
  SearchNavigation: { screen: SearchNavigation },
}, {
  initialRouteName: 'TabNavigation',
  headerMode: 'none',
})




// Create middleware and connect
export const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
)



export const AppNavigation = createAppContainer(PrimaryNav)
export default reduxifyNavigator(AppNavigation, 'root')
