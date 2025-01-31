import { useState } from "react";
import { Button,StyleSheet,View,Text } from "react-native";
import MyFunctionPage from "../Components/MyFunctionPage-Task22";


const Task22 = ()=>{

    const [text,setText] = useState("Hi I'm Osama")

    function onPress(){
        setShow(!show);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <MyFunctionPage update={setText}></MyFunctionPage>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        
    }
  });

  export default Task22;