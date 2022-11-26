import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Home  from '../screens/Home';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';


const Stack = createNativeStackNavigator();

const Screens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} options={{ title: 'My home', headerStyle:{backgroundColor:'#f4511e'},headerTintColor: '#fff' }} />
    </Stack.Navigator>
  )
}

export default Screens