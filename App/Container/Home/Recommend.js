import React, { PureComponent } from 'react'
import {
  View,
  Image, Text, FlatList,
} from 'react-native'
import styles from './styles'
const mang = [{ id: 1, name: 'Nearby' }, { id: 2, name: 'Ha Noi' }, { id: 3, name: 'Ho Chi Minh' }, { id: 4, name: 'Hoi An' }, { id: 5, name: 'Da Nang' }, { id: 6, name: 'Nha Trang' }]
export default class App extends PureComponent {
  _keyExtractor = (item, ) => item.id.toString()
  _renderItemTrending = () => {
    return (
      <View >
        <View style={styles.recommend.viewItemWrap}>
          <Image style={styles.sectionHotDeal.image}
            source={{ uri: 'https://i.pinimg.com/originals/f2/1b/5b/f21b5ba9a9ae0301629051771005397e.jpg' }}
          />
        </View>
        <Text style={styles.recommend.name}>
          Center Nest Center Park
        </Text>
        <Text style={styles.recommend.location}>
          Citi central, Ho Chi Minh
        </Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.recommend.viewWrap}>
        <Text style={styles.title}>
          Recommend for you
        </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={mang}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItemTrending}
          horizontal
        />
      </View>



    )
  }
}

