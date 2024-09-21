import * as React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Video, ResizeMode } from "expo-av";

const ARVideo = ({ videoSource }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  let videoToPlay;
  switch (videoSource) {
    case "cleaning":
      videoToPlay = require("@/assets/Videos/ARCleaning.mp4");
      break;
    case "fire":
      videoToPlay = require("@/assets/Videos/ARoverheat.mp4");
      break;
    case "spoonfork":
      videoToPlay = require("@/assets/Videos/ARMetal.mp4");
      break;
    default:
      videoToPlay = require("@/assets/Videos/ARdefault.mp4");
  }

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        source={videoToPlay}
        style={styles.video}
        resizeMode={ResizeMode.COVER} // Adjust to your preference
        shouldPlay
        isLooping={true} // Play without looping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />

      {/* Play/Pause button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() =>
            status?.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        >
          <Text style={styles.buttonText}>
            {status?.isPlaying ? "Pause" : "Play"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000", // Dark background for contrast
  },
  video: {
    width: 380, // Adjust video width
    height: 844, // Adjust video height
    marginTop: 800,
  },
  buttonContainer: {
    marginTop: 20,
  },
  controlButton: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: "#ff6600", // Orange button to match your app style
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ARVideo;
