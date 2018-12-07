import { createStackNavigator,createAppContainer } from 'react-navigation'
import TabNavigation from './TabNavigation'


const PrimaryNav = createStackNavigator({
  TabNavigation: { screen: TabNavigation },
  
}, {
  initialRouteName: 'TabNavigation',
  headerMode: 'none',
})

export default createAppContainer(PrimaryNav)
