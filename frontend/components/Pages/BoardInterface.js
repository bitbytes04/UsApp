import { View, Text, TouchableOpacity, Image, Switch, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Board_Button from '../Buttons/Board_Button';
import { Ionicons, Entypo, FontAwesome6 } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function BoardInterface() {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [selectedButtons, setSelectedButtons] = useState({});

    const handleSelect = (name, isSelected) => {
        setSelectedButtons((prev) => ({
            ...prev,
            [name]: isSelected,
        }));
    };

    const boardButtons = [
        { name: 'Kain', color: '#ff9f1c' },  // Eat
        { name: 'Tubig', color: '#2ec4b6' },  // Water
        { name: 'Laro', color: '#ff6b6b' },  // Play
        { name: 'Pahinga', color: '#6a0572' },  // Rest
        { name: 'Guro', color: '#264653' },  // Teacher
        { name: 'Aso', color: '#f4a261' },  // Dog
        { name: 'Inay', color: '#8ecae6' },  // Mother
        { name: 'Sakit', color: '#ffb703' },  // Pain / Sick
        { name: 'Tulog', color: '#bc6c25' },  // Sleep
        { name: 'Punta', color: '#e76f51' },  // Go
        { name: 'Saya', color: '#d00000' },  // Happy
        { name: 'Tulong', color: '#3a86ff' }  // Help
    ];


    return (
        <View style={{}}>
            <View style={{ flexDirection: 'row', width: '100%', height: '100%' }}>
                <View style={{ flexGrow: 1, maxWidth: '86%', borderWidth: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                            <Ionicons name="arrow-back" size={24} color="white" />
                        </TouchableOpacity>
                        <Text style={styles.title}>Board Title</Text>
                        <TouchableOpacity onPress={() => console.log('Keyboard button pressed')} style={styles.button}>
                            <Entypo name="keyboard" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: 50, borderWidth: 3, margin: 5, borderRadius: 5, flexDirection: 'row' }}>
                        <View style={{ flexGrow: 1, justifyContent: 'flex-start', padding: 5, flexDirection: 'row', gap: 5 }}>
                            <View style={{ justifyContent: 'flex-end', padding: 5, backgroundColor: '#c4e8fb', flexDirection: 'row', flex: 1, maxWidth: 150, gap: 5, borderWidth: 2, borderRadius: 10 }}>
                                <Text>Selected Word</Text>
                                <FontAwesome6 name="delete-left" size={18} color="black" />
                            </View>
                            <View style={{ justifyContent: 'flex-end', padding: 5, backgroundColor: '#c4e8fb', flexDirection: 'row', flex: 1, maxWidth: 150, gap: 5, borderWidth: 2, borderRadius: 10 }}>
                                <Text>Selected Word</Text>
                                <FontAwesome6 name="delete-left" size={18} color="black" />
                            </View>
                            <View style={{ justifyContent: 'flex-end', padding: 5, backgroundColor: '#c4e8fb', flexDirection: 'row', flex: 1, maxWidth: 150, gap: 5, borderWidth: 2, borderRadius: 10 }}>
                                <Text>Selected Word</Text>
                                <FontAwesome6 name="delete-left" size={18} color="black" />
                            </View>

                        </View>
                        <TouchableOpacity style={[styles.button, { width: 50 }]}>
                            <FontAwesome6 name="delete-left" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 15, width: '90%', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', gap: 10, flexWrap: 'wrap', }}>
                        {boardButtons.map((button, index) => {
                            return (
                                <Board_Button key={index} name={button.name} color={button.color} onSelect={handleSelect} />
                            )
                        })}
                    </View>


                </View>
                <View style={{ width: 110, flex: 1, backgroundColor: '#043b64', alignItems: 'center', padding: 20, paddingTop: 30, gap: 10, justifyContent: 'center' }}>
                    <TouchableOpacity style={{ padding: 10, backgroundColor: '#3c6d90', borderRadius: 10, borderWidth: 2, borderColor: 'white' }}>
                        <Image style={{ height: 50, width: 60 }} source={require('../../assets/logo/speak_icon_img.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 10, backgroundColor: '#3c6d90', borderRadius: 10, borderWidth: 2, borderColor: 'white' }}>
                        <Image style={{ height: 50, width: 60 }} source={require('../../assets/logo/ai_icon_img.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 85, padding: 10, backgroundColor: '#3c6d90', borderRadius: 10, borderWidth: 2, borderColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>AUTO SPEAK</Text>
                        <Switch trackColor={{ false: '#767577', true: '#81b0ff' }} thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'} onValueChange={toggleSwitch} value={isEnabled} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#043b64', // Adjust color if needed
        paddingTop: 15,
        paddingHorizontal: 16,
    },
    button: {
        padding: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        flex: 1,
        textAlign: 'center',
        marginRight: 40, // Prevents shifting due to flex
    },
});