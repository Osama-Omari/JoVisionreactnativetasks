import React, { useContext } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import TextContext from './TextContext';
import ComponentOne from './ComponentOne-task38';

function ComponentTwo() {
    const { text, setText } = useContext(TextContext); 

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Type here..."
            />
            <ComponentOne/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        width: 250,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        width: '100%',
        color:'gray'
    },
});

export default ComponentTwo;
