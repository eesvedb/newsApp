
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";



const Stack = createNativeStackNavigator()

const App = ()  => {
 
  return (
   <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="News" component={HomeScreen} />
      <Stack.Screen name="News Detail" component={DetailsScreen} />
        </Stack.Navigator> 
   </NavigationContainer>

  );
};

export default App;
