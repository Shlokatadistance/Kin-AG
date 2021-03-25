//To add a background image to this gheader, I used headerBackground, one thing to remember is that it is actually the bacgkorund 
// of the header, so backgrouncColor by utself does not change the color of the header, it only changes the color of the image
//To get the color to the entire header, you need to use flex : 1

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Appbar } from 'react-native-paper';
import { StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RBSheet from "react-native-raw-bottom-sheet";
import {useRef} from 'react';
import {DrawerContent} from './CustomDrawer.js';
import Pand from './med_add_home.js';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function MyComponent ({navigation}) {
  return(


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
};
const refRB = () => {
  return(
  <RBSheet
        ref={RBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
      <Pand/>
      </RBSheet>
      );
};


const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const NavStack  = createStackNavigator();



const HomeStackScreen = ({navigation}) => {
  const refRBSheet = useRef();

  return(

      <HomeStack.Navigator screenOptions = {{    
        headerStyle:{
          backgroundColor: 'white',
          height: 120,



        },
        headerTitleStyle:{
          fontWeight: 'bold',
          top : 15,
          fontSize: 20,
          backgroundColor: 'white'
        },
        headerPosition:{
          top : 100,
          height: 200,
        },
        headerTintColor:{
          backgroundColor: 'white',

        }
      }}>
      <HomeStack.Screen name = 'Home' component = {HomeScreen} options ={{
        title: 'Erwin Schrodinger',
        headerLeft: () => (
          <Icon.Button name='ios-menu' size={30} color='black' backgroundColor = 'white' top = {15} 
           onPress={() => navigation.openDrawer()}> </Icon.Button>
          ),
          headerRight: () => (
          <View>
          <Icon.Button name='ios-add' size={30} color='black' backgroundColor='white' top = {15}
          onPress={() => refRBSheet.current.open()}/> 
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={true}
          height = {750}
          customStyles={{
            wrapper: {
              backgroundColor: "transparent",
              height : 600
            },
            draggableIcon: {
              backgroundColor: "#000"
            }
          }}
        >
        <Pand/>
        </RBSheet>
        </View>
          ),
          
          headerBackground: () => (
          <View style={styles.newer}>
          <Image style={styles.imagesNEW} source={require('./Jimmy.jpeg')}  /> 
          </View>
          ),
          
      }} />
      </HomeStack.Navigator>

);
};

export default function App() {
  return (
    <NavigationContainer>
          <Drawer.Navigator drawerContent = {props => <DrawerContent {...props} />} >
  
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Woah" component={MyComponent}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

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
  newer:{
    backgroundColor: 'white',
    flex:1,
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
  imagesNEW: {
    position: 'absolute',
    //resizeMode: 'contain',
    backgroundColor: 'white',
    top : 35,
    marginLeft: 175,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50/2,
  },

});
