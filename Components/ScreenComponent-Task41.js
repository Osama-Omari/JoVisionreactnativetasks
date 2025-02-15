import { View,Text,StyleSheet } from "react-native";
import React from "react";

function Screens ({route}){
    const {num} = route.params;

    return(
        <View style={styles.container}>
            <Text>Screen {num}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
    
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Screens;