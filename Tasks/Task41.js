import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screens from "../Components/ScreenComponent-Task41";



function Task41(){

    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    function CreateScreen(number){

       return function ScreenComponent (props) { <Screens {...props} route={{ params: {number} }}></Screens>}
    }

    function BottomTabs (){
        return(
        <Tab.Navigator>
            {[1,2,3,4].map((num) => (<Tab.Screen key={num} name={`Screen ${num}`} component={CreateScreen(num)}></Tab.Screen>))}
        </Tab.Navigator>
        )
    }


    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Task 41" component={BottomTabs} options={{ headerShown: false }} ></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )

    
}

export default Task41;