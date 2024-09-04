import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";

const DiscoverScreen = ({ navigation }) => {
  const [isCookwarePressed, setIsCookwarePressed] = useState(false);
  const [isKitchenwarePressed, setIsKitchenwarePressed] = useState(false);
  const [isPotsPressed, setIsPotsPressed] = useState(false);
  const [isSpaghettiPressed, setIsSpaghettiPressed] = useState(false);
  const [isFriedRicePressed, setIsFriedRicePressed] = useState(false);
  const [text, onChangeText] = useState();

  return (
    <View style={{ height: 844, width: 390 }}>
      <LinearGradient
        colors={["#F8ECDC", "#E7D6C3"]}
        start={[100, 300]}
        end={[300, 30]}
      >
        <View style={{ height: 844, width: 390 }}>
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
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: 120,
              marginLeft: -40,
            }}
          >
            <TextInput
              style={styles.input}
              onChangeText={(text) => onChangeText(text)}
              placeholder="Search"
              placeholderTextColor="#F3A896"
            />
          </View>
          <View
            style={{
              backgroundColor: "#E2D5C2",
              width: 60,
              height: 60,
              borderRadius: 100,
              position: "absolute",
              right: 60,
              top: 120,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 0.5,
              borderColor: "#877571",
            }}
          >
            <Ionicons name="search" size={28} color={"#F36244"} />
          </View>
          <View style={{ marginTop: 40 }}>
            <ImageBackground
              source={require("@/assets/Discover/SearchBG.png")}
              style={{ width: 360, height: 731 }}
            >
              <View style={{ marginLeft: 28, marginTop: 24 }}>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 20,
                    color: "#525252",
                  }}
                >
                  Recently Search
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 20,
                  marginTop: 24,
                }}
              >
                <Pressable
                  onPressIn={() => setIsCookwarePressed(true)}
                  onPressOut={() => setIsCookwarePressed(false)}
                  style={{
                    borderWidth: 0.5,
                    borderColor: "#877571",
                    width: 100,
                    height: 35,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: isCookwarePressed
                      ? "#F36244"
                      : "transparent",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Montserrat-Regular",
                      fontSize: 16,
                      color: isCookwarePressed ? "#F4EFE9" : "#877571",
                    }}
                  >
                    Cookware
                  </Text>
                </Pressable>
                <Pressable
                  onPressIn={() => setIsKitchenwarePressed(true)}
                  onPressOut={() => setIsKitchenwarePressed(false)}
                  style={{
                    borderWidth: 0.5,
                    borderColor: "#877571",
                    width: 118,
                    height: 35,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: isKitchenwarePressed
                      ? "#F36244"
                      : "transparent",
                    marginLeft: 8,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Montserrat-Regular",
                      fontSize: 16,
                      color: isKitchenwarePressed ? "#F4EFE9" : "#877571",
                    }}
                  >
                    Kitchenware
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 20,
                  marginTop: 12,
                }}
              >
                <Pressable
                  onPressIn={() => setIsPotsPressed(true)}
                  onPressOut={() => setIsPotsPressed(false)}
                  style={{
                    borderWidth: 0.5,
                    borderColor: "#877571",
                    width: 60,
                    height: 35,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: isPotsPressed ? "#F36244" : "transparent",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Montserrat-Regular",
                      fontSize: 16,
                      color: isPotsPressed ? "#F4EFE9" : "#877571",
                    }}
                  >
                    Pots
                  </Text>
                </Pressable>
                <Pressable
                  onPressIn={() => setIsSpaghettiPressed(true)}
                  onPressOut={() => setIsSpaghettiPressed(false)}
                  style={{
                    borderWidth: 0.5,
                    borderColor: "#877571",
                    width: 96,
                    height: 35,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: isSpaghettiPressed
                      ? "#F36244"
                      : "transparent",
                    marginLeft: 8,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Montserrat-Regular",
                      fontSize: 16,
                      color: isSpaghettiPressed ? "#F4EFE9" : "#877571",
                    }}
                  >
                    Spaghetti
                  </Text>
                </Pressable>
                <Pressable
                  onPressIn={() => setIsFriedRicePressed(true)}
                  onPressOut={() => setIsFriedRicePressed(false)}
                  style={{
                    borderWidth: 0.5,
                    borderColor: "#877571",
                    width: 99,
                    height: 35,
                    borderRadius: 50,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: isFriedRicePressed
                      ? "#F36244"
                      : "transparent",
                    marginLeft: 8,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Montserrat-Regular",
                      fontSize: 16,
                      color: isFriedRicePressed ? "#F4EFE9" : "#877571",
                    }}
                  >
                    Fried Rice
                  </Text>
                </Pressable>
              </View>
              <View style={{ marginLeft: 28, marginTop: 24 }}>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 20,
                    color: "#525252",
                  }}
                >
                  Recommended For You
                </Text>
              </View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexDirection: "row",
                  marginLeft: 20,
                  marginTop: 8,
                }}
              >
                <View>
                  <Image
                    source={require("@/assets/Discover/recommend_1.png")}
                    style={{
                      width: 220,
                      height: 220,
                      marginRight: 20,
                    }}
                  ></Image>
                  <View
                    style={{
                      position: "absolute",
                      color: "#E2D5C2",
                      width: 128,
                      left: 16,
                      top: 20,
                    }}
                  >
                    <Text
                      style={{
                        color: "#E2D5C2",
                        fontFamily: "Montserrat-SemiBold",
                        fontSize: 20,
                      }}
                    >
                      Tefal Deep Frypan
                    </Text>
                    <Text
                      style={{
                        color: "#E2D5C2",
                        fontFamily: "Montserrat-Light",
                        fontSize: 14,
                        marginTop: 8,
                      }}
                    >
                      RM139.00
                    </Text>
                  </View>
                </View>
                <View>
                  <Image
                    source={require("@/assets/Discover/recommend_2.png")}
                    style={{ width: 220, height: 220, marginRight: 32 }}
                  ></Image>
                  <View
                    style={{
                      position: "absolute",
                      color: "#E2D5C2",
                      width: 128,
                      left: 16,
                      top: 20,
                    }}
                  >
                    <Text
                      style={{
                        color: "#E2D5C2",
                        fontFamily: "Montserrat-SemiBold",
                        fontSize: 20,
                      }}
                    >
                      Tefal Deep Frypan
                    </Text>
                    <Text
                      style={{
                        color: "#E2D5C2",
                        fontFamily: "Montserrat-Light",
                        fontSize: 14,
                        marginTop: 8,
                      }}
                    >
                      RM139.00
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </ImageBackground>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 284,
    height: 40,
    margin: 8,
    borderWidth: 0.5,
    borderColor: "#877571",
    paddingLeft: 16,
    borderRadius: 100,
    backgroundColor: "#F4EFE9",
    fontFamily: "Montserrat-Regular",
    color: "#F36244",
  },
});
export default DiscoverScreen;
