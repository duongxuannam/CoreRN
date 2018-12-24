import React, { PureComponent } from 'react'
import {
  View,
  Image, Text,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

export default class ListEdit extends PureComponent {

  static propTypes = {
    icon: PropTypes.any,
    label: PropTypes.string,
    description: PropTypes.string,
    border: PropTypes.bool,
  }

  render() {
    const { icon, label, description, border } = this.props

    return (
      <View style={[styles.wrapViewItemEdit, border ? { borderBottomWidth: 1, borderBottomColor: '#CACACA' } : {}]}>
        <View style={styles.wrapIconEdit}>
          <Image
            style={styles.iconEdit}
            source={icon}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.labelIconEdit}>
            {label}
          </Text>
          <Text style={styles.descriptionEdit}>
            {description}
          </Text>
        </View>
        <View style={styles.iconArrow} >
          <Text>Icon</Text>
        </View>
      </View>



    )
  }
}

