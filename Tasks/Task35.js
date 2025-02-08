import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { saveData,getData } from '../Components/TempStorage';

function Task35 () {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');

    async function loadData() {
        const storedData = await getData();

        if(storedData != null){
            const savedTime = new Date(storedData.timestamp);
            const currentTime = new Date();
            const diff = (currentTime - savedTime) /1000;

            if(diff  < 60){
                setName(storedData.name);
                setAge(storedData.age);
                setCountry(storedData.country)
            }else{
                console.log("the data is old!");
            }
        }
        
    } 
    useEffect(()=>{
        loadData();


    }, []);

    async function handleSubmit() {
        if(!name || !age || !country){
            Alert.alert("Please fill all the fields");
            return;
        }
        const userData = {
            name,
            age,
            country,
            timestamp: new Date().toISOString(),
        };

        await saveData(userData);
        Alert.alert("The Data has saved sucessfully!")
            
        
    }

    return(
        <View>
            <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Enter your name"
      />

      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Enter your age"
        keyboardType="numeric"
      />

      <Text style={styles.label}>Country:</Text>
      <TextInput
        style={styles.input}
        value={country}
        onChangeText={setCountry}
        placeholder="Enter your country"
      />

      <Button title='Submit' onPress={handleSubmit}></Button>
        </View>
    )


}


const styles = StyleSheet.create({
    container:{
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input:{
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },

  label:{
    color:'grey',
    fontSize:20,
    marginBottom:20
  }

});

export default Task35;