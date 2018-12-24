import React, { PureComponent } from 'react'
import {
  StatusBar,
  ScrollView,
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import HeaderImage from './HeaderImage'
import Location from './Location'
import HotDeal from './HotDeal'
import Recommend from './Recommend'
import Plus from './Plus'

export default class App extends PureComponent {
  static propTypes = {
    test: PropTypes.func,
  }

  render() {
    return (

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <StatusBar hidden={true} />
        <HeaderImage />
        <Location />
        <HotDeal />
        <Recommend />
        <Plus />
      </ScrollView >
    )
  }
}

