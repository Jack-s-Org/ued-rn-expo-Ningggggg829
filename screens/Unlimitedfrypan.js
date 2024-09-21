import { StyleSheet, Text } from "react-native";
import {
  View,
  Image,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SwipeableCarouselParallaxHorizontal from "@/components/SwipeableCarousel/SwipeableCarouselParallaxHorizontal";

const UnlimitedfrypanScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <LinearGradient
        colors={["#F8ECDC", "#E7D6C3"]}
        start={[100, 300]}
        end={[300, 30]}
      >
        <View style={{ height: 1315 }}>
          <ImageBackground
            source={require("@/assets/NFCData/BG.png")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              resizeMode: "cover",
              height: 400,
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
                navigation.replace("Main", { screen: "Products" });
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
            <Image
              style={{
                width: 301,
                height: 301,
                marginTop: 0,
                marginBottom: -100,
              }}
              source={require("@/assets/NFCData/unlimitedFrypan.png")}
            ></Image>
          </ImageBackground>
          <ScrollView>
            <Pressable
              style={{
                backgroundColor: "#F36244",
                borderRadius: 16,
                height: 84,
                width: 84,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#877571",
                position: "absolute",
                top: 0,
                right: 4,
                zIndex: 2,
              }}
              onPress={() => {
                navigation.replace("Main", { screen: "AR" });
              }}
              options={{ animation: "fadeOut" }}
            >
              <Image
                source={require("@/assets/NFCData/AR.png")}
                style={{ height: 40, width: 40 }}
              ></Image>
            </Pressable>
            <ImageBackground
              source={require("@/assets/UnlimitedFrypan/unlimitedfrypanBG.png")}
              style={{
                height: 1116,
                width: 360,
                resizeMode: "cover",
                zIndex: 1,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    borderRadius: 100,
                    backgroundColor: "#5C5C5C",
                    height: 35,
                    width: 35,
                    marginLeft: 24,
                    marginTop: 40,
                    borderWidth: 0.5,
                    borderColor: "#F4EFE9",
                  }}
                ></View>
                <View
                  style={{
                    borderRadius: 100,
                    backgroundColor: "#9E3A35",
                    height: 35,
                    width: 35,
                    marginLeft: 10,
                    marginTop: 40,
                    borderWidth: 0.5,
                    borderColor: "#F4EFE9",
                  }}
                ></View>
              </View>
              <Text
                style={{
                  color: "#E2D5C2",
                  fontSize: 20,
                  fontFamily: "Montserrat-SemiBold",
                  marginTop: 12,
                  marginLeft: 24,
                }}
              >
                Tefal Unlimited Frypan
              </Text>
              <Text
                style={{
                  color: "#E2D5C2",
                  fontSize: 12,
                  fontFamily: "Montserrat-Light",
                  marginTop: 0,
                  marginLeft: 24,
                }}
              >
                The best anti-scratch non-stick coating*
              </Text>
              <View>
                <Text
                  style={{
                    marginLeft: 24,
                    color: "#F36244",
                    fontSize: 32,
                    fontFamily: "Montserrat-SemiBold",
                    marginTop: 4,
                  }}
                >
                  RM209.00
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <Pressable
                  style={{
                    borderRadius: 50,
                    borderWidth: 0.5,
                    borderColor: "#D9D9D9",
                    width: 114,
                    height: 44,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 180,
                    marginTop: 8,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Montserrat-Regular",
                      fontSize: 16,
                      color: "#F4EFE9",
                    }}
                  >
                    BUY NOW
                  </Text>
                </Pressable>
                <Pressable
                  style={{
                    borderRadius: 50,
                    borderWidth: 0.5,
                    borderColor: "#D9D9D9",
                    width: 44,
                    height: 44,
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: 8,
                    marginTop: 8,
                  }}
                >
                  <Feather name="shopping-cart" size={20} color="#F4EFE9" />
                </Pressable>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 20,
                  marginTop: 32,
                }}
              >
                <View
                  style={{
                    width: 73,
                    alignItems: "center",
                    marginRight: 8,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#E2D5C2",
                      width: 73,
                      height: 73,
                      borderRadius: 8,
                      borderWidth: 0.5,
                      borderColor: "#F36244",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AntDesign name="Safety" size={48} color="#5C5C5C" />
                  </View>
                  <Text
                    style={{
                      fontFamily: "Montserrat-Regular",
                      fontSize: 12,
                      color: "#E2D5C2",
                      marginTop: 8,
                    }}
                  >
                    10 years warranty
                  </Text>
                </View>
                <View
                  style={{
                    width: 73,
                    alignItems: "center",
                    marginRight: 8,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#E2D5C2",
                      width: 73,
                      height: 73,
                      borderRadius: 8,
                      borderWidth: 0.5,
                      borderColor: "#F36244",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Ionicons name="water-outline" size={48} color="#5C5C5C" />
                  </View>
                  <Text
                    style={{
                      fontFamily: "Montserrat-Regular",
                      fontSize: 12,
                      color: "#E2D5C2",
                      marginTop: 8,
                      width: 60,
                      textAlign: "center",
                    }}
                  >
                    Easy Clean
                  </Text>
                </View>
                <View
                  style={{
                    width: 73,
                    alignItems: "center",
                    marginRight: 8,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#E2D5C2",
                      width: 73,
                      height: 73,
                      borderRadius: 8,
                      borderWidth: 0.5,
                      borderColor: "#F36244",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="recycle-variant"
                      size={48}
                      color="#5C5C5C"
                    />
                  </View>
                  <Text
                    style={{
                      fontFamily: "Montserrat-Regular",
                      fontSize: 12,
                      color: "#E2D5C2",
                      marginTop: 8,
                    }}
                  >
                    10 years warranty
                  </Text>
                </View>
                <View
                  style={{
                    width: 73,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#E2D5C2",
                      width: 73,
                      height: 73,
                      borderRadius: 8,
                      borderWidth: 0.5,
                      borderColor: "#F36244",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FontAwesome name="hand-stop-o" size={48} color="#5C5C5C" />
                  </View>
                  <Text
                    style={{
                      fontFamily: "Montserrat-Regular",
                      fontSize: 12,
                      color: "#E2D5C2",
                      marginTop: 8,
                    }}
                  >
                    10 years warranty
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 16 }}>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 24,
                    color: "#F36244",
                    marginLeft: 20,
                  }}
                >
                  Features
                </Text>
                <View style={{ flexDirection: "row", marginTop: 16 }}>
                  <View style={{ width: 132, marginLeft: 20 }}>
                    <Text
                      style={{
                        fontFamily: "Montserrat-Regular",
                        fontSize: 12,
                        color: "#E2D5C2",
                      }}
                    >
                      Product Family{"\n"} Diameter{"\n"} Material {"\n"}Hobs
                      Compatibility {"\n"}
                      {"\n"}Oven compatibility {"\n"}Inside Coating/finish
                      Outside coating/finish{"\n"} Handle Type {"\n"}
                      Cooking Surface
                    </Text>
                  </View>
                  <View
                    style={{
                      width: 2,
                      marginRight: 12,
                      marginLeft: 12,
                      color: "#E2D5C2",
                    }}
                  >
                    <Text style={{ color: "#E2D5C2" }}>||||||||||</Text>
                  </View>
                  <View style={{ width: 202, marginLeft: 8 }}>
                    <Text
                      style={{
                        fontFamily: "Montserrat-Regular",
                        fontSize: 12,
                        color: "#E2D5C2",
                      }}
                    >
                      Frypan{"\n"} 28 cm {"\n"}Aluminium {"\n"}Induction/ Gas
                      /Electric / Ceramic / Halogen{"\n"} Yes, Up To 175°C{"\n"}{" "}
                      Titanium {"\n"}Non-Stick Coating{"\n"} Non-Stick Coating
                      {"\n"} Fixed
                      {"\n"} Non-Stick
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 24,
                    color: "#F36244",
                    marginLeft: 20,
                    marginTop: 12,
                  }}
                >
                  Recipe
                </Text>
                <SwipeableCarouselParallaxHorizontal></SwipeableCarouselParallaxHorizontal>
              </View>
            </ImageBackground>
          </ScrollView>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default UnlimitedfrypanScreen;
