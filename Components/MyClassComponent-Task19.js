import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class MyClaasPage extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>MY Class Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        
    }
})


export default  MyClaasPage;