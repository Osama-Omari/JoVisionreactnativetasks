import { useState } from "react";
import { Button,StyleSheet,View,Text } from "react-native";
import MyClaasPage from "../Components/MyClassComponent-Task20";


const Task20 = ()=>{

    const [showComponent, setShowComponent] = useState(false);

    function onPress(){
        setShowComponent(!showComponent);
    }

    return(
        <View style={styles.container}>
            <Button title={showComponent?"Hide":"Show"} onPress={onPress}></Button>
            {showComponent && <MyClaasPage></MyClaasPage> }
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

  export default Task20;