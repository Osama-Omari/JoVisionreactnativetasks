import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import TextContext from './TextContext';

class ComponentOne extends Component {
    static contextType = TextContext; 

    render() {
        const text = this.context.text;

        return <Text style={styles.text}>{text}</Text>; 
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color:'gray'
    },
});

export default ComponentOne;
