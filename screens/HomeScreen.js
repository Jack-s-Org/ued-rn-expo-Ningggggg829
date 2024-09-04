import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import TrendingProducts from "@/components/TrendingProducts";
import { useState } from "react";
import SwipeableCarouselParallaxHorizontal from "@/components/SwipeableCarousel/SwipeableCarouselParallaxHorizontal";

const HomeScreen = ({ navigation }) => {
  const [trendingCategory, setTrendingCategory] = useState("cookware");
  return (
    <ScrollView>
      <LinearGradient
        colors={["#F8ECDC", "#E7D6C3"]}
        start={[100, 300]}
        end={[300, 30]}
      >
        <View style={{ height: 1220 }}>
          <ImageBackground
            source={require("@/assets/HomeScreen/Hometoppic.png")}
            style={{
              justifyContent: "center",
              alignItems: "center",
              resizeMode: "cover",
            }}
          >
            <Image
              style={styles.Profilepic}
              source={require("@/assets/HomeScreen/Profilepicture.jpg")}
            ></Image>
            <View style={styles.top}>
              <View style={styles.Welcome}>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Montserrat-Regular",
                    color: "#404040",
                  }}
                >
                  Hello Ning,
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Montserrat-SemiBold",
                    color: "#404040",
                  }}
                >
                  Welcome To
                </Text>
                <Text
                  style={{
                    fontSize: 48,
                    fontFamily: "Montserrat-Alternates",
                    color: "#F36244",
                    marginTop: -10,
                  }}
                >
                  Tefal
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  width: 200,
                  marginTop: 220,
                }}
              >
                <Text
                  style={{
                    color: "#404040",
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 20,
                  }}
                >
                  NFC Scan
                </Text>
                <Text
                  style={{ fontFamily: "Montserrat-Regular", fontSize: 16 }}
                >
                  Scan to access detailed appliance information
                </Text>
              </View>
            </View>
          </ImageBackground>

          <View
            style={{
              height: 110,
              width: 110,
              position: "absolute",
              bottom: 725,
              right: -2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                backgroundColor: "#F36244",
                padding: 10,
                borderRadius: 50,
                height: 90,
                width: 90,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#877571",
              }}
              onPress={() => {
                navigation.replace("Main", { screen: "NFCStatic" });
              }}
            >
              <Image
                source={require("@/assets/HomeScreen/NFCscan.png")}
              ></Image>
            </Pressable>
          </View>

          <View style={{ height: 735 }}>
            <ImageBackground
              source={require("@/assets/HomeScreen/homedark.png")}
              style={{
                resizeMode: "cover",
                height: 735,
              }}
            >
              <View
                style={{
                  alignSelf: "flex-end",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 80,
                }}
              >
                <Pressable
                  style={[
                    {
                      marginTop: 12,
                      borderWidth: 0.5,
                      borderColor: "#877571",
                      height: 32,
                      width: 90,
                      marginRight: 4,
                      borderRadius: 20,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        trendingCategory === "cookware" ? "#F36244" : "#E7D6C3",
                      zIndex: 99999,
                    },
                  ]}
                  onPress={() => setTrendingCategory("cookware")}
                >
                  <Text
                    style={{
                      fontFamily: "Montserrat-Light",
                      fontSize: 11,
                      color:
                        trendingCategory === "cookware" ? "#F4EFE9" : "#404040",
                    }}
                  >
                    COOKWARE
                  </Text>
                </Pressable>

                <Pressable
                  style={[
                    {
                      marginTop: 12,
                      borderWidth: 0.5,
                      borderColor: "#877571",
                      height: 32,
                      width: 101,
                      marginRight: 8,
                      borderRadius: 20,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        trendingCategory === "kitchenware"
                          ? "#F36244"
                          : "#E7D6C3",
                      zIndex: 99999,
                    },
                  ]}
                  onPress={() => setTrendingCategory("kitchenware")}
                >
                  <Text
                    style={{
                      fontFamily: "Montserrat-Light",
                      fontSize: 11,
                      color:
                        trendingCategory === "kitchenware"
                          ? "#F4EFE9"
                          : "#404040",
                    }}
                  >
                    KITCHENWARE
                  </Text>
                </Pressable>
              </View>
              <View
                style={{
                  zIndex: 5,
                  marginLeft: 16,
                  marginTop: -60,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Montserrat-Regular",
                    fontSize: 14,
                    color: "#F4EFE9",
                  }}
                >
                  Trending
                </Text>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 24,
                    color: "#F36244",
                  }}
                >
                  Products
                </Text>
              </View>
              <TrendingProducts category={trendingCategory} />
              <View style={{ position: "absolute", top: 350 }}>
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    fontSize: 24,
                    color: "#F36244",
                    marginLeft: 16,
                  }}
                >
                  Recipes Categories
                </Text>
                <SwipeableCarouselParallaxHorizontal></SwipeableCarouselParallaxHorizontal>
              </View>
            </ImageBackground>
          </View>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Welcome: {
    marginTop: 30,
  },
  top: {
    height: 487,
    width: "100%",
    borderBottomRightRadius: 10,
    padding: 30,
    marginLeft: -20,
  },

  Image: {
    width: "100%",
    height: 1000,
    resizeMode: "cover",
    justifyContent: "center",
  },

  Profilepic: {
    width: 50,
    height: 50,
    borderRadius: 100,
    position: "absolute",
    right: 30,
    top: 60,
    border: 0.5,
    borderColor: "#877571",
  },
});

export default HomeScreen;
