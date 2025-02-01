import { useRef,useState,useEffect } from "react";
import { View,TextInput,StyleSheet } from "react-native";
import MyClaasPage from "../Components/MyClassComponent-Task25";

const Task25 = ()=>{

    const myref= useRef(null);
    const [text,settext] = useState('');


    function handle(newText) {
        settext(newText);
        myref.current.updatetxt(newText);
        
      }

    return(
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Type here..."
            value={text}
            onChangeText={handle}
            >
            </TextInput>
            <MyClaasPage ref={myref}></MyClaasPage>
        </View>
    )


}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
        margin:10,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      width: 200,
      color:'white'
    },
  });


  export default Task25;