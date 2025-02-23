import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CTA_Button from './components/Buttons/CTA_Button';
import Default_Text_Input from './components/TextInputs/Default_Text_Input';
import { useEffect, useState } from 'react';

export default function App() {

  const [Email, setEmail] = useState();
  
  return (
    <View style={styles.container}>
      <CTA_Button color='cyan' title='TEST BUTTON'/>
      <Default_Text_Input placeholder='Enter Email' label='EMAIL' color='white'/>
      <Default_Text_Input placeholder='Enter Name' label='NAME' color='white' labelColor='blue'/>
      <Text style={{fontWeight: 'bold', color:'blue'}}>EMMAN</Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
