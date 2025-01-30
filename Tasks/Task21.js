import { useState } from "react";
import { Button,StyleSheet,View,Text } from "react-native";
import MyFunctionPage from "../Components/MyFunctionPage-Task21";


const Task21 = ()=>{

    const [show, setShow] = useState(false);

    function onPress(){
        setShow(!show);
    }

    return(
        <View style={styles.container}>
            <Button title={show?"Hide":"Show"} onPress={onPress}></Button>
            {show && <MyFunctionPage></MyFunctionPage>}
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      marginTop: 20,
      fontSize: 24,
      fontWeight: 'bold',
    },
  });

  export default Task21;