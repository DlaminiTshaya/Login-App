import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { firebase } from "./config"

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Confirmpassword, setConfirmpassword] = useState('');
    const [name, setName] = useState('');

    const create = () => {
        let n = firebase.firestore()
        if(Confirmpassword !== password){
            alert("password doen't match")
        }else if(
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
               
                n.collection('user').doc(email).set({name,email,password,Confirmpassword})
                alert("Account succesfully created ")
              var user = userCredential.user;
            
            })
            .catch((error) => {
              console.log(error)
            })
          
        );
    
        setPassword("")
         setEmail("")
         setName("")
        setConfirmpassword("")
    }


    return (
        <View style={styles.container}>
        <View style={styles.body}>
        <View style={styles.log}>Sign Up</View>
            <TextInput style={styles.input} placeholder="Full Name..." value={name} onChangeText={(name) => setName(name)} />
            <TextInput style={styles.input} placeholder="Email..." value={email} onChangeText={(email) => setEmail(email)} />
            <TextInput style={styles.input} placeholder="PassWord..." value={password} secureTextEntry={true} onChangeText={(pass) => setPassword(pass)} />
            <TextInput style={styles.input} placeholder="Confirm Password..."  value={Confirmpassword} secureTextEntry={true} onChangeText={(con) => setConfirmpassword(con)}/>
            <TouchableOpacity style={styles.button} onPress={() => create()}>
                Create Account
            </TouchableOpacity>
          </View>
        </View>
    )

}
export default SignUp;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        marginTop: 10,
         width: 280,
        height: 40,
        padding: 10,


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
    body:{
      marginTop:30,
       height:450,
    backgroundColor: '#C9CCD5',
    width:300,
    paddingLeft:10
    },
    button: {
        marginTop: 10,
        backgroundColor: "blue",
        width: 180,
        height: 40,
        fontSize: 20,
        padding: 10,
        paddingLeft: 26,
        color: "white",
        marginLeft:60
       
    
    },


})