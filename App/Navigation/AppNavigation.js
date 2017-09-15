import React from 'react';
import { StackNavigator } from 'react-navigation'
import AboutScreen from '../Containers/AboutScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import ToolbarDropdown from '../Components/ToolbarDropdown';

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  AboutScreen: { screen: AboutScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerRight: <ToolbarDropdown onPress={data => {}} labels={["Share", "About"]} />
  }
})

export default PrimaryNav
