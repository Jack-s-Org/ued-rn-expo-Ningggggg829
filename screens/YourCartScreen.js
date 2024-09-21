import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SlideButton from "rn-slide-button";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AntDesign from "@expo/vector-icons/AntDesign";

const YourCartScreen = ({ navigation }) => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ height: 844, width: 390 }}>
        <LinearGradient
          colors={["#F8ECDC", "#E7D6C3"]}
          start={[100, 300]}
          end={[300, 30]}
        >
          <View style={{ height: 844, width: 390 }}>
            <ImageBackground
              source={require("@/assets/Yourcart/cartBG.png")}
              style={{ width: 360, height: 820 }}
            >
              <Pressable
                style={{
                  height: 40,
                  width: 40,
                  position: "absolute",
                  top: 50,
                  left: 20,
                  zIndex: 1,
                }}
                onPress={() => {
                  navigation.replace("MainTabs", { screen: "Home" });
                }}
              >
                <Image
                  source={require("@/assets/NFCData/backButton.png")}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </Pressable>
              <View
                style={{ marginTop: 90, marginLeft: 28, flexDirection: "row" }}
              >
                <View>
                  <Text
                    style={{
                      fontFamily: "Montserrat-Bold",
                      fontSize: 32,
                      color: "#404040",
                    }}
                  >
                    Your{" "}
                    <Text
                      style={{
                        fontFamily: "Montserrat-Bold",
                        fontSize: 32,
                        color: "#F36244",
                      }}
                    >
                      Cart
                    </Text>
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#F36244",
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 50,
                    borderWidth: 0.5,
                    borderColor: "#F4EFE9",
                    marginLeft: 120,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Montserrat-Bold",
                      fontSize: 24,
                      color: "#E2D5C2",
                    }}
                  >
                    1
                  </Text>
                </View>
              </View>
              <Image
                source={require("@/assets/Yourcart/frypan.png")}
                style={{
                  width: 222,
                  height: 222,
                  alignSelf: "center",
                  marginTop: 80,
                }}
              />
              <View style={{ alignSelf: "center", width: 204 }}>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 24,
                    textAlign: "center",
                    color: "#E2D5C2",
                  }}
                >
                  Tefal Unlimited Frypan
                </Text>
                <Text
                  style={{
                    fontFamily: "Montserrat-Light",
                    fontSize: 16,
                    textAlign: "center",
                    color: "#E2D5C2",
                    marginTop: 8,
                  }}
                >
                  RM209.00
                </Text>
                <ImageBackground
                  source={require("@/assets/Yourcart/Payment.png")}
                  style={{
                    width: 292,
                    height: 136,
                    marginLeft: -42,
                    marginTop: 8,
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        color: "#E2D5C2",
                        fontFamily: "Montserrat-Medium",
                        fontSize: 16,
                        padding: 18,
                      }}
                    >
                      Delivery Fee
                    </Text>
                    <Text
                      style={{
                        color: "#E2D5C2",
                        fontFamily: "Montserrat-Medium",
                        fontSize: 16,
                        padding: 18,
                        marginLeft: 60,
                      }}
                    >
                      RM5.00
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "#E2D5C2",
                      alignSelf: "center",
                      marginTop: -12,
                    }}
                  >
                    ——————————————————
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <View>
                      <Text
                        style={{
                          fontFamily: "Montserrat-SemiBold",
                          color: "#E2D5C2",
                          fontSize: 16,
                          marginLeft: 16,
                        }}
                      >
                        Total Amount
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Montserrat-Medium",
                          color: "#E2D5C2",
                          fontSize: 16,
                          marginLeft: 16,
                        }}
                      >
                        RM 214.00
                      </Text>
                    </View>
                    <View style={{ marginLeft: 50, marginTop: 4 }}>
                      <Image
                        source={require("@/assets/Yourcart/PaymentMethod.png")}
                        style={{ width: 99, height: 48 }}
                      />
                    </View>
                  </View>
                  <View style={{ marginTop: 40 }}>
                    <SlideButton
                      title="Place Order"
                      containerStyle={{
                        backgroundColor: "#E2D5C2",
                        borderRadius: 20,
                        height: 50,
                        justifyContent: "center",
                      }}
                      titleStyle={{
                        color: "#404040",
                        fontFamily: "Montserrat-Medium",
                        fontSize: 20,
                      }}
                      thumbStyle={{
                        backgroundColor: "#F36244",
                        height: 50,
                        width: 50,
                        borderRadius: 50,
                      }}
                      underlayStyle={{
                        backgroundColor: "transparent",
                      }}
                      onReachedToEnd={() => {
                        navigation.replace("Main", {
                          screen: "PurchaseSuccess",
                        });
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
            </ImageBackground>
          </View>
        </LinearGradient>
      </View>
    </GestureHandlerRootView>
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

export default YourCartScreen;
