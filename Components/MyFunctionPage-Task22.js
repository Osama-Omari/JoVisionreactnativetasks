import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

function MyFunctionPage({update}){
    return(
        <View>
            <TextInput style={styles.input}
            placeholder='Type...'
            onChangeText={update}></TextInput>
        </View>
    )
}



const styles = StyleSheet.create({
    input: {
        margin:10,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 10,
      width: 200,
    },
  });


  export default MyFunctionPage;
  