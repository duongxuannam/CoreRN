import React, { PureComponent } from 'react'
import {
  Text,
  View,
  FlatList, Image,
} from 'react-native'
import styles from './styles'

const mang = [{ id: 1, name: 'Nearby' }, { id: 2, name: 'Ha Noi' }, { id: 3, name: 'Ho Chi Minh' }, { id: 4, name: 'Hoi An' }, { id: 5, name: 'Da Nang' }, { id: 6, name: 'Nha Trang' }]
export default class List extends PureComponent {

  _keyExtractor = (item, ) => item.id.toString()
  _renderItemTrending = () => {
    return (
      <View style={styles.viewWraper}>
        <View style={styles.viewImage}>
          <View style={styles.wrapImage}>
            <Image style={styles.image}
              source={{ uri: 'https://i.pinimg.com/originals/f2/1b/5b/f21b5ba9a9ae0301629051771005397e.jpg' }}
            />
          </View>
        </View>
        <View style={styles.viewText}>
          <View style={styles.info} >
            <View style={styles.info2}>
              <View style={{ flex: 1 }}>
                <Text style={styles.name} numberOfLines={2} >
                  VILLA FOR RENT IN THAO DIEN
                </Text>
              </View>
              <View style={styles.icon}>
                <Text>
                  Tim
                </Text>
              </View>
            </View>
            <View style={styles.dashed} />
          </View >
          <View style={styles.viewCheckIn}>
            <Text style={styles.checkin} numberOfLines={1}>
              134 Duong D5, Phuong Thao Dien, Quan 2, Tp.HCM
            </Text>
            <Text style={styles.checkout} numberOfLines={1}>
              134 Duong D5, Phuong Thao Dien, Quan 2, Tp.HCM
            </Text>
          </View>
        </View >
      </View>
    )
  }
  render() {
    return (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={mang}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItemTrending}
      />
    )
  }
}