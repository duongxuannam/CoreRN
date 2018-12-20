import React, { PureComponent } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AppActions from '../../Redux/AppRedux'
import { NavigationActions } from 'react-navigation'

class App extends PureComponent {
  static propTypes = {
    test: PropTypes.func,
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.test(true)} >
          <Text style={styles.welcome}>Welcome HOme!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.test(false)} >
          <Text style={styles.welcome}>Welcome false!</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.dispatch(NavigationActions.navigate({ routeName: 'SearchNavigation' }))} >
          <Text style={styles.welcome}>go search!</Text>
        </TouchableOpacity>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>mot ngay buon</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
const mapStateToProps = (state) => ({
  app: state.app,
  nav: state.nav,
})

const mapDispatchToProps = (dispatch) => ({
  test: (bol) => dispatch(AppActions.test(bol)),
  dispatch,
})
export default connect(mapStateToProps, mapDispatchToProps)(App)


