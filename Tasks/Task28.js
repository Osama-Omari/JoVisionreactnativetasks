import React, { useRef, useState } from 'react';
import { View, Text, Button, Image, Alert, StyleSheet, FlatList, Pressable, TextInput, Modal, Platform } from 'react-native';

function Task28() {
  const images = [
    require('../Resources/image1.jpeg'),
    require('../Resources/image2.png'),
    require('../Resources/image3.jpeg'),
    require('../Resources/image4.jpeg'),
    require('../Resources/image5.jpeg'),
    require('../Resources/image6.jpeg'),
    require('../Resources/image7.jpeg'),
    require('../Resources/image8.jpeg'),
    require('../Resources/image9.jpeg'),
    require('../Resources/image10.jpeg')
  ];

  const myref = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputIndex, setInputIndex] = useState('');

  function handlePress(index) {
    Alert.alert(`You have selected image: ${index}`);
  }

  function keyExtractor(_, index) {
    return `image-${index}`;
  }

  function renderItem({ item, index }) {
    return (
      <Pressable onPress={() => handlePress(index)} style={styles.imageContainer}>
        <Image source={item} style={styles.image} />
      </Pressable>
    );
  }

  function handleScroll(index) {
    const numIndex = parseInt(index, 10);
    if (!isNaN(numIndex) && numIndex >= 0 && numIndex < images.length) {
      myref.current.scrollToIndex({ index: numIndex, animated: true });
    } else {
      Alert.alert("Invalid index", "Please enter a valid index between 0 and 9.");
    }
  }
                                    {/*Task 29  IMPORTANT NOTE*/}  
    {/* There was an issue with this taks , the Alert.prompt is only available on IOS,on android it won't appear.
        So after research i used a Platform.Os to check the device and handle the Android cases using the Modal and text input.*/}
  function scrollToImage() {
    if (Platform.OS === 'ios') {
      Alert.prompt(
        "Enter Image Index",
        "Enter the index of the image you want to scroll to:",
        [
          { text: "Cancel", style: "cancel" },
          { text: "OK", onPress: (index) => handleScroll(index) }
        ],
        "plain-text"    
      );
    } else {
      setModalVisible(true);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        ref={myref}
        data={images}
        horizontal
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      <Button title='Scroll to Image' onPress={scrollToImage} />

      {/* Modal for Android Input */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Enter Image Index:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              onChangeText={setInputIndex}
              value={inputIndex}
            />
            <Button title="OK" onPress={() => { handleScroll(inputIndex); setModalVisible(false); }} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  imageContainer: {
    marginHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    width: 100,
    textAlign: 'center',
  }
});

export default Task28;
