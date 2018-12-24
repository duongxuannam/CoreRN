import React, { PureComponent } from 'react'
import {
  View,
  Image, Text,
} from 'react-native'
import styles from './styles'
export default class App extends PureComponent {
  render() {
    return (
      <View style={styles.plus.viewWrap}>
        <Text style={styles.title}>
          Central Nest Plus
        </Text>
        <View style={styles.plus.viewItemWrap}>
          <Image style={styles.sectionHotDeal.image}
            source={{ uri: 'https://i.pinimg.com/originals/f2/1b/5b/f21b5ba9a9ae0301629051771005397e.jpg' }}
          />
        </View>
      </View>



    )
  }
}

