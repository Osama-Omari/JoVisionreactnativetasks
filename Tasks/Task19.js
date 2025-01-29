import { useState } from "react";
import { Button,StyleSheet,View,Text } from "react-native";
import MyClaasPage from "../Components/MyClassComponent-Task19";


const Task19 = ()=>{

    const [showComponent, setShowComponent] = useState(true);

    function onPress(){
        setShowComponent(!showComponent);
    }

    return(
        <View style={styles.container}>
            {showComponent?<Button title="Show" onPress={onPress}></Button>:<MyClaasPage></MyClaasPage>}
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

  export default Task19;