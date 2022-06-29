import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Screens Imports
import ScreenOne from '../Screens/ScreenOne';
import ScreenTwo from '../Screens/ScreenTwo';
import ScreenThree from '../Screens/ScreenThree';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="OptionOne" component={MyBottomTabNavigator} />
            <Drawer.Screen name="OptionTwo" component={ScreenTwo} />
        </Drawer.Navigator>
    );

}

function HomeScreenStack() {

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor:'#00d8d6',
            },
        }}>
            <Stack.Screen name="ScreenOne" component={ScreenOne} options={{
                title: 'Movie Browser'
            }} />
            <Stack.Screen name="ScreenTwo" component={ScreenTwo} options={{
                title: 'Movies List'
            }}/>
            <Stack.Screen name="ScreenThree" component={ScreenThree} options={{
                title: 'Movie Details'
            }}/>
        </Stack.Navigator>
    );

};

function MyBottomTabNavigator() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreenStack} />
        </Tab.Navigator>
    );

}

export {HomeScreenStack, MyBottomTabNavigator, MyDrawer};