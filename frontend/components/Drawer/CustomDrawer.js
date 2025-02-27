import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CustomDrawer() {
    return (
        <SafeAreaView >
            <View style={{ padding: 50 }}>
                <Text style={{ fontSize: 15 }}> Profile </Text>
                <TouchableOpacity
                    title="Close drawer"
                    onPress={() => drawer.current.closeDrawer()}>
                    <Text>My Profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}