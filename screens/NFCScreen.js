import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "@/components/VideoPlayer";

const NFCScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigation.navigate("NFCData");
    }, 7300);

    return () => window.clearTimeout(timer);
  }, [navigation]);

  return <VideoPlayer />;
};

export default NFCScreen;
