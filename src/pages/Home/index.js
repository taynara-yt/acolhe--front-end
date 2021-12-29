import React from 'react';
import { useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    TextInput,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListItem from '../../components/ListItem';
import results from '../../pages/Results/results';

const Home = () => {
    const [searchText, setSearchText] = useState('');
    const [list, setList] = useState(results);

    useEffect(() => {
        if (searchText === '') {
            setList(results);
        } else {
            setList(
                results.filter(
                    (item) =>
                        item.instituto.toLowerCase().indexOf(searchText.toLowerCase()) > -1
                )
            );
        }
    }, [searchText]);

    const handleOrderClick = () => {
        let newList = [...results];

        newList.sort((a, b) => (a.instituto > b.instituto ? 1 : b.instituto > a.instituto ? -1 : 0));

        setList(newList);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchArea}>
                <TextInput
                    style={styles.input}
                    placeholder="Pesquise uma plataforma"
                    placeholderTextColor="rgba(255, 255, 255, 0.5)"
                    value={searchText}
                    onChangeText={(t) => setSearchText(t)}
                />
                <TouchableOpacity onPress={handleOrderClick} style={styles.orderButton}>
                    <MaterialCommunityIcons
                        name="order-alphabetical-ascending"
                        size={32}
                        color="tomato"
                    />
                </TouchableOpacity>
            </View>

            <FlatList
                data={list}
                style={styles.list}
                renderItem={({ item }) => <ListItem data={item} />}
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
        flexDirection: 'row',
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

export default Home;
