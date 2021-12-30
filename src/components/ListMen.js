import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';

const ListMen = ({ data }) => {
    return (
        <TouchableOpacity style={styles.item}>
            <Image source={{ uri: data.avatar }} style={styles.itemPhoto} />
            <View style={styles.itemInfo}>
                <Text style={styles.itemP1}>{data.instituto}</Text>
                <Text style={styles.itemP2}>{data.mensagem}</Text>


            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        borderBottomWidth: 0,
        borderRadius: 20,
        marginTop: 10,
        backgroundColor: 'rgba(255, 228, 93, 1)',
        paddingTop: 15,
        paddingBottom: 15,

    },
    itemPhoto: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginLeft: 22,
    },
    itemInfo: {
        marginLeft: 10,

    },
    itemP1: {
        fontSize: 22,
        color: '#5C573D',
        marginBottom: 5,
        width: 230,
    },
    itemP2: {
        fontSize: 18,
        color: 'rgba(255, 255, 255, 1)',
        width: 230,
    },

});

export default ListMen;
