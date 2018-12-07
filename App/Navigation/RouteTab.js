import React from 'react' // eslint-disable-line
import { createStackNavigator } from 'react-navigation'
import Home from '../Container/Home'
import Profile from '../Container/Profile'



export const HomeNavigation = createStackNavigator({
  Home: { screen: Home },
})

export const ProfileNavigation = createStackNavigator({
  Profile: { screen: Profile },

})
 




