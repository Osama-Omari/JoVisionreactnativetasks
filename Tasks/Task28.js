import React, { useState } from 'react';
import { View, Text, Button, Image, Alert, StyleSheet,FlatList, Pressable } from 'react-native';

function Task28(){

    const images = [
        require('../Resources/image1.jpeg'),
        require('../Resources/image2.png'),
        require('../Resources/image3.jpeg'),
        require('../Resources/image4.jpeg'),
        require('../Resources/image5.jpeg'),
        require('../Resources/image6.jpeg'),
        require('../Resources/image7.jpeg'),
        require('../Resources/image8.jpeg'),
        require('../Resources/image9.jpeg'),
        require('../Resources/image10.jpeg')
    ]

    function handlepress(index){
        Alert.alert(`You have selected image: ${index}`);
    }
    function key(_,index){
        return `image-${index}`
    }
    function render({item,index}){
        return (
            <Pressable onPress={() => handlepress(index)} style={styles.imagecontainer}>
                <Image source={item} style={styles.image} />
            </Pressable>
        );
    }

    return(
        <View style={styles.container}>
            <FlatList
            data={images}
            horizontal
            keyExtractor={key}
            renderItem={render}></FlatList>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    },

    image: {
        width: 300,
        height: 300,
        marginBottom: 20,
    },

    imagecontainer:{
        marginHorizontal:10
    }


})

export default Task28;