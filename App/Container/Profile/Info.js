import React, { PureComponent } from 'react'
import {
  View, Image, Text,
} from 'react-native'
import { Avatar } from '../../Component'
import { normalizeHeight } from '../../Theme/Metrics'
import { Images } from '../../Theme'
import styles from './styles'

export default class Info extends PureComponent {



  render() {
    return (
      <View style={styles.wrapInfo}>
        <View style={styles.wrapInfo2}>
          <Avatar size={normalizeHeight(60)} />
          <View style={styles.wrapText}>
            <Text style={styles.name}>Nguyen Quynh Anh</Text>
            <View style={styles.wrapTextInfo}>
              <Image source={Images.coins} style={styles.coins} />
              <Text style={styles.member}>Silver Membership</Text>
            </View>
          </View>
        </View>
        <View style={styles.sectionLabel}>

          <View style={styles.wrapIconLabel}>
            <Image
              source={Images.scan}
              style={styles.iconLabel} />
            <Text style={styles.textIconLabel}>Scan</Text>
          </View>
          <View style={styles.wrapIconLabel}>
            <Image
              source={Images.point}
              style={styles.iconLabel} />

            <Text style={styles.textIconLabel}>My Points</Text>
          </View>

          <View style={styles.wrapIconLabel}>
            <Image
              source={Images.reward}
              style={styles.iconLabel} />

            <Text style={styles.textIconLabel}>Rewards</Text>
          </View>


        </View>

      </View>



    )
  }
}