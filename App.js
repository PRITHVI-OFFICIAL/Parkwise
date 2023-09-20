import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Gismap from './screens/Gismap';
import TotalHouse from './screens/TotalHouse';
import Leakage from './screens/Leakage';




export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gismap" component={Gismap} />
        <Stack.Screen name="TotalHouse" component={TotalHouse} />
        <Stack.Screen name="Leakage" component={Leakage} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

