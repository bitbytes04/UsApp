import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Board_Select_Button(props) {

    const { color, category, name } = props

    return (
        <TouchableOpacity style={{ height: 70, width: 70, backgroundColor: (color ? color : '#1f56a9'), borderRadius: 10, borderWidth: 2 }}>

            <View style={{ backgroundColor: 'white', height: '60%', width: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8, justifyContent: 'center' }}>
                <Text style={{ color: 'black', fontWeight: 'bold', textAlign: 'center', justifyContent: 'center' }}>{name}</Text>
            </View>
            <Text style={{
                color: 'white',
                textAlign: 'center',
                textShadowRadius: 1,
                textShadowOffset: {
                    width: 2,
                    height: 2,
                },
            }}>{category}</Text>
        </TouchableOpacity>
    )
}
