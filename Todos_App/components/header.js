import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>MY TODOS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        height: 100,
        paddingTop: 40,
        backgroundColor: 'coral',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
    },
});