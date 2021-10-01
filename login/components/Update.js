import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  CheckBox,
} from 'react-native';

import { UpdateBookmark } from './BookMark';
import { firebase } from './config';
const Update = ({ route, navigation }) => {
  let { idz, artist, pname, psongLink, pyear } = route.params;

  const [name, setName] = useState(pname);
  const [Artist, setArtist] = useState(artist);
  const [year, setYear] = useState(pyear);
  const [songlink, setSonglink] = useState(psongLink);

  const Myinfo = () => {
    let n = firebase.firestore();
    const user = firebase.auth().currentUser;
    const id = user.uid;
    n.collection('Songs')
      .doc(id)
      .collection('TRACKS')
      .doc(idz)
      .update({ name: name, Artist: Artist, year: year, Songlink: songlink })
      .then(() => {
        alert('Succesfully updated ');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.all}>
      <View style={styles.myBook}>
        <View style={styles.left}>
          <View style={styles.form}>
            <Text style={styles.head}>Update</Text>
            <Text style={styles.text}> Track</Text>
            <TextInput
              placeholder="Songs name....."
              style={styles.tex}
              value={name}
              onChangeText={setName}></TextInput>
            <Text style={styles.text}> Artist</Text>
            <TextInput
              placeholder="name of artist....."
              style={styles.tex}
              value={Artist}
              onChangeText={setArtist}></TextInput>
            <Text style={styles.text}> Year</Text>
            <TextInput
              placeholder="Songs year....."
              style={styles.tex}
              value={year}
              onChangeText={setYear}></TextInput>
            <Text style={styles.text}> Songs Link</Text>
            <TextInput
              placeholder="Songs link....."
              style={styles.tex}
              value={songlink}
              onChangeText={setSonglink}></TextInput>
            <View style={styles.l}>
              <TouchableOpacity onPress={() => Myinfo()}>
                <Text style={styles.button}>New Updates</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    
      </View>
   
    </View>
  );
};
export default Update;
const styles = StyleSheet.create({
  all: {
     flex: 1,
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
    fontWeight: 700,
    fontSize: 25,
    textAlign: 'center',
    backgroundColor:"black",
    width:290
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
