import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import CTA_Button from './components/Buttons/CTA_Button';
import Default_Text_Input from './components/TextInputs/Default_Text_Input';
import { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from './components/Pages/LoginPage';
import SignUpPage from './components/Pages/SignUpPage';
import LandingPage from './components/Pages/LandingPage';
import { Header } from 'react-native/Libraries/NewAppScreen';

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


    }
  }

  return (
    <NavigationContainer>
      <SNavigation.Navigator initialRouteName='Landing'>
        <SNavigation.Screen options={screenStyles.default} name='Landing' component={LandingPage} />
        <SNavigation.Screen options={screenStyles.login} name='Login' component={LoginPage} />
        <SNavigation.Screen options={{}} name='SignUp' component={SignUpPage} />
      </SNavigation.Navigator>
    </NavigationContainer>
  );
}
