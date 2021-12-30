import React from 'react';
import { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    TextInput,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import resultsNoti from '../../pages/Results/resultNoti';
import ListMen from '../../components/ListMen';

const Notification = () => {
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(resultsNoti);

    useEffect(() => {
        if (searchText === '') {
            setList(resultsNoti);
        } else {
            setList(
                resultsNoti.filter(
                    (item) =>
                        item.instituto.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                )
            );
        }
    }, [searchText]);

    const handleOrderClick = () => {
        let newList = [...resultsNoti];

        newList.sort((a, b) => (a.instituto > b.instituto ? 1 : b.instituto > a.instituto ? -1 : 0));

        setList(newList);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchArea}>
                <Text style={styles.TextTi}> Notificaçoes</Text>

            </View>

            <FlatList
                data={list}
                style={styles.list}
                renderItem={({ item }) => <ListMen data={item} />}
                keyExtractor={(item) => item.id}
            />

            <StatusBar style='auto' />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    TextTi: {
        fontSize: 25,
        color: 'rgba(255, 228, 93, 1)',
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: 'tomato',
        margin: 30,
        borderRadius: 5,
        fontSize: 19,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#FFF',

    },
    searchArea: {
        alignItems: 'center',
        marginTop: 40,
    },
    orderButton: {
        width: 32,
        marginRight: 30,
    },
    list: {
        flex: 1,
    },
});

export default Notification;
