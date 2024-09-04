import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const HistoryScreen = ({ navigation }) => {
  return (
    <View style={{ height: 844, width: 390 }}>
      <LinearGradient
        colors={["#F8ECDC", "#E7D6C3"]}
        start={[100, 300]}
        end={[300, 30]}
      >
        <View style={{ height: 844, width: 390 }}>
          <ImageBackground
            source={require("@/assets/History/HistoryDeco.png")}
            style={{ width: 393, height: 274, marginTop: 20 }}
          >
            <Image
              style={styles.Profilepic}
              source={require("@/assets/HomeScreen/Profilepicture.jpg")}
            ></Image>
            <View style={{ marginTop: 50, marginLeft: 28 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-Bold",
                  fontSize: 32,
                  color: "#404040",
                }}
              >
                Your{" "}
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-Bold",
                  fontSize: 32,
                  color: "#F36244",
                }}
              >
                History
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
  Profilepic: {
    width: 50,
    height: 50,
    borderRadius: 100,
    position: "absolute",
    right: 60,
    top: 60,
    border: 0.5,
    borderColor: "#877571",
  },
});

export default HistoryScreen;
