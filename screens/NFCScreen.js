import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import VideoPlayer from "@/components/VideoPlayer";

const NFCScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("NFCData");
    }, 7300);

    return () => clearTimeout(timer);
  }, [navigation]);

  return <VideoPlayer />;
};

export default NFCScreen;
