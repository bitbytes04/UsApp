import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Default_Text_Input(props) {


    
    const {label,placeholder, color, labelColor, setter, getter} = props;

    const styles = StyleSheet.create({
      text_input:{
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom:2,
        backgroundColor: (color? color: '#fad4e1'),
        width: '80%'
      },
      container:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: (labelColor? labelColor: 'black'),
        borderRadius: 5,
        margin: 5,
        borderWidth:1,
        borderBottomWidth: 3,
        borderRightWidth: 3,
      },
      label:{
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom:2,
      }
    })

  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}:</Text>
       <TextInput style={styles.text_input} placeholder={placeholder} onChangeText={setter} value={getter}/>
    </View>
   
  )
}