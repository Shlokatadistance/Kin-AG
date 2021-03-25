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

const pandol = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon3RowRow}>
        <View style={styles.icon3Row}>
          <EntypoIcon name="address" style={styles.icon3}></EntypoIcon>
          <View style={styles.iconRowColumn}>
            <View style={styles.iconRow}>
              <EntypoIcon name="add-to-list" style={styles.icon}></EntypoIcon>
              <View style={styles.icon4Column}>
                <IoniconsIcon
                  name="ios-person"
                  style={styles.icon4}
                ></IoniconsIcon>
                <TextInput
                  placeholder="Shlok Sinha"
                  style={styles.textInput3}
                ></TextInput>
              </View>
              <FeatherIcon name="plus" style={styles.icon2}></FeatherIcon>
            </View>
            <View style={styles.rect3}></View>
            <View style = {{height: 0.25,marginLeft: -70,width : '60%',marginTop:50,borderWidth:0.5, borderRadius:500,borderColor:'black',transform: [{ scaleX: 10 }, { scaleY: 1 }]}} />
            <View style={styles.nextRow}>
              <TouchableOpacity style={styles.next}>
                <Text style={styles.back}>Back</Text>
              </TouchableOpacity>
              <View style={styles.nextStack}>
                <Text style={styles.loremIpsum3}></Text>
              </View>
            </View>
            <Text style={styles.panadol}>Panadol</Text>
            <View style={styles.loremIpsum4Stack}>
              <Text style={styles.loremIpsum4}></Text>
              <TextInput
                placeholder="Dosage (i.e mg)"
                style={styles.textInput}
              ></TextInput>
            </View>
            <TextInput
              placeholder="Unit"
              style={styles.placeholder}
            ></TextInput>
            <TextInput
              placeholder="Quantity Left"
              style={styles.textInput2}
            ></TextInput>
            <Text style={styles.loremIpsum2}></Text>
            <View style={styles.rect2}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000",
    width: 0,
    height: 0
  },
  icon3: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginTop: 53
  },
  icon: {
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
  textInput3: {
    fontFamily: "roboto-700",
    fontWeight: "bold",
    color: "rgb(0,0,0)",
    height: 27,
    width: 146,
    fontSize: 25,
    backgroundColor: "rgba(15,15, 15,0)"
  },
  icon4Column: {
    width: 146,
    marginLeft: 75,
    marginBottom: 5
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 41,
    width: 40,
    marginLeft: 70,
    marginTop: 30
  },
  iconRow: {
    height: 76,
    flexDirection: "row",
    marginLeft: 14,
    marginRight: 31
  },
  rect3: {
    width: 500,
    height: 3,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 11
  },
  next: {
    height: 22,
    width: 40,
    borderWidth: 1,
    borderColor: "#000000",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(15,15, 15,0)",
    borderRadius: 19
  },
  back: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 3,
    marginLeft: 5
  },
  loremIpsum3: {
    top: 13,
    left: 10,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  nextStack: {
    width: 40,
    height: 22,
    marginLeft: 262
  },
  nextRow: {
    height: 22,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 11,
    marginRight: 21
  },
  panadol: {
    fontFamily: "roboto-700",
    color: "#121212",
    height: 100,
    width: 320,
    fontSize: 80,
    marginTop: 36,
    marginLeft: 11
  },
  loremIpsum4: {
    top: 0,
    left: 18,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  textInput: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 39,
    width: 343,
    textAlign: "center",
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#000000"
  },
  loremIpsum4Stack: {
    width: 343,
    height: 39,
    marginTop: 62,
    marginLeft: 14
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 38,
    width: 199,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(255,255,255,1)",
    textAlign: "center",
    borderRadius: 23,
    marginTop: 15,
    marginLeft: 14
  },
  textInput2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 185,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 56,
    marginTop: 21,
    marginLeft: 14,
  },
  loremIpsum2: {
    fontFamily: "sintony-regular",
    color: "#121212",
    height: 0,
    width: 0,
    marginTop: 176
  },
  rect2: {
    width: 420,
    height: 3,
    backgroundColor: "rgba(0,0,0,1)",
    marginTop: 146
  },
  iconRowColumn: {
    width: 375,
    marginLeft: 192
  },
  icon3Row: {
    flexDirection: "row",
    marginTop: 42,
    marginBottom: 26
  },
  image: {
    flex: 1,
    marginRight: 376,
    marginLeft: -376
  },
  icon3RowRow: {
    height: 810,
    flexDirection: "row",
    marginLeft: -231,
    marginRight: -374
  }
});

export default pandol;
