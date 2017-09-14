import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: "Salom"
  });

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <Text>PrimaryScreen</Text>
        </ScrollView>
      </View>
    )
  }
}
