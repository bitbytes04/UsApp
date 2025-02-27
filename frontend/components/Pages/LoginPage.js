import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Default_Text_Input from '../TextInputs/Default_Text_Input'
import { styles } from '../Styles/styles'
import CTA_Button from '../Buttons/CTA_Button'
import { useNavigation } from '@react-navigation/native'

export default function LoginPage() {
    const navigation = useNavigation()
    return (
        <View style={[styles.default_container, { gap: 50, paddingTop: 50 }]}>

            <Image resizeMode='contain' style={{ height: 100, width: '80%' }} source={require('../../assets/logo/main_logo_img.png')} />
            <View style={{ gap: 5 }}>
                <Default_Text_Input label='EMAIL' width='90%' labelColor='#043b64' />
                <Default_Text_Input label='PASSWORD' width='90%' labelColor='#cb6d12' secure={true} />
                <TouchableOpacity>
                    <Text style={{ textDecorationLine: 'underline' }}>forgot password?</Text>
                </TouchableOpacity>

            </View>
            <CTA_Button title='Login' color='#d7f1f8' width={200} onPress={() => { navigation.navigate('Login') }} />
        </View>
    )
}