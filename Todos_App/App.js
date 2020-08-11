import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import AddTodo from './components/addTodo';
import TodoItem from './components/todoItem';

export default function App() {
  const [ todos, setTodos ] = useState([
    {text: 'Do Homework', key: '1'},
    {text: 'Do Assignments', key: '2'},
    {text: 'Play Piano', key: '3'},
    {text: 'Prepare for the test', key: '4'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3 ){
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    } else {
      Alert.alert('OOPS!', 'Please enter a todo greater than 3 characters', [
        {text: 'UNDERSTOOD'}
      ]);
    }
  };
  
  return (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )} 
          />
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff'
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
