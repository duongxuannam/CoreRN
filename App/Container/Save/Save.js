import React, { PureComponent } from 'react'
import {
  View,
} from 'react-native'
import Header from '../Header'
import List from './List'
import styles from './styles'

export default class Save extends PureComponent {

  render() {
    return (
      <View style={styles.container}>
        <Header label='Saved' />
        <List />
      </View >
    )
  }
}