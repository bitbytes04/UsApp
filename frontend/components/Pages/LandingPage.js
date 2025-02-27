import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../Styles/styles'
import CTA_Button from '../Buttons/CTA_Button'
import { useNavigation } from '@react-navigation/native'


export default function LandingPage() {

    const navigation = useNavigation()

    return (
        <View style={[styles.default_container, { gap: 50 }]}>
            <Image resizeMode='cover' style={{ height: 100, width: '100%' }} source={require('../../assets/backgrounds/header_background_img.png')} />
            <Image resizeMode='contain' style={{ height: 100, width: '80%' }} source={require('../../assets/logo/main_logo_img.png')} />
            <Text style={{ textAlign: 'center', width: '80%' }}>Ipahayag ang sarili gamit ang UsApp, isang Filipino Communication Board App. Katulong mo sa bawat salita</Text>
            <View style={{ gap: 5 }}>
                <CTA_Button title='Login' color='#d7f1f8' width={200} onPress={() => { navigation.navigate('Login') }} />
                <CTA_Button title='Create Account' color='#ffcfa1' width={200} onPress={() => { navigation.navigate('SignUp') }} />
            </View>


        </View>
    )
}