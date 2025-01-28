import { useState , useEffect} from "react";
import { Button,StyleSheet,View,Text,ActivityIndicator } from "react-native";


const Task18 = ()=>{

    [loading,setloading] = useState(true);

    function startTimer() {
        return window.setTimeout(function () {
          setloading(false);
        }, 5000);
      }
    

      function clearTimer(timer) {
        window.clearTimeout(timer);
      }


      useEffect(function () {

        const timer = startTimer(); 
    
        return function cleanup() {

          clearTimer(timer); 

        };
      }, []);

    return(
        <View style={styles.container}>
            {loading ? (
            <View>
                <ActivityIndicator size="large" color="yellow" />
                <Text style={styles.loading}>Loading...</Text>
            </View>
            ):(
                <Text style= {styles.name}>Osama Omari</Text>
            )}  
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    name: {
      marginTop: 20,
      fontSize: 24,
      fontWeight: 'bold',
      color:'white'
    },
    loading:{
        fontSize: 18,
        color: 'white',
    }
  });

  export default Task18;