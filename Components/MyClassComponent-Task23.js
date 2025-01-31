import React, {Component} from "react";
import { View,Text,StyleSheet, TextInput } from "react-native";

class MyClaasPage extends Component{
    

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                style={styles.input}
                placeholder="Type..."
                onChangeText={this.props.onUpdate}>

                </TextInput>
            </View>
        );
    }
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

export default MyClaasPage;