import React from "react";
import { SafeAreaView,StyleSheet,View } from "react-native";


import Task16 from "./Tasks/Task16";
import Task17 from "./Tasks/Task17";
import Task18 from "./Tasks/Task18";
import Task19 from "./Tasks/Task19";
import Task20 from "./Tasks/Task20";
import Task21 from "./Tasks/Task21";
import Task22 from "./Tasks/Task22";
import Task23 from "./Tasks/Task23";
import Task24 from "./Tasks/Task24";
import Task25 from "./Tasks/Task25";
import Task26 from "./Tasks/Task26";
import Task27 from "./Tasks/Task27";
import Task28_29_30_31 from "./Tasks/Task28_29_30_31";
import Task32 from "./Tasks/Task32";

const App= () => {
  return(
    <View style= {styles.container}>
    {/* <Task16></Task16> */}
    {/* <Task17></Task17> */}
    {/* <Task18></Task18> */}
    {/* <Task19></Task19> */}
    {/* <Task20></Task20> */}
    {/* <Task21></Task21> */}
    {/* <Task22></Task22> */}
    {/* <Task23></Task23> */}
    {/* <Task24></Task24> */}
    {/* <Task25></Task25> */}
    {/* <Task26></Task26> */}
    {/* <Task27></Task27> */}
    {/* <Task28_29_30_31></Task28_29_30_31> */}
    <Task32></Task32>    
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