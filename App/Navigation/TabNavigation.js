import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import { HomeNavigation, ProfileNavigation, SaveNavigation, MyBookingNavigation, InboxNavigation } from './RouteTab'
import { Images, Metrics } from '../Theme'

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
  SaveNavigation: {
    screen: SaveNavigation,
    navigationOptions: () => ({
      tabBarLabel: 'Saved',
      tabBarIcon: ({ tintColor }) => {
        return (<Image
          resizeMode='contain'
          source={Images.shape}
          style={{ height: Metrics.normalize(20), width: Metrics.normalize(20), tintColor }}
        />)
      },
    }),
  },
  MyBookingNavigation: {
    screen: MyBookingNavigation,
    navigationOptions: () => ({
      tabBarLabel: 'My Booking',
      tabBarIcon: ({ tintColor }) => {
        return (<Image
          resizeMode='contain'
          source={Images.inbox}
          style={{ height: Metrics.normalize(20), width: Metrics.normalize(20), tintColor }}
        />)
      },
    }),
  },
  InboxNavigation: {
    screen: InboxNavigation,
    navigationOptions: () => ({
      tabBarLabel: 'Inbox',
      tabBarIcon: ({ tintColor }) => {
        return (<Image
          resizeMode='contain'
          source={Images.inbox}
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
  initialRouteName: 'ProfileNavigation',
  lazy: false,
  tabBarPosition: 'bottom',
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