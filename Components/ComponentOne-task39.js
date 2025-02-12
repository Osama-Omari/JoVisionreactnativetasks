import React from "react";
import { View,TextInput,StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

function ComponentOne(){
    const dispatch = useDispatch();
    const text = useSelector((state)=> state.textState.text);

    return(
        <View style={styles.container}>
            <TextInput 
            style={styles.input}
            value={text}
            onChangeText={(newtext)=>dispatch({type:'SET_TEXT',payload:newtext})}
            placeholder="Type here..."
            ></TextInput>
        </View>
    )
}


const styles = StyleSheet.create({
    container: { 
        padding: 20
     },
    input: {
      borderWidth: 1,
      borderRadius: 10,
      color:'gray'
    },
  });
  
export default ComponentOne;