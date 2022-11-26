import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome</Text>
      <TouchableOpacity style={styles.button} title="Login" onPress={()=>navigation.navigate('Login')} ><Text>Login</Text></TouchableOpacity>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create(
  {
    container:
    {
      paddingTop:10,
      flex:1, 
      justifyContent:'space-between', 
      alignItems:"center"
    },
    button: {
      borderRadius:5,
      width:"80%",
      backgroundColor:'#6a51ae',
      paddingHorizontal:10,
      paddingVertical:15,
      alignItems:'center'
    }
  })
export default Welcome