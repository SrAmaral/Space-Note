import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../pages/home';
import Note from '../pages/note';
import PageCalc from '../pages/calc';
import Colors from '../styles/Colors';

enableScreens();

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.purple}
      inactiveColor={Colors.lightGrey}
      barStyle={{backgroundColor: Colors.background}}>
      <Tab.Screen
        name="Notes"
        component={Home}
        options={{
          tabBarLabel: 'Notes',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="notebook" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Calc"
        component={PageCalc}
        options={{
          tabBarLabel: 'Calculator',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="calculator" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Tabs} />
      <Stack.Screen name="Note" component={Note} />
    </Stack.Navigator>
  );
}
