import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from 'react-native';

import { firebase } from './config';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const DisplayBookMark = ({ navigation }) => {
  const [dis, setDis] = useState([]);
  const user = firebase.auth().currentUser;
  const id = user.uid;

 
const UpdateSongs = (id, name, Artist,year, songLink) =>{
  navigation.navigate("Update",{idz:id, pname:name,  artist:Artist,pyear:year, psongLink:songLink} )
}



  useEffect(() => {
    firebase
      .firestore()
      .collection('Songs')
      .doc(id)
      .collection('TRACKS')
      .onSnapshot((snapshot) => {
        const dis = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDis(dis);
      });
  }, []);

  const handleDelete = (load) => {
    firebase
      .firestore()
      .collection('Songs')
      .doc(id)
      .collection('TRACKS')
      .doc(load)
      .delete();
  };

  //

  const displ = dis.map((delt) => {
    return (
      <View style={{ flexDirection: 'row', borderWidth: 1, paddingTop: 5 }}>
        <View style={styles.text}>
          <Text style={{ margin: 3, fontWeight: 'bold' }}>
            {delt.name} by {delt.Artist}
          </Text>
          <Text style={{ margin: 3, fontWeight: 'bold' }}>
            Year Released:{delt.year}
          </Text>
          <TouchableOpacity>
            <Text
              style={{ color: 'blue' }}
              >
              Click To Download
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleDelete(delt.id)}>
            <Text style={styles.x}><AntDesign name="delete" size={22} color="black" /></Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>UpdateSongs(delt.id, delt.name,delt.Artist, delt.year,delt.songLink)} style={styles.i}><MaterialIcons name="update" size={22} color="black" /></TouchableOpacity>
        </View>
      </View>
    );
  });
  return (
    <View style={styles.container}>
      <View style={styles.ll}>
        <View style={styles.head}>Bookmark List</View>
        <View style={styles.t}>{displ}</View>
      </View>
    </View>
  );
};
export default DisplayBookMark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  i:{
    marginTop:30
  },
  x: {
   
    borderRadius: 25,
    color: '#fff',
    height: 20,
    width: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  t: {
    overflowY: 'scroll',
    height: 500,
    backgroundColor: '#C9CCD5',
    paddingRight: 10,
   
  },
  head: {
    backgroundColor: 'black',
    color: '#fff',
    textAlign: 'center',
    height: 30,
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 500,
  },
  ll: {
    height: 550,
    backgroundColor: '#C9CCD5',
    width: 300,
    paddingLeft: 10,
  },
  text: {
    width: 230,
    padding: 10,
  },
});
