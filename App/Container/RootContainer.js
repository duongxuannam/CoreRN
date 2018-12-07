import React, { PureComponent } from 'react'
import { View } from 'react-native'
import ReduxNavigation from '../Navigation/ReduxNavigation'

export default class RootContainer extends PureComponent {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ReduxNavigation />
      </View>
    )
  }
}


