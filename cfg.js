import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Svg, { Ellipse } from "react-native-svg";

function ClientScheduling(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Svg viewBox="0 0 56.25 52.23" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="rgba(230, 230, 230,1)"
            cx={28}
            cy={26}
            rx={28}
            ry={26}
          ></Ellipse>
        </Svg>
      </View>
      <View style={styles.scrollArea}>
        <ScrollView
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.legalAidStack}>
            <Text style={styles.legalAid}>
              Legal Aid:{"\n"}Status: In Prpogress{"\n"}Start Date{"\n"}End Date{" "}
              {"\n"}Notes
            </Text>
            <Text style={styles.legalAid2}>
              Legal Aid:{"\n"}Status: In Prpogress{"\n"}Start Date{"\n"}End Date{" "}
              {"\n"}Notes
            </Text>
          </View>
          <View style={styles.rect2Stack}>
            <View style={styles.rect2}></View>
            <View style={styles.rect3}></View>
          </View>
          <View style={styles.legalAid1Stack}>
            <Text style={styles.legalAid1}>
              Legal Aid:{"\n"}Status: In Prpogress{"\n"}Start Date{"\n"}End Date{" "}
              {"\n"}Notes
            </Text>
            <View style={styles.rect4}></View>
          </View>
          <View style={styles.legalAid3Stack}>
            <Text style={styles.legalAid3}>
              Legal Aid:{"\n"}Status: In Prpogress{"\n"}Start Date{"\n"}End Date{" "}
              {"\n"}Notes
            </Text>
            <View style={styles.rect5}></View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 375,
    height: 78,
    backgroundColor: "rgba(49,136,24,1)",
    marginTop: 119
  },
  ellipse: {
    width: 56,
    height: 52,
    marginTop: 14,
    marginLeft: 21
  },
  scrollArea: {
    width: 324,
    height: 502,
    backgroundColor: "rgba(230, 230, 230,1)",
    marginTop: 52,
    marginLeft: 21
  },
  scrollArea_contentContainerStyle: {
    height: 630,
    width: 324
  },
  legalAid: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 149,
    width: 269,
    left: 0
  },
  legalAid2: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 149,
    width: 269,
    left: 0
  },
  legalAidStack: {
    width: 269,
    height: 149,
    marginTop: 91,
    marginLeft: 17
  },
  rect2: {
    top: 0,
    left: 0,
    width: 324,
    height: 1,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  rect3: {
    top: 0,
    left: 0,
    width: 324,
    height: 1,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect2Stack: {
    width: 324,
    height: 2
  },
  legalAid1: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 149,
    width: 269,
    left: 17
  },
  rect4: {
    top: 128,
    left: 0,
    width: 324,
    height: 3,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  legalAid1Stack: {
    width: 324,
    height: 149,
    marginTop: 50
  },
  legalAid3: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 149,
    width: 269,
    left: 17
  },
  rect5: {
    top: 148,
    left: 0,
    width: 324,
    height: 1,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "#000000"
  },
  legalAid3Stack: {
    width: 324,
    height: 150,
    marginTop: 39
  }
});

export default ClientScheduling;
