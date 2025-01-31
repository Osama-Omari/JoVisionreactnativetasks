import { useState } from "react";
import { Button,StyleSheet,View,Text } from "react-native";
import MyClaasPage from "../Components/MyClassComponent-Task23";

const Task23 = ()=>{

    const [text,setText] = useState("Hi I'm Osama")

    function onPress(){
        setShow(!show);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <MyClaasPage onUpdate={setText}></MyClaasPage>
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

  export default Task23;