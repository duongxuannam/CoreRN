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
            <View style={{ flex: 1 }}>
              <Text style={styles.name} numberOfLines={2} >
                VILLA FOR RENT IN THAO DIEN
              </Text>
              <Text style={styles.location} numberOfLines={2}>
                134 Duong D5, Phuong Thao Dien, Quan 2, Tp.HCM
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.colorPrimary}>sao</Text>
              <Text style={styles.mgLef}>4.5 very good</Text>
              <Text style={styles.mgHoz}>|
              </Text>
              <Text style={styles.colorPrimary}>47 Rating {'>'}</Text>
            </View>
          </View>
          <View style={styles.iconHeart}>
            <Text>
              Tim
            </Text>
          </View>

        </View >


      </View >


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