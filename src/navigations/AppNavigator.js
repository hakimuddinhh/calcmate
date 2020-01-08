import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
// import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
// import Dashboard from './Dashboard';
import StartScreen from "../screens/StartScreen";
import AddComponentScreen from "../screens/AddComponentScreen";
import SetComponentScreen from "../screens/SetComponentScreen";
import AddMembersScreen from "../screens/AddMembersScreen";
import MembersScreen from "../screens/MembersScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DashboardScreen from "../screens/DashboardScreen";
import ExpensesScreen from "../screens/ExpensesScreen";

import IntroScreen from "../screens/IntroScreen";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import SetupScreen from "../screens/SetupScreen";
/////////////////////////////////////

const afterLoggedIn = createBottomTabNavigator(
  {
    Dashboard: { screen: DashboardScreen },
    Expenses: { screen: ExpensesScreen },
    Members: { screen: MembersScreen },
    Me: { screen: ProfileScreen },
    Settings: { screen: SettingsScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#000"
      },
      gesturesEnabled: true,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Dashboard") {
          iconName = "logo-buffer";
        } else if (routeName === "Members") {
          iconName = "md-contacts";
        } else if (routeName === "Me") {
          iconName = "md-person";
        } else if (routeName === "Settings") {
          iconName = "md-settings";
        } else if (routeName === "Expenses") {
          iconName = "ios-paper-plane";
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    })
  }
);

const AppNavigator = createAppContainer(afterLoggedIn);

const SetupStackNavigator = createStackNavigator(
  {
    startScreen: { screen: StartScreen },
    addComponent: { screen: AddComponentScreen },
    setComponentValue: { screen: SetComponentScreen },
    addMembers: { screen: AddMembersScreen },
    Dashboard: { screen: AppNavigator }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      header: null
    })
  }
);

const SetupNavigator = createAppContainer(SetupStackNavigator);

/////////////////// Login Navigator

const LoginStackNavigator = createStackNavigator(
  {

    loginScreen: { screen: LoginScreen },
    SignupScreen: { screen: SignupScreen },
    SetupScreen: {screen: SetupNavigator},
    Dashboard: {screen: AppNavigator},
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      header: null
    })
  }
);

const LoginNavigator = createAppContainer(LoginStackNavigator);

/////////////////// FIRST Navigator

const InitialStackNavigator = createStackNavigator(
  {
    // intoScreen: { screen: IntroScreen },
    loginHomeScreen: { screen: LoginNavigator },
    setupScreen: { screen: SetupScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      header: null
    })
  }
);

const InitialNavigator = createAppContainer(InitialStackNavigator);

export default InitialNavigator;
