import { View,Text,StyleSheet, Button } from "react-native";
import React from "react";

function Screens ({route , navigation}){
    const {num} = route.params;

    return(
        <View style={styles.container}>
            <Text style= {styles.title}>Screen {num}</Text>
        {num === 1 &&(
            <>
            <Button
            title="Go to Screen 2"
            onPress={()=>navigation.navigate("Screen 2")}
            ></Button>
            
            <Button
            title="Go to Screen 3"
            onPress={()=>navigation.navigate("Screen 3")}
            ></Button>
            
            <Button
            title="Go to Screen 4"
            onPress={()=>navigation.navigate("Screen 4")}
            ></Button>
            
            </>
        )}

        {num ===2 && (
        <>
          <Button
            title="Go to Screen 1"
            onPress={() => navigation.navigate("Screen 1")}
          />
          <Button
            title="Go to Screen 3"
            onPress={() => navigation.navigate("Screen 3")}
          />
          <Button
            title="Go to Screen 4"
            onPress={() => navigation.navigate("Screen 4")}
          />
        </>
      )}

      {num == 3 && (
        <>
          <Button
            title="Go to Screen 1"
            onPress={() => navigation.navigate("Screen 1")}
          />
          <Button 
            title="Go to Screen 2"
            onPress={() => navigation.navigate("Screen 2")}
          />
          <Button
            title="Go to Screen 4"
            onPress={() => navigation.navigate("Screen 4")}
          />
        </>
      )}

      {num == 4 && (
        <>
          <Button
            title="Go to Screen 1"
            onPress={() => navigation.navigate("Screen 1")}
          />
          <Button
            title="Go to Screen 2"
            onPress={() => navigation.navigate("Screen 2")}
          />
          <Button
            title="Go to Screen 3"
            onPress={() => navigation.navigate("Screen 3")}
          />
        </>
      )}

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding : 20
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
      },
    
})

export default Screens;