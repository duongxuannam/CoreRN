import React, { PureComponent } from 'react'
import {
  View, Text,
} from 'react-native'
import Header from '../Header'
import List from './List'
import styles from './styles'
import { normalizeHeight, normalize } from '../../Theme/Metrics'

export default class MyBooking extends PureComponent {

  render() {
    return (
      <View style={styles.container}>
        <Header label='MY BOOKING' />
        <View style={{
          flexDirection: 'row',
          marginTop: normalizeHeight(10),
          marginHorizontal: normalize(20),
        }}>
          <Text style={styles.textFilter}>
            Lastest booking
          </Text>
          <Text>
            v
          </Text>
        </View>

        <List />
      </View >
    )
  }
}