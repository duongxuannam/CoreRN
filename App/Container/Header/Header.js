import React, { PureComponent } from 'react'
import { Text, View } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

export default class Header extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
  }
  static defaultProps = {
    label: 'Header',
  }
  render() {
    const { label } = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          {label.toUpperCase()}
        </Text>
      </View>
    )
  }
}

