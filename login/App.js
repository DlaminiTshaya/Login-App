import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp  from "./components/SignUp"
import Login from './components/Login';
import BookMark from './components/BookMark';
import DisplayBookMark from './components/DisplayBookMark';
import Update from "./components/Update"
const Stack = createStackNavigator();
const App=() =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="BookMark" component={BookMark} />
        <Stack.Screen name="DisplayBookMark" component={DisplayBookMark} />
         <Stack.Screen name="Update" component={Update} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
