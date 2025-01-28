import { useState } from "react";
import { Button,StyleSheet,View,Text } from "react-native";


const Task17 = ()=> {

    const[name,setname] = useState(false);
    function onButtonPress(){
        setname(!name)
    }

    return(
        <View style={styles.container}>
            <Button
            title={name?"Hide":"Show"}
            onPress={onButtonPress}
            ></Button>
            {name && <Text style ={styles.name}>Osama Omari</Text>}
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

  export default Task17;