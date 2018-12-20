import { AppNavigation } from '../Navigation/AppNavigation'
import {
  createNavigationReducer,
} from 'react-navigation-redux-helpers'
// export const reducer = (state, action) => {
//   const newState = AppNavigation.router.getStateForAction(action, state)
//   return newState || state
// }
export const reducer = createNavigationReducer(AppNavigation)
