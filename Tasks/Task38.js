import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextContext from '../Components/TextContext';
import ComponentTwo from '../Components/ComponentTwo-task38';

function Task38 (){
    const [text , setText]= useState('');

    return(
        <TextContext.Provider value={{ text,setText }}>
            <View style = { styles.Container}>
                <ComponentTwo></ComponentTwo>
                <ComponentTwo></ComponentTwo>
                <ComponentTwo></ComponentTwo>
                <ComponentTwo></ComponentTwo>
            </View>
        </TextContext.Provider>
    )
}


const styles = StyleSheet.create({
    Container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  export default Task38;