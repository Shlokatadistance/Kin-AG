import Med from './med_add_home.js';
import React, { useRef } from "react";
import { View, Button, StyleSheet } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import EntypoIcon from "react-native-vector-icons/Entypo"; 
export default function Example() {
  const refRBSheet = useRef();

  return (
    <View
      style={{
        backgroundColor: "#000"
      }}
    >

    <EntypoIcon name = "address" color="white">
      <Button 
      size="large"
      title="I need to work" 
      onPress={() => refRBSheet.current.open()} />
      </EntypoIcon>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "black"
          },
          draggableIcon: {
            backgroundColor: "blue"
          }
        }}
      >
      </RBSheet>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonstyles:{
    marginTop: 2,
    marginLeft: 5,
    backgroundColor:'green',
  },
});