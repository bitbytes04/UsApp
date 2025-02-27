import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Default_Text_Input from '../TextInputs/Default_Text_Input'
import { styles } from '../Styles/styles'
import CTA_Button from '../Buttons/CTA_Button'
import { useNavigation } from '@react-navigation/native'
import { Dropdown } from 'react-native-element-dropdown';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const data = [
  { label: 'Male', value: '1' },
  { label: 'Female', value: '2' },
  { label: 'Non-Binary', value: '3' },
  { label: 'Prefer not to say', value: '4' },
];


export default function SignUpPage() {
  const navigation = useNavigation()
  const [UserGender, setUserGender] = useState();
  return (
    <View style={[styles.default_container, { gap: 40, paddingTop: 50 }]}>

      <Image resizeMode='contain' style={{ height: 100, width: '80%' }} source={require('../../assets/logo/main_logo_img.png')} />
      <SafeAreaProvider style={{ width: '100%' }}>
        <SafeAreaView style={{ width: '100%' }}>
          <ScrollView contentContainerStyle={{ width: '100%' }}>
            <View style={{ gap: 5, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Default_Text_Input label='First Name' width='80%' labelColor='#043b64' />
              <Default_Text_Input label='Last Name' width='80%' labelColor='#043b64' />
              <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'center', alignContent: 'center', gap: 5 }}>
                <Default_Text_Input style={{ height: '100%' }} label='Age' type='numeric' width='40%' labelColor='#043b64' />
                <Dropdown
                  style={{
                    flexGrow: 1, backgroundColor: 'white', padding: 5, borderRadius: 5,
                    borderWidth: 1,
                    borderBottomWidth: 4,
                    borderRightWidth: 4,
                    borderTopWidth: 1,
                    borderLeftWidth: 1,
                  }}
                  data={data}
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder='Select Gender'
                  value={UserGender}
                  onChange={item => { setUserGender(item.value); }} ></Dropdown>
              </View>
              <Default_Text_Input type='email-address' style={{ marginTop: 10 }} label='Email' width='80%' labelColor='#17616e' />
              <Default_Text_Input type='numeric' label='Contact No' width='80%' labelColor='#17616e' />

              <Default_Text_Input type='email-address' style={{ marginTop: 10 }} label='Password' width='80%' labelColor='#cb6d12' />
              <Default_Text_Input type='email-address' label='Confirm Password' width='80%' labelColor='#cb6d12' />

              <CTA_Button buttonStyle={{ marginTop: 10 }} title='SIGN UP' color='#d7f1f8' width='80%' onPress={() => { navigation.popTo('Login') }} />
            </View>
          </ScrollView>

        </SafeAreaView>
      </SafeAreaProvider>

    </View >
  )
}