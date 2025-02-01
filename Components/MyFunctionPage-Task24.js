import { View, Text, StyleSheet } from "react-native";
import React, { useState, forwardRef, useImperativeHandle } from "react";

const MyFunctionPage = forwardRef(function MyFunctionPage(props, ref) {
  const [txt, setTxt] = useState('');

  function updateText(newText) {
    setTxt(newText);
  }

  useImperativeHandle(ref, function () {
    return {
      updateText: updateText
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{txt}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    color: 'white',
  }
});

export default MyFunctionPage;
