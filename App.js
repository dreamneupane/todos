import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import DataProvider from './src/providers/DataProvider';
import AppNavigation from './src/navigation/AppNavigaton';

export default function App() {
  return (
      <AppNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#809090',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:10

  },
  button:{
    borderRadius:5
  }
});
