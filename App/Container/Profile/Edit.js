import React, { PureComponent } from 'react'
import {
  View, Image, Text,
} from 'react-native'
import EditItem from './EditItem'
import { Images } from '../../Theme'
import styles from './styles'

export default class MyBooking extends PureComponent {


  render() {
    return (
      <View style={styles.wrapSectionEdit}>
        <View style={{ flex: 1 }}>
          <EditItem
            icon={Images.profile}
            label='Edit profile' description='Edit your profile name and other informations' border />
          <EditItem
            icon={Images.fillRefund}
            label='My Refund' description='Manage your refund in one place' border />
          <EditItem
            icon={Images.help}
            label='Help center' description='Find the best answer to your questtion' border />
          <EditItem
            icon={Images.password}
            label='Password & security' description='Enhance your account security' border />
          <EditItem
            icon={Images.banhrang}
            label='Setting' description='View and set your account preferences' />

        </View>
        <View style={styles.sectionLogout}>
          <Image
            source={Images.logOut}
            style={styles.logoLogout} />
          <Text style={styles.textLogout} >Log out</Text>
        </View>
      </View>
    )
  }
}