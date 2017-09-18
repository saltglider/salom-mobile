import React from 'react';
import { StackNavigator } from 'react-navigation'
import HomeScreen from '../Containers/HomeScreen'
import AboutScreen from '../Containers/AboutScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import ToolbarDropdown from '../Components/ToolbarDropdown';

import styles from './Styles/NavigationStyles'

const toolbarMenu = [
  {label: "Share", action: () => console.warn("Note: Not implemented yet!")},
  {label: "About", action: navigation => { navigation.navigate('AboutScreen') }}
];

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  HomeScreen: { screen: HomeScreen },
  AboutScreen: { screen: AboutScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'LaunchScreen',
  navigationOptions: ({ navigation }) => ({
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle,
    headerRight: <ToolbarDropdown onPress={data => {if(data.action == "menu" && data.result == "itemSelected") toolbarMenu[data.index].action(navigation)}} labels={toolbarMenu.map(selection => selection.label)} />
  })
})

export default PrimaryNav
