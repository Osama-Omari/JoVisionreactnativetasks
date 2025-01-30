import React, {Component} from "react";
import { View,Text,StyleSheet } from "react-native";

class MyClaasPage extends Component{
    componentDidMount(){
        console.log("My Class page loaded")
    }

    componentWillUnmount(){
        console.log("My Class page unloaded")
    }


    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>MY CLASS PAGE</Text>
            </View>
        );
    }
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

export default MyClaasPage;