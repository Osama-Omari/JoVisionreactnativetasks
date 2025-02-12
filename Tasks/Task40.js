import React , {useState} from "react";
import { View,Button, StyleSheet } from "react-native";
import ComponentOneTask40 from "../Components/ComponentOne-task40";
import store from "../Components/Store-39&40";
import { Provider } from "react-redux";

function Task40(){
    const [show , setShow] = useState(true);
    function handlebutton(){
        setShow(!show);
    }
    return(
        <Provider store={store}>
            <View style={styles.container}>
                <Button
                title={show?'Hide Component':'Show Component'}
                onPress={handlebutton}>
                </Button>
                {show && <ComponentOneTask40></ComponentOneTask40> }
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Task40;