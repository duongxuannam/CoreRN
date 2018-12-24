import React, { PureComponent } from 'react'
import {
  View,
  ImageBackground, Text,
} from 'react-native'
import styles from './styles'

export default class App extends PureComponent {


  render() {
    return (
      <View style={styles.sectionImage}>
        <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/f2/1b/5b/f21b5ba9a9ae0301629051771005397e.jpg' }}
          style={styles.imageBackground}>
          <View style={styles.sectionImage.firstView}>
            <View style={styles.sectionImage.viewWrapImage}>
              <Text>
                                cai hinh
              </Text>
            </View>

            <View style={styles.sectionImage.viewRight}>
              <Text style={styles.sectionImage.firstTextViewRight}>
                                Nguyen Ngoc Phuong Thao
              </Text>
              <View style={styles.sectionImage.viewMember}>
                <Text>
                                    hinh
                </Text>
                <Text style={styles.sectionImage.textViewMember}>
                                    Silver Membership
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.sectionImage.secondView}>
            <Text style={styles.sectionImage.textHello}>
                            Goodmorning, Kevin</Text>
            <View style={styles.sectionImage.viewSearch}>
              <Text style={{ flex: 1 }}>
                                Select location
              </Text>
              <Text>
                                cai hinh
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>



    )
  }
}

