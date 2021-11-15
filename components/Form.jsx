import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function Form({submitTheItem}) {

    const [theNewItem, setTheNewItem] = useState('')

    const typedItem = (value) => {
        setTheNewItem(value)
    }

    return (
        <View style={{paddingHorizontal:10}}>
            <TextInput
                placeholder='Hoy bugok sulat diri👇👇👇'
                style={styles.form}
                onChangeText={typedItem}
            />
            <Button title='Add Todo' onPress={() => submitTheItem(theNewItem)} />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        borderBottomWidth: 1,
        borderColor: 'orange',
        padding: 10,
        marginHorizontal: 50,
        marginVertical: 20,
        color:'white'
    }
})