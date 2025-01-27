import React from "react";
import { SafeAreaView,StyleSheet,View } from "react-native";

import Task16 from "./Tasks/Task16";

const App= () =>{
  return(
    <View style= {styles.container}>
      <Task16/>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;