import RootNavigator from "./screens/RootNavigator";
import createIconSetFromIcoMoon from "@expo/vector-icons/createIconSetFromIcoMoon";
import "./gesture-handler";
import { View, Image } from "react-native";
import { useFonts } from "expo-font";
import VideoPlayer from "@/components/VideoPlayer";
import HomeScreen from "./screens/HomeScreen";

const Icon = createIconSetFromIcoMoon(
  require("@/assets/icomoon/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("@/assets/icomoon/icomoon.ttf"),
    "Montserrat-Alternates": require("@/assets/font/MontserratAlternates-Bold.ttf"),
    "Montserrat-Regular": require("@/assets/font/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("@/assets/font/Montserrat-SemiBold.ttf"),
    "Montserrat-Light": require("@/assets/font/Montserrat-Light.ttf"),
    "Montserrat-Medium": require("@/assets/font/Montserrat-Medium.ttf"),
    "Montserrat-Bold": require("@/assets/font/Montserrat-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RootNavigator />

    //     {/* <VideoPlayer /> */}
    //     {/* <Icon name="home" size={32} color="blue" />
    //   <Image source={require("@/assets/add.png")} /> */}
  );
}
// export default function App() {

// }
