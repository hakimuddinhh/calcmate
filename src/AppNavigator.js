import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { createBottomTabNavigator, createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import Dashboard from './Dashboard';
import StartScreen from './StartScreen';
import AddComponent from './AddComponent';
import SetComponentValue from './SetComponentValue';
import AddMembers from './AddMembers';
import Members from './Members';
import Me from './Me';
import Settings from './Settings';
import Dashboard from './Dashboard';


/////////////////////////////////////

const AppNavigator0 = createBottomTabNavigator({
  Dashboard: { screen: Dashboard },
  Members: { screen: Members },
  Me: { screen: Me },
	Settings: { screen: Settings }
},
{
defaultNavigationOptions: ({ navigation }) => ({
   headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#000',
      },
      gesturesEnabled: true,
  tabBarIcon: ({ focused, horizontal, tintColor }) => {
    const { routeName } = navigation.state;
    let iconName;
    if (routeName === 'Dashboard') {
      iconName = 'logo-buffer';
    } else if (routeName === 'Members') {
      iconName = 'md-contacts';
    } else if (routeName === 'Me') {
      iconName = 'md-person';
    } else if (routeName === 'Settings') {
      iconName = 'md-settings';
    }

    // You can return any component that you like here! We usually use an
    // icon component from react-native-vector-icons
    return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
  }
})

});


const AppNavigator = createAppContainer(AppNavigator0);
//////////////////

// const MyDrawerNavigator = createDrawerNavigator({
//   startScreen: { screen: AppNavigator },
//   Dashboard: { screen: Dashboard },
//   Members: { screen: Members },
//   Me: { screen: Me },
//   Settings: { screen: Settings }
// },
// {
// defaultNavigationOptions: ({ navigation }) => ({
//     // drawerIcon: ({ tintColor }) => (
//     //   <Ionicons name={'logo-buffer'} size={20} color={'#ff0000'} />
//     // ),
//   headerTintColor: '#fff',
//   drawerLabel: () => {
//     const { routeName } = navigation.state;
//     let iconName;
//     if (routeName === 'Dashboard') {
//       iconName = 'Dashboard';
//     } else if (routeName === 'Members') {
//       iconName = 'Members';
//     } else if (routeName === 'Me') {
//       iconName = 'Me';
//     } else if (routeName === 'Settings') {
//       iconName = 'Settings';
//     }

//     // You can return any component that you like here! We usually use an
//     // icon component from react-native-vector-icons
//     return iconName;
//   },
//   drawerIcon: ({ focused, horizontal, tintColor }) => {
//     const { routeName } = navigation.state;
//     let iconName;
//     if (routeName === 'Dashboard') {
//       iconName = 'logo-buffer';
//     } else if (routeName === 'Members') {
//       iconName = 'md-contacts';
//     } else if (routeName === 'Me') {
//       iconName = 'md-person';
//     } else if (routeName === 'Settings') {
//       iconName = 'md-settings';
//     }

//     // You can return any component that you like here! We usually use an
//     // icon component from react-native-vector-icons
//     return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
//   }
// })

// });

// const DrawerNavigatorContainer = createAppContainer(AppNavigator);
// export default DrawerNavigatorContainer;


const StartScreenNavigator = createStackNavigator({
    startScreen: { screen: StartScreen },
    addComponent: { screen: AddComponent },
    setComponentValue: { screen: SetComponentValue },
    addMembers: { screen: AddMembers },
    Dashboard: { screen: AppNavigator } },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        header: null
      })
    });

const StackNavigator = createAppContainer(StartScreenNavigator);
export default StackNavigator;

