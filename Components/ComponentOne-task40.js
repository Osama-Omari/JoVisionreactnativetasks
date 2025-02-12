import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class ComponentOne extends Component{
     handleText  = (newText) =>  {
        this.props.setText(newText);
    };

    render(){
        return(
            <View style={styles.container}>
                <TextInput
                style={styles.input}
                value={this.props.text}
                onChangeText={this.handleText}
                placeholder='Type here...'>
                </TextInput>
            </View>
        )
    }
}

const mapStateToProps = (state) =>({
    text: state.textState.text
});

const mapDispatchToProps = (dispatch)=>({
    setText: (text) => dispatch({ type:'SET_TEXT' , payload: text})
});


const styles = StyleSheet.create({
    container: { 
        padding: 20
     },
    input: {
      borderWidth: 1,
      borderRadius: 10,
      color:'gray'
    },
});

export default connect(mapStateToProps,mapDispatchToProps)(ComponentOne);