import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CTA_Button(props) {


  const { title, color, width, titleStyle, buttonStyle, onPress } = props;

  const styles = StyleSheet.create({
    button: {
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 2,
      paddingBottom: 2,
      borderWidth: 1,
      borderBottomWidth: 3,
      borderRightWidth: 3,
      backgroundColor: (color ? color : '#fad4e1'),
      borderRadius: 7,
      width: (width ? width : 'auto'),
      textAlign: 'center',
      paddingTop: 10,
      paddingBottom: 10

    },
    text: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 15
    }
  })
  return (
    <TouchableOpacity onPress={onPress} style={(buttonStyle ? buttonStyle : styles.button)}>
      <Text style={(titleStyle ? titleStyle : styles.text)}>{title}</Text>
    </TouchableOpacity>
  )
}