import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MyFunctionPage(){
    useEffect(() => {
        console.log('MyFunctionPage loaded');
    
        return () => {
          console.log('MyFunctionPage unloaded');
        };
      }, []);
    
      return (
        <View style={styles.container}>
          <Text style={styles.text}>This is MyFunctionPage</Text>
        </View>
      );

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        
    }
})

export default MyFunctionPage;
