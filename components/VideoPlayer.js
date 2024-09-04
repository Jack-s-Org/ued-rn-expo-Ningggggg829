import * as React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Video, ResizeMode } from "expo-av";

export default function VideoPlayer() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={require("@/assets/Videos/NFCScanning.mp4")}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER} //Contain, cover, strech
        shouldPlay={true} //autoplay
        isLooping={false} //looping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying
              ? video.current.pauseAsync()
              : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

//Create STYLIING CSS
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },

  video: {
    height: "100%", // style={StyleSheet.absoluteFill} - shortcut to make video as background
  },
});
