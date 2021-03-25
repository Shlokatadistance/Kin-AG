import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, Image } from 'react-native';
import {
  DraweContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

const MyComponent = () => (
 <Appbar style={styles.bottom}>
   <Appbar.Action style={styles.menu}
     icon="menu"
     onPress={() => alert('Pressed Menu')}
    />
    <Appbar.Action style={styles.plus} icon="plus" onPress={() => alert('Pressed Plus')} />
    <Image style={styles.imagest} source={require('./Jimmy.jpeg')} />
    <Text style={styles.texts}> Elon Musk </Text>

    </Appbar>
 );

export default MyComponent

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'white',
    borderBottomColor: 'white',
    borderBottomWidth:StyleSheet.hairlineWidth,
    shadowColor: '#000',
    shadowOpacity : 0.18,
    shadowOffset:{
      width:0,
      height:1,
    },
    shadowRadius: 1.00,
    elevation:1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 50,
    height: 100,
  },
  plus:{
    position: 'absolute',
    left:350,
    top : 50,
  },
  menu:{
    position:'absolute',
    right:350,
    top : 50,
  },
  texts:{
    position: 'absolute',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    left: 150,
    fontSize: 20,
    top : 60,
    textAlign: "center",

  },
  imagest:{
    position: 'absolute',
    top : 0,
    left: 180,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height:50,
    borderRadius:50/2,
  },

});