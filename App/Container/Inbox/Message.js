import React, { PureComponent } from 'react'
import {
  View, Text, FlatList,
} from 'react-native'
import { Avatar } from '../../Component'
import styles from './styles'
import { normalizeHeight } from '../../Theme/Metrics'

const mang = [{ id: 1, img: '', label: '20' }, { id: 2, img: '', label: '20' }, { id: 3, img: '', label: '20' }]

export default class Message extends PureComponent {
  _keyExtractor = (item, ) => item.id.toString()
  _renderItemTrending = () => {
    return (
      <View style={styles.message.wrap}>
        <View style={styles.message.wrapImage}>
          <Avatar size={normalizeHeight(48)}
            uri={{ uri: 'http://problogger.com/wp-content/uploads/2015/07/update-banner.png' }} />
        </View>
        <View flex={1} style={{ flexDirection: 'row' }}>
          <View style={styles.message.wrapInfo}>
            <View>
              <Text style={styles.message.fontName}>
                Vinhome Group
              </Text>
              <Text style={styles.message.fontText} numberOfLines={1}>
                Hi Nhu, your bookings is now being cai j dsk dks
              </Text>
            </View>
          </View>
          <View style={styles.message.viewIcon}>
            <Text style={styles.message.fontText}>
              4:35 PM
            </Text>
          </View>
        </View>



      </View >
    )
  }
  render() {
    return (
      <View style={styles.message.wrapList}>
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