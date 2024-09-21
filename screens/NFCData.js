import { StyleSheet, Text } from "react-native";
import {
  View,
  Image,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ProgressLeft from "@/components/progressBarLeft";
import ProgressRight from "@/components/progressBarRight";

const NFCDataScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <LinearGradient
        colors={["#F8ECDC", "#E7D6C3"]}
        start={[100, 300]}
        end={[300, 30]}
      >
        <View style={{ height: 1515 }}>
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
            <Image
              style={{
                width: 371,
                height: 371,
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
              source={require("@/assets/NFCData/blackbg.png")}
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
                Data Analysis
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    height: 34,
                    width: 129,
                    marginTop: 8,
                    marginLeft: 24,
                  }}
                >
                  <Text
                    style={{
                      color: "#E2D5C2",
                      fontSize: 14,
                      fontFamily: "Montserrat-Medium",
                    }}
                  >
                    Tefal Unlimited FryPan 24cm
                  </Text>
                </View>
                <View style={{ marginTop: 12 }}>
                  <Image
                    source={require("@/assets/NFCData/arrow.png")}
                    style={{ width: 51, height: 24 }}
                  ></Image>
                </View>
                <View
                  style={{
                    height: 34,
                    width: 129,
                    marginTop: 8,
                    marginRight: 24,
                  }}
                >
                  <Text
                    style={{
                      color: "#E2D5C2",
                      fontSize: 14,
                      fontFamily: "Montserrat-Medium",
                      textAlign: "right",
                    }}
                  >
                    Tefal Deep FryPan 28cm
                  </Text>
                </View>
              </View>
              <Text style={{ marginLeft: 20, color: "#BCA9A5", marginTop: 18 }}>
                ———————————————————————
              </Text>
              <View style={{ flexDirection: "row", marginLeft: 20 }}>
                <ProgressLeft></ProgressLeft>
                <View
                  style={{
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#FFE7C3",
                      fontFamily: "Montserrat-Light",
                      fontSize: 12,
                      marginBottom: 32,
                      marginTop: 12,
                    }}
                  >
                    Price
                  </Text>
                  <Text
                    style={{
                      color: "#FFE7C3",
                      fontFamily: "Montserrat-Light",
                      fontSize: 12,
                      marginBottom: 32,
                    }}
                  >
                    Ratings
                  </Text>
                  <Text
                    style={{
                      color: "#FFE7C3",
                      fontFamily: "Montserrat-Light",
                      fontSize: 12,
                      marginBottom: 32,
                    }}
                  >
                    Diameter
                  </Text>
                  <Text
                    style={{
                      color: "#FFE7C3",
                      fontFamily: "Montserrat-Light",
                      fontSize: 12,
                      marginBottom: 0,
                    }}
                  >
                    Warranty
                  </Text>
                </View>
                <View>
                  <ProgressRight></ProgressRight>
                </View>
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
                Statistics
              </Text>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: "#F5E9DA",
                  height: 331,
                  width: 331,
                  alignSelf: "center",
                  borderRadius: 200,
                  marginTop: 8,
                }}
              >
                <Image
                  source={require("@/assets/NFCData/statistic.png")}
                  style={{
                    width: 311,
                    height: 311,
                    alignSelf: "center",
                    marginTop: 10,
                  }}
                ></Image>
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
                Features
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 8,
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    marginLeft: 20,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#F36244",
                      width: 153,
                      height: 126,
                      borderRadius: 8,
                      borderWidth: 0.5,
                      borderColor: "#F4EFE9",
                      marginBottom: 20,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 8,
                        marginTop: 8,
                      }}
                    >
                      <Image
                        source={require("@/assets/NFCData/MaterialIcon.png")}
                        style={{ height: 38, width: 38, padding: 20 }}
                      ></Image>
                      <View style={{ marginLeft: 4 }}>
                        <Text
                          style={{
                            fontFamily: "Montserrat-Medium",
                            fontSize: 12,
                            color: "#E2D5C2",
                          }}
                        >
                          Material
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Montserrat-SemiBold",
                            fontSize: 16,
                            color: "#E2D5C2",
                          }}
                        >
                          Aluminum
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 4,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: "Montserrat-Medium",
                          color: "#E2D5C2",
                        }}
                      >
                        Inside Coating |
                      </Text>
                      <Text
                        style={{
                          fontSize: 9,
                          fontFamily: "Montserrat-Regular",
                          color: "#E2D5C2",
                          marginBottom: 4,
                        }}
                      >
                        Titanium - Non-stick coating
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: "Montserrat-Medium",
                          color: "#E2D5C2",
                        }}
                      >
                        Outside Coating |
                      </Text>
                      <Text
                        style={{
                          fontSize: 9,
                          fontFamily: "Montserrat-Regular",
                          color: "#E2D5C2",
                        }}
                      >
                        Titanium - Non-stick coating
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#F36244",
                      width: 153,
                      height: 126,
                      borderRadius: 8,
                      borderWidth: 0.5,
                      borderColor: "#F4EFE9",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 8,
                        marginTop: 12,
                      }}
                    >
                      <Image
                        source={require("@/assets/NFCData/HobsIcon.png")}
                        style={{ height: 38, width: 38, padding: 20 }}
                      ></Image>
                      <View style={{ marginLeft: 4, width: 100 }}>
                        <Text
                          style={{
                            fontFamily: "Montserrat-SemiBold",
                            fontSize: 13,
                            color: "#E2D5C2",
                            marginTop: 4,
                          }}
                        >
                          Hobs Compatibility
                        </Text>
                      </View>
                    </View>
                    <View style={{ textAlign: "center" }}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontFamily: "Montserrat-Regular",
                          fontSize: 12,
                          color: "#E2D5C2",
                          marginTop: 8,
                        }}
                      >
                        INDUCTION - GAS - ELECTRIC - CERAMIC - HALOGEN
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "column",
                    marginLeft: 12,
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#E2D5C2",
                      width: 153,
                      height: 126,
                      borderRadius: 8,
                      borderWidth: 0.5,
                      borderColor: "#F36244",
                      marginBottom: 20,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 8,
                        marginTop: 8,
                      }}
                    >
                      <Image
                        source={require("@/assets/NFCData/MaterialIconOrange.png")}
                        style={{ height: 38, width: 38, padding: 20 }}
                      ></Image>
                      <View style={{ marginLeft: 4 }}>
                        <Text
                          style={{
                            fontFamily: "Montserrat-Medium",
                            fontSize: 12,
                            color: "#525252",
                          }}
                        >
                          Material
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Montserrat-SemiBold",
                            fontSize: 16,
                            color: "#525252",
                          }}
                        >
                          Aluminum
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 4,
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: "Montserrat-Medium",
                          color: "#525252",
                        }}
                      >
                        Inside Coating |
                      </Text>
                      <Text
                        style={{
                          fontSize: 9,
                          fontFamily: "Montserrat-Regular",
                          color: "#525252",
                          marginBottom: 4,
                        }}
                      >
                        Titanium - Non-stick coating
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: "Montserrat-Medium",
                          color: "#525252",
                        }}
                      >
                        Outside Coating |
                      </Text>
                      <Text
                        style={{
                          fontSize: 9,
                          fontFamily: "Montserrat-Regular",
                          color: "#525252",
                        }}
                      >
                        Titanium - Non-stick coating
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#E2D5C2",
                      width: 153,
                      height: 126,
                      borderRadius: 8,
                      borderWidth: 0.5,
                      borderColor: "#F36244",
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: 8,
                        marginTop: 12,
                      }}
                    >
                      <Image
                        source={require("@/assets/NFCData/HobsIconOrange.png")}
                        style={{ height: 38, width: 38, padding: 20 }}
                      ></Image>
                      <View style={{ marginLeft: 4, width: 100 }}>
                        <Text
                          style={{
                            fontFamily: "Montserrat-SemiBold",
                            fontSize: 13,
                            color: "#525252",
                            marginTop: 4,
                          }}
                        >
                          Hobs Compatibility
                        </Text>
                      </View>
                    </View>
                    <View style={{ textAlign: "center" }}>
                      <Text
                        style={{
                          textAlign: "center",
                          fontFamily: "Montserrat-Regular",
                          fontSize: 12,
                          color: "#525252",
                          marginTop: 8,
                        }}
                      >
                        INDUCTION - GAS - ELECTRIC - CERAMIC - HALOGEN
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </ScrollView>
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default NFCDataScreen;
