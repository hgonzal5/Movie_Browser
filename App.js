// import 'react-native-gesture-handler';
// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import HomeScreen from './Screens/HomeScreen'
// import SettingsScreen from './Screens/SettingsScreen';

// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Navigation
import {NavigationContainer} from '@react-navigation/native';

// My Navigational Flow
import {HomeScreenStack, MyBottomTabNavigator, MyDrawer} from './Navigation/MainNavigator'

const App = props => {

	return (
		<NavigationContainer>
			<HomeScreenStack />
		</NavigationContainer>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;