import { useRef,useState,useEffect } from "react";
import { View,TextInput,StyleSheet,Text,Button, ActivityIndicator } from "react-native";

const Task26= () => {

    const [d,setD] = useState('press a button to fetch the data');
    const [loading,setloading] = useState(false);
    const url = "https://api.ipify.org";

    function handleResponse(response) {
        return response.text(); 
    }

    function handleData(data) {
        setD(data);
    }

    function handleError(error) {
        setD("error fetching ip");
     }

    function fetchNonBlocking (){
        fetch("https://api.ipify.org/")
        .then(handleResponse)
        .then(handleData)
        .catch(handleError);
    }

    async function fetchBlocking() {
        setloading(true);
        try{
        let response = await fetch("https://api.ipify.org/");
        let data = await response.text();
        setD(data);
        }catch(error){
            setD("error fetching ip");
        }

        setloading(false);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{d}</Text>

            <Button title="Non Blocking Request" onPress={fetchNonBlocking} ></Button>
                <Button title="Blocking Request" onPress={fetchBlocking} disabled={loading}></Button>
                {loading && <ActivityIndicator size="large" color="blue"></ActivityIndicator>}
            

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white',
        margin:10
        
    }
})

export default Task26;