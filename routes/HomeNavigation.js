import 'react-native-gesture-handler';
import React from 'react';
import { Text, Image } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from 'screens/home';
import News from 'screens/news';
import Homework from 'screens/homework';
import Profile from 'screens/profile';
import palette from 'themes/palette';

const Tab = createMaterialBottomTabNavigator();

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={palette.primary.main}
      inactiveColor={palette.grey.lightDark2}
      barStyle={{ backgroundColor: '#ffffff' }}
      shifting={false}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: <Text style={{ fontSize: 10, fontFamily: 'Roboto-Bold' }}>HOME</Text>,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? require('assets/images/home_blue_icon.png') : require('assets/images/home_gray_icon.png')} style={{ height: 20, width: 20 }} />
          ),
        }}

      />
      <Tab.Screen
        name="news"
        component={News}
        options={{
          tabBarLabel: <Text style={{ fontSize: 10, fontFamily: 'Roboto-Bold' }}>NEWS</Text>,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? require('assets/images/newspaper_blue_icon.png') : require('assets/images/newspaper_gray_icon.png')} style={{ height: 20, width: 20 }} />
          ),
        }}
      />
      <Tab.Screen
        name="homework"
        component={Homework}
        options={{
          tabBarLabel: <Text style={{ fontSize: 10, fontFamily: 'Roboto-Bold' }}>HOMEWORK</Text>,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? require('assets/images/homework_blue_icon.png') : require('assets/images/homework_gray_icon.png')} style={{ height: 20, width: 20 }} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: <Text style={{ fontSize: 10, fontFamily: 'Roboto-Bold' }}>PROFILE</Text>,
          tabBarIcon: ({ focused }) => (
            <Image source={focused ? require('assets/images/user_dark_blue_icon.png') : require('assets/images/user_gray_icon.png')} style={{ height: 20, width: 20 }} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigation;
