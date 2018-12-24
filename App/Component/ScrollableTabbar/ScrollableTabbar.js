import React, { Component } from 'react'
import { View, Platform } from 'react-native'
import PropTypes from 'prop-types'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { Colors, Metrics } from '../../Theme'
import { normalize, normalizeHeight } from '../../Theme/Metrics'

export default class Scrollable extends Component {

    static propTypes = {
      children: PropTypes.array,
    }

    constructor(props) {
      super(props)

      this.state = {
        page: 0,
      }

    }

    onChangedTab = ({ i }) => {
      this.setState({ page: i }, () => {
      })
    }

    render() {
      return (
        <View flex={1}>
          <ScrollableTabView
            initialPage={0}
            page={this.state.page}
            locked={Platform.OS === 'ios' ? true : false}
            tabBarBackgroundColor={Colors.white}
            tabBarActiveTextColor={Colors.primary}
            tabBarInactiveTextColor='#9C9C9C'
            tabBarTextStyle={{ fontSize: normalize(14), fontWeight: '700' }}
            tabBarUnderlineStyle={{ backgroundColor: Colors.primary, height: 2.5 }}
            renderTabBar={() => <ScrollableTabBar style={{
              height: normalizeHeight(40), width: Metrics.screenWidth, borderBottomWidth: 1, borderBottomColor: '#DBDBDB'
              , marginBottom: 5,
            }} tabStyle={{ height: normalizeHeight(39) }} />}
            onChangeTab={this.onChangedTab}
          >
            {this.props.children}
          </ScrollableTabView>

        </View>
      )
    }
}