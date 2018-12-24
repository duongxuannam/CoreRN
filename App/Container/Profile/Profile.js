import React, { PureComponent } from 'react'
import {
  View, ScrollView,
} from 'react-native'
import Header from '../Header'
import Info from './Info'
import Edit from './Edit'
import styles from './styles'

export default class MyBooking extends PureComponent {



  render() {
    return (
      <View style={styles.container}>
        <Header label='MY ACCOUNT' />
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <Info />
          <Edit />
        </ScrollView>

      </View >
    )
  }
}