import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";

const panadol =(props) => {
  return (
    <View style={styles.container}>
      <View style={styles.rect1}></View>
      <View style={styles.icon3Row}>
        <EntypoIcon name="add-to-list" style={styles.icon3}></EntypoIcon>
        <View style={styles.icon4Column}>
          <IoniconsIcon name="ios-person" style={styles.icon4}></IoniconsIcon>

          <TextInput
            placeholder="Shlok Sinha"
            style={styles.textInput1}
          ></TextInput>
        </View>
        <View style={styles.icon1Stack}>
          <FeatherIcon name="plus" style={styles.icon2}></FeatherIcon>
        </View>
      </View>
      <View style = {{height: 0.25,marginLeft: -70,width : '60%',marginTop:50,borderWidth:0.5, borderRadius:500,borderColor:'black',transform: [{ scaleX: 10 }, { scaleY: 1 }]}} />
      <View style={styles.next2Row}>
        <TouchableOpacity style={styles.next2}>
          <Text style={styles.back1}>Back</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.next3Row}>
        <TouchableOpacity style={styles.next2}>
        <Text style={styles.back1}> Next </Text>
      </TouchableOpacity>
      </View>
      <TextInput placeholder="Pan" style={styles.textInput2}></TextInput>
      <TextInput
        placeholder="Dosage Strength (i.e. 100)"
        style={styles.placeholder1}
      ></TextInput>
      <View style={styles.textInput3Stack}>
        <TextInput
          placeholder="Unit (i.e mg)"
          keyboardType="number-pad"
          style={styles.textInput3}
        ></TextInput>
        <FeatherIcon name="chevron-down" style={styles.icon5}></FeatherIcon>
      </View>
      <Text style={styles.panadol1}>Tell us more about it</Text>
      <View style={styles.textInput4Stack}>
        <TextInput
          placeholder="Type"
          dataDetector="all"
          style={styles.textInput4}
        ></TextInput>
        <FeatherIcon name="chevron-down" style={styles.icon8}></FeatherIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect1: {
    width: 450,
    height: 1,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 129,
    marginLeft: 1
  },
  icon3: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 46,
    width: 40,
    marginTop: 30
  },
  icon4: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    marginLeft: 40
  },
  textInput1: {
    fontFamily: "roboto-700",
    color: "rgba(0,0,0,1)",
    height: 27,
    width: 146,
    fontSize: 20,
    backgroundColor: "rgba(15,15, 15,0)"
  },
  icon4Column: {
    width: 146,
    marginLeft: 75,
    marginBottom: 5
  },
  icon1: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    position: "absolute",
    top: 0,
    left: 0
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    position: "absolute",
    top: 0,
    left: 40
  },
  icon1Stack: {
    width: 40,
    height: 41,
    marginLeft: 29,
    marginTop: 30
  },
  icon3Row: {
    height: 76,
    flexDirection: "row",
    marginTop: -88,
    marginLeft: 30,
    marginRight: 30
  },
  next2: {
    width: 41,
    height: 22,
    borderWidth: 1,
    borderColor: "#0178ff",
    borderRadius: 17
  },
  back1: {
    fontFamily: "Arial",
    color: "#121212",
    marginTop: 3,
    marginLeft: 5
  },
  next1: {
    height: 22,
    width: 40,
    borderWidth: 1,
    borderColor: "#0178ff",
    backgroundColor: "rgba(15,15, 15,0)",
    borderRadius: 19,
    marginLeft: 264
  },
  next2Row: {
    height: 22,
    flexDirection: "row",
    marginTop: 68,
    marginLeft: 10,
    marginRight: 20
  },
  next3Row: {
    height: 22,
    flexDirection: "row",
    marginTop: -19,
    marginLeft: 350,
    marginRight: 10,
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 39,
    width: 343,
    textAlign: "left",
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#0178ff",
    marginTop: 42,
    marginLeft: 12
  },
  placeholder1: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 38,
    width: 330,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(255,255,255,1)",
    textAlign: "center",
    borderRadius: 23,
    marginTop: 87,
    marginLeft: 12
  },
  textInput3: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 203,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 56
  },
  icon5: {
    top: 4,
    left: 168,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  textInput3Stack: {
    width: 203,
    height: 33,
    marginTop: 18,
    marginLeft: 17
  },
  panadol1: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 36,
    width: 333,
    fontSize: 35,
    marginTop: -151,
    marginLeft: 12,
    fontWeight: 'bold',
  },
  textInput4: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 203,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 56
  },
  icon8: {
    top: 4,
    left: 169,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 25
  },
  textInput4Stack: {
    width: 203,
    height: 33,
    marginTop: 144,
    marginLeft: 15
  },
  lineStyle: {

    borderWidth: 0.2,
    borderColor:'black',
    margin:1,
  },
});

export default panadol;
