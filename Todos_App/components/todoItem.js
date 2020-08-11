import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {  MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({pressHandler, item}) {
    return(
        <TouchableOpacity onPress = {() => pressHandler(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={24} color="#333" />
                <Text style={styles.itemText}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
    padding: 20,
    marginTop: 20,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 2,
    borderRadius: 10,
    flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
    },
});
