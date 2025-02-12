import React , {useState} from "react";
import { View,Button, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import ComponentOne from "../Components/ComponentOne-task39";
import store from "../Components/Store-39";

function Task39(){
    const [show , setShow] = useState(true);

    function handlebutton(){
        setShow(!show);
    }
    return(
        <Provider store={store}>
            <View>
                <Button
                title={show?'Hide Component':'Show Component'}
                onPress={handlebutton}>
                </Button>
                {show && <ComponentOne></ComponentOne>}

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

export default Task39;