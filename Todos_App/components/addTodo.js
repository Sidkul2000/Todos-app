import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({submitHandler}) {
    const [text, setText] = useState('');
    
    const changeHandler = (val) => {
        setText(val);
    }

    const pressHandler = () => {
        submitHandler(text);
        setText('');
    }

    return(
        <View>
            <TextInput 
                style={styles.input}
                placeholder='New Todo...'
                onChangeText={changeHandler}
                value={text}
            />
            <Button 
                onPress={pressHandler}
                title='ADD TODO'
                color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      marginBottom: 15,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 2,
      borderBottomColor: '#ddd',
    },
});