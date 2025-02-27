import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './components/Pages/LoginPage';
import SignUpPage from './components/Pages/SignUpPage';
import LandingPage from './components/Pages/LandingPage';
import UserDashboard from './components/Pages/UserDashboard';
import Settings from './components/Pages/Settings';
import MyBoards from './components/Pages/MyBoards';
import CreateBoard from './components/Pages/CreateBoard';
import BoardInterface from './components/Pages/BoardInterface';



export default function App() {

  const SNavigation = createNativeStackNavigator()


  const screenStyles = {
    default: {
      no_header: 'true', title: 'UsApp', headerStyle: {}, headerShown: false, orientation: 'portrait_up'
    },
    login: {

      title: 'USER LOGIN',
      headerTitleStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1

      },
      headerStyle: {
        backgroundColor: '#3e6888'
      },
      headerTintColor: 'white'
    },
    signup: {

      title: 'USER SIGNUP',
      headerTitleStyle: {
        textAlign: 'center',
        fontWeight: 'bold',
        textShadowColor: '#000',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1

      },
      headerStyle: {
        backgroundColor: '#17616e'
      },
      headerTintColor: 'white'
    },
    landscape: {
      title: 'CREATE YOUR BOARD', headerStyle: {}, orientation: 'landscape'
    },
  }

  return (
    <NavigationContainer>
      <SNavigation.Navigator initialRouteName='Landing'>
        <SNavigation.Screen options={screenStyles.default} name='Landing' component={LandingPage} />
        <SNavigation.Screen options={screenStyles.login} name='Login' component={LoginPage} />
        <SNavigation.Screen options={screenStyles.signup} name='SignUp' component={SignUpPage} />
        <SNavigation.Screen options={screenStyles.default} name='Dashboard' component={UserDashboard} />
        <SNavigation.Screen options={screenStyles.default} name='Settings' component={Settings} />
        <SNavigation.Screen options={screenStyles.default} name='MyBoards' component={MyBoards} />
        <SNavigation.Screen options={screenStyles.landscape} name='CreateBoards' component={CreateBoard} />
        <SNavigation.Screen options={screenStyles.landscape} name='BoardInterface' component={BoardInterface} />
      </SNavigation.Navigator>
    </NavigationContainer>
  );
}
