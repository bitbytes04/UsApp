import React, { useRef, useState } from 'react';
import { Switch, View, DrawerLayoutAndroid, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from '../Styles/styles';
import { useNavigation } from '@react-navigation/native';
import Board_Select_Button from '../Buttons/Board_Select_Button';
import { Avatar, Button, List, Divider } from 'react-native-paper';
import Default_Text_Input from '../TextInputs/Default_Text_Input';
import CTA_Button from '../Buttons/CTA_Button';



const Settings = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');

  const data_sample = [
    {
      name: 'Board1',
      color: '#043b64',
      category: 'school'
    },
    {
      name: 'Board2',
      color: '#f4a261',
      category: 'home'
    },
    {
      name: 'Board3',
      color: '#2a9d8f',
      category: 'food'
    },
    {
      name: 'Board4',
      color: '#e76f51',
      category: 'actions'
    },
    {
      name: 'Board5',
      color: '#264653',
      category: 'people'
    },
    {
      name: 'Board6',
      color: '#8ecae6',
      category: 'places'
    },
    {
      name: 'Board7',
      color: '#ffb703',
      category: 'feelings'
    },
    {
      name: 'Board8',
      color: '#6a0572',
      category: 'objects'
    },
    {
      name: 'Board9',
      color: '#bc6c25',
      category: 'animals'
    }


  ]


  const navigation = useNavigation()

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const navigationView = () => (
    <SafeAreaView style={{ height: '100%' }} >
      <View style={{ padding: 20, justifyContent: 'center', alignItems: 'center', gap: 10, height: '100%' }}>
        <Image resizeMode='center' style={{ height: '100', width: '100', borderRadius: 100 / 2 }} source={require('../../assets/logo/profile_placeholder_img.png')} />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 40 }}> HELLO, NAME! </Text>
        <TouchableOpacity
          style={{ backgroundColor: '#043b64', width: '100%', padding: 10 }}
          title="Close drawer"
          onPress={() => navigation.replace('Dashboard')}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>MY PROFILE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: '#17616e', width: '100%', padding: 10 }}
          title="Close drawer"
          onPress={() => navigation.replace('MyBoards')}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>MY BOARDS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ backgroundColor: '#597279', width: '100%', padding: 10 }}
          title="Close drawer"
          onPress={() => navigation.replace('Settings')}>
          <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>SETTINGS</Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, width: '100%', justifyContent: 'flex-end', paddingBottom: '20' }}>
          <TouchableOpacity
            style={{ backgroundColor: '#97510d', width: '100%', padding: 10 }}
            title="Close drawer"
            onPress={() => navigation.popTo('Landing')}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>LOGOUT</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );

  return (
    <SafeAreaProvider>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
        <SafeAreaView style={[styles.container, { height: '100%' }]}>

          <View style={{ height: '100%' }}>
            <ImageBackground resizeMode='cover' style={{ height: '120', width: '100%', position: 'relative', display: 'flex', justifyContent: 'flex-end' }} source={require('../../assets/backgrounds/cover_img.png')}>
              <TouchableOpacity style={{ position: 'absolute', top: 15, left: 15 }} onPress={() => { drawer.current.openDrawer() }}>
                <Text style={{ textAlign: 'left', fontSize: 20, fontWeigt: 'bold', width: '100%' }}>☰</Text>
              </TouchableOpacity>
              <Text style={{ color: 'white', margin: 10, marginLeft: 20, fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>SETTINGS</Text>
            </ImageBackground>

            <View style={[styles.container, { padding: 20 }]}>
              {/* Profile Header */}
              <View style={[styles.profileContainer, { alignItems: 'center', gap: 5 }]}>
                <Image resizeMode='center' style={{ height: '100', width: '100', marginBottom: 10, borderRadius: 100 / 2, alignSelf: 'center' }} source={require('../../assets/logo/profile_placeholder_img.png')} />
                <View style={[styles.profileInfo, { gap: 5 }]}>
                  <Default_Text_Input label='NAME' width='90%' labelColor='#043b64' />
                  <Default_Text_Input label='EMAIL' width='90%' labelColor='#cb6d12' />
                </View>
                <CTA_Button title='EDIT ACCOUNT' color='#aedfec' width='90%' buttonStyle={{ marginTop: 5 }} onPress={() => { }} />
              </View>

              <Divider />

              {/* Settings List */}
              <List.Section>
                <List.Item
                  title="Change Password"
                  left={() => <List.Icon icon="lock-outline" />}
                  onPress={() => { }}
                />
                <Divider />
                <List.Item
                  title="Notifications"
                  left={() => <List.Icon icon="bell-outline" />}
                  right={() => (
                    <Switch
                      value={notificationsEnabled}
                      onValueChange={() => setNotificationsEnabled(!notificationsEnabled)}
                    />
                  )}
                />
                <Divider />
                <List.Item
                  title="Log Out"
                  titleStyle={{ color: 'red' }}
                  left={() => <List.Icon color="red" icon="logout" />}
                  onPress={() => { navigation.popTo('Landing') }}
                />
              </List.Section>
            </View>
          </View>
        </SafeAreaView>
      </DrawerLayoutAndroid>
    </SafeAreaProvider >
  );
};

export default Settings;