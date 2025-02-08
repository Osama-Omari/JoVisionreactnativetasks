import React from "react";
import { Text,StyleSheet,View,ScrollView,RefreshControl} from "react-native";



function generateRandomWord(length) {
	let result = '';
	const characters = 'abcdefghijklmnopqrstuvwxyz';
	for (let i = 0; i < length; i++) {
    	result += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return result;
}

const randomWords = Array.from({ length: 100 }, function () {
        const min = 3;
        const max = 10;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return generateRandomWord(randomNumber);
});

function Task36 (){

    const [refreshing, setRefreshing] = React.useState(false);

    function handlRefresh(){
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        
    },2000);
}
    const onRefresh = React.useCallback(handlRefresh, []);

    return(
        <View style = {styles.container}>
            <ScrollView style= {styles.scrollView}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh}></RefreshControl>
            }>
                {randomWords.map((word,number)=>(
                    <Text key={number} style={styles.word}>
                        {number+1}. {word}
                    </Text>
                ))}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f4f4f4',
    },
    scrollView: {
      backgroundColor: '#ffffff',
      padding: 10,
      borderRadius: 10,
    },
    word: {
      fontSize: 18,
      paddingVertical: 5,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
});

export default Task36;