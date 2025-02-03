import React, { useState } from 'react';
import { View, Text, Button, Image, Alert, StyleSheet } from 'react-native';

const Task27 = () => {
  const [selectedImage, setSelectedImage] = useState(require('../Resources/image1.jpeg')); 

  const handleImageSelection = () => {
    Alert.alert(
      "Pick an Image",
      "Choose 1, 2, or 3",
      [
        {
          text: "1",
          onPress: () => setSelectedImage(require('../Resources/image1.jpeg')), 
        },
        {
          text: "2",
          onPress: () => setSelectedImage(require('../Resources/image2.png')), 
        },
        {
          text: "3",
          onPress: () => setSelectedImage(require('../Resources/image3.jpeg')), 
        },
        { text: "Cancel", style: "cancel" },
      ],
      { cancelable: false } 
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an Image</Text>

      <Image source={selectedImage} style={styles.image} />

      <Button title="Pick Image" onPress={handleImageSelection} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'white'
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default Task27;
