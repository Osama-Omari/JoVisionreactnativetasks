import React from "react";
import { Text,View,StyleSheet } from "react-native";
import UseCurrentTime from "../Components/UseCurrentTime-task34";

function Task34(){

    const time = UseCurrentTime();

    return(
    <View style={styles.container}>
        <Text style={styles.time}>{time.toLocaleTimeString()}</Text>
        <Text style={styles.date}>{time.toLocaleDateString()}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',

    },
    time: {
      fontSize: 30,
      fontWeight: 'bold',
      color:'gray'
    },
    date: {
      fontSize: 18,
      color: 'gray',
    },
});
export default Task34;