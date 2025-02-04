import React, { useRef, useState } from 'react';
import { View, Text, Button, Image, Alert, StyleSheet, FlatList, Pressable, TextInput, Modal, Platform } from 'react-native';

function Task28_29_30_31() {
  const [images,setImages] = useState([
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
  ]);

  {/* Task 30 */}
  function removeItem(index){
    Alert.alert(
      "Remove Image",
      "Are you sure you want to remove the image?",
      [
        {text: "Cancel", style: "cancel"},
        {text:"OK" , onPress: () =>{
          const updatedImages = images.filter((_,i)=>i !== index);
          setImages(updatedImages);
        } }
      ]
    );
  }

  const myref = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputIndex, setInputIndex] = useState('');

  function handlePress(index) {
    Alert.alert(`You have selected image: ${index}`);
  }

  function keyExtractor(_, index) {
    return `image-${index}`;
  }
  {/* Task 31 */}
  function repeatimage(index){
    const newImage = images[index];
    const updatedImages = [...images];
    updatedImages.splice(index + 1, 0, newImage); 
    setImages(updatedImages);
  }

  function renderItem({ item, index }) {
    return (
      <View style={styles.imageWrapper}>
      <Pressable onPress={() => handlePress(index)} style={styles.imageContainer}>
        <Image source={item} style={styles.image} />
      </Pressable>
                              {/* Task 30  */}
      <Pressable onPress={()=>removeItem(index)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>X</Text>
      </Pressable>
                              {/* Task 31 */}
      <Pressable onPress={()=> repeatimage(index)} style={styles.repeatIconContainer} >
        <Text style={styles.repeatIconText}>↻</Text>
      </Pressable>
      </View>
    );
    
  }

  function handleScroll(index) {
    const numIndex = parseInt(index, 10);
    if (!isNaN(numIndex) && numIndex >= 0 && numIndex < images.length) {
      myref.current.scrollToIndex({ index: numIndex, animated: true });
    } else {
      Alert.alert(`Invalid index", "Please enter a valid index between 0 & ${images.length-1}`);
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
  },
  imageWrapper: {
    position: 'relative',
    marginHorizontal: 10,
  },
  deleteButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  repeatIconContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  repeatIconText: {
    color: 'white',
    fontSize: 18,
  },

});

export default Task28_29_30_31;
