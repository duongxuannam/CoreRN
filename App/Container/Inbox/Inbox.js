import React, { PureComponent } from 'react'
import {
  View,
} from 'react-native'
import { ScrollableTabbar } from '../../Component'
import Header from '../Header'
import Notification from './Notification'
import Message from './Message'
import styles from './styles'

export default class MyBooking extends PureComponent {

  render() {
    return (
      <View style={styles.container}>
        <Header label='MY INBOX' />
        <ScrollableTabbar>
          <Notification tabLabel="Notification" />
          <Message tabLabel="Message" />
        </ScrollableTabbar>

      </View >
    )
  }
}