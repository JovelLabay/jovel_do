import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import Items from './components/Items'
import Header from './components/Header'
import Form from './components/Form'

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  // DELETE
  const deleteItem = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  // ADD
  const submitTheItem = (text) => {
    if (text.length <= 5) {
      Alert.alert('Make it long', 'Please make sure it is longer 5 char.', [
        {
          text:'OK'
        }
      ])
    } else {
      setTodos((prevTodos) => {
      return [
        {text: text.slice(0,1).toUpperCase() + text.slice(1, text.length), key: Math.random().toString()},
        ...prevTodos
      ]
    })
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header />
          <View style={styles.content}>
            <Form submitTheItem={submitTheItem} />
              <View style={styles.lists}>
                  <FlatList
                    data={todos}
                    renderItem={({ item }) => (
                      <Items item={item} deleteItem={deleteItem}/>
                    )}
                  />
              </View>
          </View>
       </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex:1
  },
  content: {
    flex:1
  },
  lists:{
    flex:1
  }
});