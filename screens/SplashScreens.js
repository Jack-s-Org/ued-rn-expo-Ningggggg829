import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Video } from "expo-av";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigation.replace("OnBoarding");
    }, 3500);

    return () => window.clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Video
        source={require("@/assets/Videos/logo.mp4")}
        style={styles.video}
        resizeMode="cover"
        isLooping
        shouldPlay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});

export default SplashScreen;
