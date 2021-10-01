import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from 'react-native';

import { firebase } from './config';
const BookMark = ({ navigation }) => {
  const [name, setName] = useState('');
  const [Artist, setArtist] = useState('');
  const [year, setYear] = useState('');
  const [songlink, setSonglink] = useState('');

  const Myinfo = () => {
    navigation.navigate('DisplayBookMark');
  };

  const create = () => {
    let n = firebase.firestore();
    const user = firebase.auth().currentUser;
    const id = user.uid;
    n.collection('Songs')
      .doc(id)
      .collection('TRACKS')
      .add({ name, Artist, year, songlink });
    alert('Songs succesfully added ');
    setArtist('');
    setYear('');
    setName('');
    setSonglink('');
  };

  return (
    <View style={styles.all}>
      <View style={styles.myBook}>
        <View style={styles.left}>
          <View style={styles.form}>
            <Text style={styles.head}>Music Bookmarks</Text>
            <Text style={styles.text}> Track</Text>
            <TextInput
              placeholder="Songs name....."
              style={styles.tex}
              value={name}
              onChangeText={(name) => setName(name)}></TextInput>
            <Text style={styles.text}> Artist</Text>
            <TextInput
              placeholder="name of artist....."
              style={styles.tex}
              value={Artist}
              onChangeText={(e) => setArtist(e)}></TextInput>
            <Text style={styles.text}> Year</Text>
            <TextInput
              placeholder="Songs year....."
              style={styles.tex}
              value={year}
              onChangeText={(year) => setYear(year)}></TextInput>
            <Text style={styles.text}> Songs Link</Text>
            <TextInput
              placeholder="Songs link....."
              style={styles.tex}
              value={songlink}
              onChangeText={(song) => setSonglink(song)}></TextInput>
            <View style={styles.l}>
              <TouchableOpacity onPress={() => create()}>
                <Text style={styles.button}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Myinfo()}>
                <Text style={styles.button}>View Songs</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.lt}></View>
      </View>
      <View></View>
    </View>
  );
};
export default BookMark;

const styles = StyleSheet.create({
  all: {
      
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  
  },

  l: {
    flexDirection: 'row',
  },
  left: {
    alignItems: 'center',
    justifyContent: 'center',

    height: 800,
    borderRadius: 10,
    paddingTop: 10,
    width: 500,
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#C9CCD5',
    paddingRight: 10,
    paddingLeft: 10,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    margin: 10,
    fontWeight: 'bold',
  },
  tex: {
    alignItems: 'center',
    justifyContent: 'center',
    
    padding: 5,
    backgroundColor: 'white',
    borderWidth: 1,
    width: 270,
    height: 30,
    borderRadius: 10,
  },
  head: {
    color: '#fff',
      backgroundColor: 'black',
    fontWeight: 700,
    fontSize: 25,
    textAlign: 'center',
      width: 300,
  },
  button: {
    marginTop: 20,
    textAlign: 'center',
    backgroundColor: '#61dafb',
    width: 130,
    marginLeft: 20,
    borderBottomColor: 'black',
    borderRadius: 5,
    height: 25,
    fontWeight: 600,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    marginBottom: 20,
  },
});
