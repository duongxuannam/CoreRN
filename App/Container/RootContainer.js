import React, { PureComponent } from 'react'
import { View } from 'react-native'
import FlashMessage from 'react-native-flash-message'
import ReduxNavigation from '../Navigation/ReduxNavigation'

export default class RootContainer extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ReduxNavigation />
        <FlashMessage position="top" />
      </View>
    )
  }
}


