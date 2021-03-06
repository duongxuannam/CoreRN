import React, { PureComponent } from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { showMessage } from 'react-native-flash-message'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

export default class Search extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => showMessage({
          message: 'Simple message',
          type: 'info',
        })} >
          <Text style={styles.welcome}>Welcome HOme!</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
