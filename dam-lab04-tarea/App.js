import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/components/Home';

function vistaDetalles({ route }) {

  const { titulo, imagen, texto } = route.params
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize:30, marginBottom: 15 }}>{titulo}</Text>
      <Image style={{ width: 200, height: 200, marginBottom: 15}} source={{uri: imagen}}></Image>
      <Text style={{ fontSize: 20, width: 380 }}>{texto}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Lista" component={Home} />
        <Stack.Screen name="Detalles" component={vistaDetalles} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App