import React, { Component } from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'
import { Images } from '../../Theme'

export default class Avatar extends Component {

  static propTypes = {
    size: PropTypes.number,
    uri: PropTypes.any,
  }
  static defaultProps = {
    uri: Images.updating,
  }
  render() {
    const { size, uri } = this.props
    return (
      <Image
        style={{ height: size, width: size, borderRadius: (size / 2), resizeMode: 'stretch' }}
        source={uri}
      />
    )
  }
}