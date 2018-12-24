import React, { PureComponent } from 'react'
import {
  View, Text, FlatList, Image,
} from 'react-native'
import styles from './styles'

const mang = [{ id: 1, img: '', label: '20' }, { id: 2, img: '', label: '20' }, { id: 3, img: '', label: '20' }]

export default class Notification extends PureComponent {
  _keyExtractor = (item, ) => item.id.toString()
  _renderItemTrending = () => {
    return (
      <View style={styles.notification.wrap}>
        <View style={styles.notification.wrapImage}>
          <Image style={styles.notification.image}
            source={{ uri: 'https://i.pinimg.com/originals/f2/1b/5b/f21b5ba9a9ae0301629051771005397e.jpg' }}
          />
        </View>

        <View style={styles.notification.wrapInfo}>
          <Text style={styles.notification.fontText}>
            Ban nhan duoc 50 diem sau khi dat phong tai Central Garden
          </Text>
          <View style={styles.notification.viewIcon}>
            <Text >
              sai
            </Text>
          </View>

        </View>

      </View>
    )
  }
  render() {
    return (
      <View style={styles.notification.wrapList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={mang}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItemTrending}
        />
      </View >
    )
  }
}