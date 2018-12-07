import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { HomeNavigation, ProfileNavigation } from './RouteTab'
import { Images,Metrics } from '../Theme'

const TabBarNavigation = createBottomTabNavigator({
  HomeNavigation: {
    screen: HomeNavigation,
    navigationOptions: () => ({
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => {
        return (<Image
          resizeMode='contain'
          source={Images.home}
          style={{ height: Metrics.normalize(20), width: Metrics.normalize(20), tintColor }}
        />)
      },
    }),
  },
  ProfileNavigation: {
    screen: ProfileNavigation,
    navigationOptions: () => ({
      tabBarLabel: 'Profile',

      tabBarIcon: ({ tintColor }) => {
        return (<Image
          resizeMode='contain'
          source={Images.profile}
          style={{ height: Metrics.normalize(20), width: Metrics.normalize(20), tintColor }}
        />)
      },
    }),
  },
}, {
  initialRouteName: 'HomeNavigation',
  lazy: false,
  tabBarPosition: 'bottom',
  headerMode: 'none',
  // animationEnabled: true,
  animationEnabled: false,
  tabBarOptions: {
    showLabel: true,
    showIcon: true,
    inactiveTintColor: '#7B7B7B',
    style: {
      backgroundColor: '#fff',
    },
  },


})

export default TabBarNavigation