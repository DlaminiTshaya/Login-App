
import React, { useState } from 'react';

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { firebase } from "./config"

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert("Signed in")
        navigation.navigate("BookMark")
      })
      .catch((error) => {
        console.log(error)
        alert("You dont have account")
      });
      
     
    setEmail("")
    setPassword("")
  }
  return (
    <View style={styles.container}>
      
      <View style={styles.ll}>
      <View style={styles.log}>Login</View>
      <TextInput style={styles.input} placeholder="Email..." value={email} onChangeText={(email) => setEmail(email)} />
      <TextInput style={styles.input} placeholder="Password..." secureTextEntry={true}  value={password} onChangeText={(pass) => setPassword(pass)} />
      <TouchableOpacity onPress={() => login()} style={styles.o}><Text style={styles.button}> Login </Text></TouchableOpacity>
      <Text style={styles.text}>Do you have an Account?
        <TouchableOpacity style={styles.up} onPress={() => navigation.navigate("SignUp")}>
          Sign Up



        </TouchableOpacity>

      </Text>
      </View>
    </View>
  );
}
export default Login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  o:{
   
    alignItems: 'center',
    justifyContent: 'center',
  },
  ll:{
   
    height:450,
    backgroundColor: '#C9CCD5',
    width:300,
    paddingLeft:10
  },
  up: {
    fontSize: 20,
    fontWeight: 500,
    marginLeft: 5,
    color:"#2D46B9"
  },
  log:{
    
    backgroundColor:"black",
    color:"#fff",
    textAlign: 'center',
    height:30,
    marginBottom:100,
    fontSize: 25,
    fontWeight: 500,
  },
  input: {
    borderWidth: 1,
    marginTop: 10,
    width: 280,
    height: 40,
    padding: 10,
    cursor:"pointer"


  },
  button: {
    marginTop: 50,
    backgroundColor: "blue",
    width: 130,
    height: 30,
    fontSize: 20,
    
    color: "white",
    textAlign: 'center',

  },
  text: {
    textAlign: 'center',
    
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 500,
  }
});
