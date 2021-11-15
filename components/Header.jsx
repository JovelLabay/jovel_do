import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Jovel Do🤣</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "red",
        height: 70,
    },
    headerText: {
        paddingTop: 30,
        fontWeight: "bold",
        fontSize: 20,
        paddingLeft: 10
    }
})