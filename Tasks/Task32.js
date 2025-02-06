import React,{useState} from "react";
import Video from "react-native-video";
import { View,StyleSheet,Text, TouchableOpacity, ImageBackground } from "react-native";

function Task32(){
    const[isplaying,setisplaying] = useState(false);

    return(
        <View style={styles.container}>
            {!isplaying?(
                <TouchableOpacity onPress={()=>setisplaying(true)}>
                    <ImageBackground
                    source={require('../Resources/qimage.jpg')}
                    style={styles.video}
                    ></ImageBackground>
                </TouchableOpacity>
            ):(
                <Video
            source={require('../Resources/video1.mp4')}
            controls={true}
            style={styles.video}
            resizeMode="contain"
            >
                 
            </Video>
            )}
            
            

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',

    },
    video:{
        width:300,
        height:200,
        backgroundColor:"black"
    }
    
  });

  export default Task32;