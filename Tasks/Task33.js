import React, { useState, useRef } from "react";
import Video from "react-native-video";
import { View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

function Task33() {
  const myref = useRef(null);
  const [isplaying, setisplaying] = useState(false);
  const [isstarted, setisstarted] = useState(false);
  const [time, settime] = useState(0);
  const [loading, setLoading] = useState(false);

  function PlayPause() {
    setisplaying(!isplaying);
    setisstarted(true);
  }

  function toggleProgress(data){
    settime(data.currentTime)
  }

  function toggleLoadStart(){
    setLoading(true);
  }

  function toggleLoad(){
    if(myref.current)
        myref.current.seek(time);
  }

  function toggleLoadEnd(){
    settime(0);
  }

  return (
    <View style={styles.container}>
      {!isplaying ? (
        <TouchableOpacity onPress={PlayPause}>
          <ImageBackground
            source={require('../Resources/qimage.jpg')}
            style={styles.video}
          >
          </ImageBackground>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={PlayPause} style={styles.video}>
          <Video
            source={require('../Resources/video1.mp4')}
            style={styles.video}
            resizeMode="contain"
            paused={!isplaying}
            ref={myref}
            onProgress={toggleProgress}
            onLoadStart={toggleLoadStart}
            onLoad={toggleLoad}
            onEnd={toggleLoadEnd}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 300,
    height: 200,
    backgroundColor: "black",
  },
});

export default Task33;
