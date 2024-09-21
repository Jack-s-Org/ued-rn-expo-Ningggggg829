import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";

const NFCScreenStatic = ({ navigation }) => {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigation.navigate("NFC");
    }, 200);

    return () => window.clearTimeout(timer);
  }, [navigation]);

  return (
    <View>
      <LinearGradient
        colors={["#F8ECDC", "#E7D6C3"]}
        start={[100, 300]}
        end={[300, 30]}
      >
        <View
          style={{
            height: 844,

            alignItems: "center",
          }}
        >
          <ImageBackground
            source={require("@/assets/NFCStatic/NFCCircle.png")}
            style={{
              width: 358,
              height: 654,
              justifyContent: "center",
              alignItems: "center",
              resizeMode: "cover",
            }}
          >
            <Pressable
              style={{
                height: 40,
                width: 40,
                position: "absolute",
                top: 70,
                left: 20,
                zIndex: 1,
              }}
              onPress={() => {
                navigation.replace("Main", { screen: "Home" });
              }}
            >
              <Image
                source={require("@/assets/NFCData/backButton.png")}
                style={{
                  width: 40,
                  height: 40,
                }}
              ></Image>
            </Pressable>
          </ImageBackground>
          <ImageBackground
            source={require("@/assets/NFCStatic/NFCCard.png")}
            style={{
              width: 342,
              height: 322,
              justifyContent: "center",
              alignItems: "center",
              resizeMode: "cover",
              position: "absolute",
              bottom: 20,
            }}
          >
            <Image
              source={require("@/assets/NFCStatic/ScanIcon.png")}
              style={{ width: 43, height: 43 }}
            ></Image>
            <View style={{ width: 222, alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: "Montserrat-Medium",
                  fontSize: 24,
                  color: "#F36244",
                }}
              >
                NFC Scan
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "Montserrat-Light",
                  fontSize: 12,
                  color: "#404040",
                }}
              >
                Hold your phone near the appliance's NFC tag to start scanning
              </Text>
            </View>
          </ImageBackground>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NFCScreenStatic;
