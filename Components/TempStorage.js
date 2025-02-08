import AsyncStorage from "@react-native-async-storage/async-storage";

const mykey = '@osama-data';

export async function saveData (data) {
    try{
    await AsyncStorage.setItem(mykey,JSON.stringify(data))
    }catch(e){
        console.error("Error saving data:",e);
    }
};

export async function getData (){
    try{
        const val = await AsyncStorage.getItem(mykey);
        if(val != null)
            return JSON.parse(val);
        return null;

    }catch(e){
        console.error("Error getting data:",e);
        return null;
    }
};
