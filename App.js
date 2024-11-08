import React from 'react';
import { View, Text, Button, Alert, Image, TouchableHighlight, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Bienvenido/a!</Text>
    </View>
  );
}

function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo_municipalidad.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Pantalla Principal</Text>
      
      {/* Botón estándar */}
      <Button
        title="Mostrar Alerta"
        onPress={() => Alert.alert('Alerta', 'Has presionado el botón estándar')}
      />

      {/* Botón personalizado con TouchableHighlight */}
      <TouchableHighlight
        style={styles.highlightButton}
        onPress={() => Alert.alert('Alerta', 'Has presionado el botón personalizado con TouchableHighlight')}
        underlayColor="#DDDDDD"
      >
        <Text style={styles.buttonText}>Botón TouchableHighlight</Text>
      </TouchableHighlight>

      {/* Botón personalizado con Pressable e icono de Google */}
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#ddd' : '#2196F3',
          },
          styles.pressableButton,
        ]}
        onPress={() => Alert.alert('Alerta', 'Has presionado el botón con Pressable e icono')}
      >
        <Image
          source={require('./assets/google.png')}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Botón con Icono</Text>
      </Pressable>

      {/* Botón para navegar a la pantalla Home */}
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'Pantalla Principal' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  highlightButton: {
    backgroundColor: '#8e44ad',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  pressableButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
