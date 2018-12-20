import React from 'react' // eslint-disable-line
import { createStackNavigator } from 'react-navigation'
import Home from '../Container/Home'
import Profile from '../Container/Profile'
import Save from '../Container/Save'
import MyBooking from '../Container/MyBooking'
import Inbox from '../Container/Inbox'



export const HomeNavigation = createStackNavigator({
  Home: { screen: Home },
}, {
  headerMode: 'none',
})

export const ProfileNavigation = createStackNavigator({
  Profile: { screen: Profile },
},
{
  headerMode: 'none',
})
export const SaveNavigation = createStackNavigator({
  Save: { screen: Save },
})

export const MyBookingNavigation = createStackNavigator({
  MyBooking: { screen: MyBooking },

})

export const InboxNavigation = createStackNavigator({
  Inbox: { screen: Inbox },

})


