import React from "react";
import { ImageBackground, Text, StyleSheet, View } from "react-native";

const Slide = ({ index, backgroundImage }) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.slide}
      resizeMode="cover"
    ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  slide: {
    width: 174,
    height: 222,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#877571",
    // transform: [{ rotateY: "45deg" }, { rotateZ: "0deg" }],
    // marginLeft: -20,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default Slide;
