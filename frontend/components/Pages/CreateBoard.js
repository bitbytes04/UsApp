import React, { useState } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import BoardButton from '../Buttons/Board_Button';
import { Dropdown } from 'react-native-element-dropdown';
import Default_Text_Input from '../TextInputs/Default_Text_Input';
import SearchBar from '../TextInputs/Search_Text_Input';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CTA_Button from '../Buttons/CTA_Button';
import { useNavigation } from '@react-navigation/native';

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
    { name: 'Punta', color: '#e76f51' }  // Go
];

const data = ['Kain', 'Tubig', 'Laro', 'Pahinga', 'Guro', 'Aso', 'Inay', 'Sakit', 'Tulog', 'Punta'];





const drop_data = [
    { label: 'School', value: '1' },
    { label: 'Home', value: '2' },
    { label: 'General', value: '3' },
    { label: 'Food', value: '4' },
];


const CreateBoard = () => {
    const [selectedButtons, setSelectedButtons] = useState({});
    const [Category, setCategory] = useState();
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (query) => {
        setFilteredData(
            data.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
        );
    };

    const navigation = useNavigation();

    const handleSelect = (name, isSelected) => {
        setSelectedButtons((prev) => ({
            ...prev,
            [name]: isSelected,
        }));
    };

    return (
        <View style={{ padding: 20, justifyContent: 'flex-start', alignItems: 'center', height: '100%' }}>
            <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 2, paddingBottom: 25, paddingTop: 25, justifyContent: 'center', alignContent: 'center', gap: 5, marginBottom: 10 }}>
                <Default_Text_Input style={{ height: '100%' }} label='Name' type='default' width='50%' labelColor='#043b64' />
                <Dropdown
                    style={{
                        flexGrow: 1, backgroundColor: 'white', padding: 5, borderRadius: 5,
                        borderWidth: 1,
                        borderBottomWidth: 4,
                        borderRightWidth: 4,
                        borderTopWidth: 1,
                        borderLeftWidth: 1,
                    }}
                    data={drop_data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder='Select Category'
                    value={Category}
                    onChange={item => { setCategory(item.value); }} ></Dropdown>
            </View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 20 }}>SELECT WORDS</Text>
            <View style={{
                width: '100%',
                borderWidth: 1,
                borderBottomWidth: 4,
                borderRightWidth: 4,
                borderTopWidth: 1,
                borderLeftWidth: 1,
                borderRadius: 10
            }}>
                <SearchBar onSearch={handleSearch} />
            </View>
            <Text style={{ marginTop: 20 }}>Search Results</Text>
            <SafeAreaProvider style={{ position: 'relative', borderWidth: 1, margin: 0 }}>
                <SafeAreaView style={{ height: 200 }} >
                    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ height: 200, justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', gap: 5, flexWrap: 'wrap', }} style={{ height: 200, width: '100%', margin: 5 }}>
                        {boardButtons.map((button, index) => {
                            return (
                                <BoardButton key={index} name={button.name} color={button.color} onSelect={handleSelect} />
                            )
                        })}
                    </ScrollView>
                </SafeAreaView>
            </SafeAreaProvider>
            <Text>No. of Selected Buttons: {Object.keys(selectedButtons).length}</Text>
            <CTA_Button title='SAVE BOARD' color='#d7f1f8' width='80%' onPress={() => { navigation.popTo('MyBoards') }} />
        </View>
    );
};

export default CreateBoard;
