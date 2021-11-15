import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';

export default function Items({ item, deleteItem }) {
    
    const sure = () => {
        Alert.alert('Dialog Box', 'Are you sure to delete this?', [
            {
                text: "Yes",
                onPress: () => deleteItem(item.key)
            },
            {
                text:'Not now'
            }
        ])
    }

    const deleteAlert = (title, des) =>{
        Alert.alert(title, des, [
            {
                text:"Okay"
            }
        ])
    }

    return (
        <TouchableOpacity onPress={() => deleteAlert('Dialog', 'Long press to delete')} onLongPress={() => sure()}>
            <Text style={styles.items}>{item.text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    items: {
        margin: 10,
        padding: 10,
        borderStyle: "dotted",
        backgroundColor: 'yellow',
        borderRadius: 10
    }
})