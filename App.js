import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { HomeScreen } from './Pages/HomeScreen';
import { MovieScreen } from './Pages/MoviePages'
import { TvScreen } from './Pages/TvScreen';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Movie" component={MovieScreen} />
        <Stack.Screen name="TvShow" component={TvScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

