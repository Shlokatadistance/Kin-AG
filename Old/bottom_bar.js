import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Text
} from "react-native";

function ToolDrug(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.rect}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ToolSchedule")}
            style={styles.button}
          >
            <Image
              source={require("./recent.png")}
              resizeMode="contain"
              style={styles.image2}
            ></Image>
            <Text style={styles.schedule}>Schedule</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ToolDashboard")}
            style={styles.button2}
          >
            <Image
              source={require("./dash.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <Text style={styles.dashboard}>Dashboard</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ToolDrug")}
            style={styles.button3}
          >
            <Image
              source={require("./pill.png")}
              resizeMode="contain"
              style={styles.image4}
            ></Image>
            <Text style={styles.drug}>Drug</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("ToolKindo")}
            style={styles.button4}
          >
            <Image
              source={require("./kindo.png")}
              resizeMode="contain"
              style={styles.image3}
            ></Image>
            <Text style={styles.kindo}>Kindo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 0.25,
    justifyContent : 'flex-end',
    top: 25,
    marginBottom: 0,
    bottom: 0,
  },
  rect: {
    width: 500,
    height: 64,
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 730,
    marginLeft: 80,
    marginRight: 3,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "black",
    shadowColor: '#000',
    shadowOpacity : 0.18,
    shadowOffset:{
      width:0,
      height:1,
    },
    shadowRadius: 1.00,
    elevation:1,

  },
  button: {
    width: 42,
    height: 43
  },
  image2: {
    width: 30,
    height: 30,
    marginLeft: 3
  },
  schedule: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 12,
    width: 94,
    fontSize: 10,
    marginTop: 1
  },
  button2: {
    width: 53,
    height: 49,
    marginLeft: 45
  },
  image: {
    width: 57,
    height: 30,
    marginLeft: 15,
    marginRight: 10,
  },
  dashboard: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 12,
    width: 94,
    lineHeight: 0,
    fontSize: 10,
    marginTop: 1,
    marginLeft: 15,
    marginRight: 10,
  },
  button3: {
    width: 42,
    height: 42,
    marginLeft: 51,
    marginTop: 1
  },
  image4: {
    width: 30,
    height: 30,
    marginLeft: 30,
    marginRight: 10,
  },
  drug: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 12,
    width: 94,
    fontSize: 10,
    marginLeft: 30,
    marginRight: 10,
    marginTop: 1,
  },
  button4: {
    width: 34,
    height: 43,
    marginLeft: 34
  },
  image3: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginLeft : 50,
  },
  kindo: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 12,
    width: 94,
    fontSize: 10,
    marginTop: 1,
    marginLeft: 50,
    marginRight : 10

  },
  buttonRow: {
    height: 49,
    flexDirection: "row",
    flex: 1,
    marginRight: 46,
    marginLeft: 28,
    marginTop: 10
  }
});

export default ToolDrug;
