import React, {Component} from "react";
import { View,Text,StyleSheet } from "react-native";


class MyClaasPage extends Component{
    constructor(props){
        super(props);
        this.state={
            txt:""
        }
    };

    updatetxt(newtxt){
        this.setState({txt:newtxt});
    }

    render(){
        return(
        <View style={styles.container}>
            <Text style={styles.text}>{this.state.txt}</Text>
        </View>
        );
    }
};


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
    },
    text: {
      fontSize: 18,
      color: 'white',
    }
  });
  

  export default MyClaasPage;