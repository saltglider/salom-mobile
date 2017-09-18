import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import AppConfig from '../Config/AppConfig'

// Styles
import styles from './Styles/LaunchScreenStyles'

class LaunchScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    header: null
  });

  componentDidMount() {
    const
      { navigation } = this.props,
      { navigate } = navigation;

    resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'HomeScreen'})
      ]
    });

    setTimeout(() => {
      navigation.dispatch(resetAction);
    }, AppConfig.launcherTimeout);
  }

  render () {
    const
      { navigation } = this.props,
      { navigate } = navigation;

    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <Text>PrimaryScreen</Text>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchScreen)
