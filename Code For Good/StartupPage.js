import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

function StartupPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("ClientsPage")}
          style={styles.button1}
        >
          <Text style={styles.login}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.register}>Register</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require("../assets/images/nhcslogo-grey-text_with-data-protection-mark2.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect: {
    width: 375,
    height: 465,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(126,211,33,1)",
    borderRadius: 36,
    marginTop: 346
  },
  button1: {
    width: 330,
    height: 65,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(121,60,174,1)",
    borderRadius: 36,
    marginTop: 126,
    marginLeft: 18
  },
  login: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 25,
    width: 219,
    fontSize: 30,
    marginTop: 19,
    marginLeft: 111
  },
  button: {
    width: 330,
    height: 65,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(109,58,157,1)",
    borderRadius: 36,
    marginTop: 75,
    marginLeft: 18
  },
  register: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    height: 25,
    width: 219,
    fontSize: 30,
    marginTop: 19,
    marginLeft: 111
  },
  image: {
    width: 200,
    height: 200,
    marginTop: -727,
    marginLeft: 88
  }
});

export default StartupPage;
