import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const HistoryScreen = ({ navigation }) => {
  const [categoryOpen, setCategoryOpen] = useState("potsCategory");
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
            <View style={{ marginTop: 30, marginLeft: 28 }}>
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
            <View style={{ marginTop: 8 }}>
              <ImageBackground
                source={
                  categoryOpen === "potsCategory"
                    ? require("@/assets/History/history-1.png")
                    : require("@/assets/History/historysmall-1.png")
                }
                style={{
                  height: categoryOpen === "potsCategory" ? 400 : 119,
                  width: 400,
                  marginLeft: -20,
                }}
              >
                <Pressable
                  style={{
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => {
                    setCategoryOpen("potsCategory");
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Montserrat-Regular",
                      fontSize: 16,
                      color: "#404040",
                      alignSelf: "center",
                    }}
                  >
                    Pots Category
                  </Text>
                </Pressable>
                {categoryOpen === "potsCategory" && (
                  <View
                    style={{
                      flexDirection: "row",
                      height: 246,
                      width: 164,
                      marginLeft: 22,
                      marginTop: 0,
                    }}
                  >
                    <ImageBackground
                      source={require("@/assets/History/pots-card.png")}
                      style={{ height: 202, width: 164, marginLeft: 8 }}
                    >
                      <Text
                        style={{
                          marginTop: 110,
                          fontFamily: "Montserrat-SemiBold",
                          width: 143,
                          textAlign: "center",
                          alignSelf: "center",
                          fontSize: 16,
                          color: "#525252",
                        }}
                      >
                        Tefal Starter Stewpot
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Montserrat-Light",
                          width: 143,
                          textAlign: "center",
                          alignSelf: "center",
                          fontSize: 14,
                          color: "#525252",
                          marginTop: 4,
                        }}
                      >
                        RM299.00
                      </Text>
                    </ImageBackground>
                    <ImageBackground
                      source={require("@/assets/History/pots-card2.png")}
                      style={{ height: 202, width: 164, marginLeft: 8 }}
                    >
                      <Text
                        style={{
                          marginTop: 110,
                          fontFamily: "Montserrat-SemiBold",
                          width: 113,
                          textAlign: "center",
                          fontSize: 16,
                          color: "#525252",
                          alignSelf: "center",
                        }}
                      >
                        Tefal Saucepan
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Montserrat-Light",
                          width: 143,
                          textAlign: "center",
                          fontSize: 14,
                          color: "#525252",
                          marginTop: 4,
                          alignSelf: "center",
                        }}
                      >
                        RM139.00
                      </Text>
                    </ImageBackground>
                  </View>
                )}
                {categoryOpen === "potsCategory" && (
                  <View
                    style={{
                      borderColor: "#404040",
                      borderWidth: 0.5,
                      borderRadius: 50,
                      height: 43,
                      width: 172,
                      marginTop: -30,
                      alignSelf: "center",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{ fontFamily: "Montserrat-Regular", fontSize: 16 }}
                    >
                      {" "}
                      View More Details
                    </Text>
                  </View>
                )}
              </ImageBackground>
              {/* -----------------------------------------------------FRYPANcategory------------------------------------------- */}
              <View style={{ marginTop: -65 }}>
                <ImageBackground
                  source={
                    categoryOpen === "FrypanCategory"
                      ? require("@/assets/History/history-2.png")
                      : require("@/assets/History/historysmall-2.png")
                  }
                  style={{
                    height: categoryOpen === "FrypanCategory" ? 400 : 119,
                    width: 400,
                    marginLeft: -20,
                  }}
                >
                  <Pressable
                    style={{
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      setCategoryOpen("FrypanCategory");
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Montserrat-Regular",
                        fontSize: 16,
                        color: "#404040",
                        alignSelf: "center",
                        marginTop: -8,
                      }}
                    >
                      Frypan Category
                    </Text>
                  </Pressable>
                  {categoryOpen === "FrypanCategory" && (
                    <View
                      style={{
                        flexDirection: "row",
                        height: 246,
                        width: 164,
                        marginLeft: 22,
                        marginTop: -8,
                      }}
                    >
                      <ImageBackground
                        source={require("@/assets/History/frypan-card.png")}
                        style={{ height: 226, width: 164, marginLeft: 8 }}
                      >
                        <Text
                          style={{
                            marginTop: 140,
                            fontFamily: "Montserrat-SemiBold",
                            width: 143,
                            textAlign: "center",
                            alignSelf: "center",
                            fontSize: 16,
                            color: "#525252",
                          }}
                        >
                          Tefal Unlimited Frypan
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Montserrat-Light",
                            width: 143,
                            textAlign: "center",
                            alignSelf: "center",
                            fontSize: 14,
                            color: "#525252",
                            marginTop: 4,
                          }}
                        >
                          RM209.00
                        </Text>
                      </ImageBackground>
                      <ImageBackground
                        source={require("@/assets/History/frypan-card2.png")}
                        style={{ height: 226, width: 164, marginLeft: 8 }}
                      >
                        <Text
                          style={{
                            marginTop: 140,
                            fontFamily: "Montserrat-SemiBold",
                            width: 113,
                            textAlign: "center",
                            fontSize: 16,
                            color: "#525252",
                            alignSelf: "center",
                          }}
                        >
                          Tefal Deep Frypan
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Montserrat-Light",
                            width: 143,
                            textAlign: "center",
                            fontSize: 14,
                            color: "#525252",
                            marginTop: 4,
                            alignSelf: "center",
                          }}
                        >
                          RM139.00
                        </Text>
                      </ImageBackground>
                    </View>
                  )}
                  {categoryOpen === "FrypanCategory" && (
                    <View
                      style={{
                        borderColor: "#404040",
                        borderWidth: 0.5,
                        borderRadius: 50,
                        height: 43,
                        width: 172,
                        marginTop: -10,
                        alignSelf: "center",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Montserrat-Regular",
                          fontSize: 16,
                        }}
                      >
                        {" "}
                        View More Details
                      </Text>
                    </View>
                  )}
                </ImageBackground>
              </View>
              {/* ----------------------------------------------------AirFryerCategory---------------------------------------------------------- */}
              <View style={{ marginTop: -65 }}>
                <ImageBackground
                  source={
                    categoryOpen === "AirFryerCategory"
                      ? require("@/assets/History/history-3.png")
                      : require("@/assets/History/historysmall-3.png")
                  }
                  style={{
                    height: categoryOpen === "AirFryerCategory" ? 400 : 119,
                    width: 400,
                    marginLeft: -20,
                  }}
                >
                  <Pressable
                    style={{
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      setCategoryOpen("AirFryerCategory");
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Montserrat-Regular",
                        fontSize: 16,
                        color: "#FFE7C3",
                        alignSelf: "center",
                        marginTop: -8,
                      }}
                    >
                      Air Fryer Category
                    </Text>
                  </Pressable>
                  {categoryOpen === "AirFryerCategory" && (
                    <View
                      style={{
                        flexDirection: "row",
                        height: 246,
                        width: 164,
                        marginLeft: 22,
                        marginTop: -8,
                      }}
                    >
                      <ImageBackground
                        source={require("@/assets/History/airfryer-card.png")}
                        style={{ height: 226, width: 164, marginLeft: 8 }}
                      >
                        <Text
                          style={{
                            marginTop: 140,
                            fontFamily: "Montserrat-SemiBold",
                            width: 113,
                            textAlign: "center",
                            alignSelf: "center",
                            fontSize: 12,
                            color: "#525252",
                          }}
                        >
                          Tefal Easy Fry Steam & Grill FW2018
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Montserrat-Light",
                            width: 143,
                            textAlign: "center",
                            alignSelf: "center",
                            fontSize: 14,
                            color: "#525252",
                            marginTop: 4,
                          }}
                        >
                          RM939.00
                        </Text>
                      </ImageBackground>
                      <ImageBackground
                        source={require("@/assets/History/airfryer-card2.png")}
                        style={{ height: 226, width: 164, marginLeft: 8 }}
                      >
                        <Text
                          style={{
                            marginTop: 140,
                            fontFamily: "Montserrat-SemiBold",
                            width: 113,
                            textAlign: "center",
                            fontSize: 12,
                            color: "#525252",
                            alignSelf: "center",
                          }}
                        >
                          Tefal Easy Fry Steam & Grill EY505D
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Montserrat-Light",
                            width: 143,
                            textAlign: "center",
                            fontSize: 14,
                            color: "#525252",
                            marginTop: 4,
                            alignSelf: "center",
                          }}
                        >
                          RM539.00
                        </Text>
                      </ImageBackground>
                    </View>
                  )}
                  {categoryOpen === "AirFryerCategory" && (
                    <View
                      style={{
                        borderColor: "#404040",
                        borderWidth: 0.5,
                        borderRadius: 50,
                        height: 43,
                        width: 172,
                        marginTop: -10,
                        alignSelf: "center",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Montserrat-Regular",
                          fontSize: 16,
                        }}
                      >
                        {" "}
                        View More Details
                      </Text>
                    </View>
                  )}
                </ImageBackground>
              </View>
              {/* ---------------------------------------------------------------OvenCategory----------------------------------------------------- */}
              <View style={{ marginTop: -65 }}>
                <ImageBackground
                  source={
                    categoryOpen === "OvenCategory"
                      ? require("@/assets/History/history-4.png")
                      : require("@/assets/History/historysmall-4.png")
                  }
                  style={{
                    height: categoryOpen === "OvenCategory" ? 400 : 119,
                    width: 400,
                    marginLeft: -20,
                  }}
                >
                  <Pressable
                    style={{
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      setCategoryOpen("OvenCategory");
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Montserrat-Regular",
                        fontSize: 16,
                        color: "#FFE7C3",
                        alignSelf: "center",
                        marginTop: -8,
                      }}
                    >
                      Oven Category
                    </Text>
                  </Pressable>
                  {categoryOpen === "OvenCategory" && (
                    <View
                      style={{
                        flexDirection: "row",
                        height: 246,
                        width: 164,
                        marginLeft: 22,
                        marginTop: -8,
                      }}
                    >
                      <ImageBackground
                        source={require("@/assets/History/oven-card.png")}
                        style={{ height: 226, width: 164, marginLeft: 8 }}
                      >
                        <Text
                          style={{
                            marginTop: 140,
                            fontFamily: "Montserrat-SemiBold",
                            width: 113,
                            textAlign: "center",
                            alignSelf: "center",
                            fontSize: 16,
                            color: "#525252",
                          }}
                        >
                          Tefal Mini Oven
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Montserrat-Light",
                            width: 143,
                            textAlign: "center",
                            alignSelf: "center",
                            fontSize: 14,
                            color: "#525252",
                            marginTop: 4,
                          }}
                        >
                          RM439.00
                        </Text>
                      </ImageBackground>
                      <ImageBackground
                        source={require("@/assets/History/oven-card2.png")}
                        style={{ height: 226, width: 164, marginLeft: 8 }}
                      >
                        <Text
                          style={{
                            marginTop: 140,
                            fontFamily: "Montserrat-SemiBold",
                            width: 113,
                            textAlign: "center",
                            fontSize: 16,
                            color: "#525252",
                            alignSelf: "center",
                          }}
                        >
                          Tefal Digital Oven
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Montserrat-Light",
                            width: 143,
                            textAlign: "center",
                            fontSize: 14,
                            color: "#525252",
                            marginTop: 4,
                            alignSelf: "center",
                          }}
                        >
                          RM639.00
                        </Text>
                      </ImageBackground>
                    </View>
                  )}
                  {categoryOpen === "OvenCategory" && (
                    <View
                      style={{
                        borderColor: "#404040",
                        borderWidth: 0.5,
                        borderRadius: 50,
                        height: 43,
                        width: 172,
                        marginTop: -10,
                        alignSelf: "center",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Montserrat-Regular",
                          fontSize: 16,
                        }}
                      >
                        {" "}
                        View More Details
                      </Text>
                    </View>
                  )}
                </ImageBackground>
              </View>
              {/* ----------------------------------------------------KnifeCategory------------------------------------------------------------------- */}
              <View style={{ marginTop: -65 }}>
                <ImageBackground
                  source={
                    categoryOpen === "KnifeCategory"
                      ? require("@/assets/History/history-5.png")
                      : require("@/assets/History/historysmall-5.png")
                  }
                  style={{
                    height: categoryOpen === "KnifeCategory" ? 400 : 119,
                    width: 400,
                    marginLeft: -20,
                  }}
                >
                  <Pressable
                    style={{
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    onPress={() => {
                      setCategoryOpen("KnifeCategory");
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Montserrat-Regular",
                        fontSize: 16,
                        color: "#525252",
                        alignSelf: "center",
                        marginTop: -8,
                      }}
                    >
                      Knife Category
                    </Text>
                  </Pressable>
                  {categoryOpen === "KnifeCategory" && (
                    <View
                      style={{
                        flexDirection: "row",
                        height: 246,
                        width: 164,
                        marginLeft: 22,
                        marginTop: -32,
                      }}
                    >
                      <ImageBackground
                        source={require("@/assets/History/knife-card.png")}
                        style={{ height: 226, width: 164, marginLeft: 8 }}
                      >
                        <Text
                          style={{
                            marginTop: 140,
                            fontFamily: "Montserrat-SemiBold",
                            width: 113,
                            textAlign: "center",
                            alignSelf: "center",
                            fontSize: 1,
                            color: "#525252",
                          }}
                        >
                          Tefal Classic Knife
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Montserrat-Light",
                            width: 143,
                            textAlign: "center",
                            alignSelf: "center",
                            fontSize: 14,
                            color: "#525252",
                            marginTop: 4,
                          }}
                        >
                          RM939.00
                        </Text>
                      </ImageBackground>
                      <ImageBackground
                        source={require("@/assets/History/knife-card2.png")}
                        style={{ height: 226, width: 164, marginLeft: 8 }}
                      >
                        <Text
                          style={{
                            marginTop: 140,
                            fontFamily: "Montserrat-SemiBold",
                            width: 113,
                            textAlign: "center",
                            fontSize: 16,
                            color: "#525252",
                            alignSelf: "center",
                          }}
                        >
                          Tefal Comfort Touch Knife
                        </Text>
                        <Text
                          style={{
                            fontFamily: "Montserrat-Light",
                            width: 143,
                            textAlign: "center",
                            fontSize: 14,
                            color: "#525252",
                            marginTop: 4,
                            alignSelf: "center",
                          }}
                        >
                          RM41.90
                        </Text>
                      </ImageBackground>
                    </View>
                  )}
                  {categoryOpen === "KnifeCategory" && (
                    <View
                      style={{
                        borderColor: "#404040",
                        borderWidth: 0.5,
                        borderRadius: 50,
                        height: 43,
                        width: 172,
                        marginTop: -10,
                        alignSelf: "center",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "Montserrat-Regular",
                          fontSize: 16,
                        }}
                      >
                        {" "}
                        View More Details
                      </Text>
                    </View>
                  )}
                </ImageBackground>
              </View>
              <View style={{ marginTop: -65 }}>
                <ImageBackground
                  source={require("@/assets/History/history-6.png")}
                  style={{
                    height: 134,
                    width: 400,
                    marginLeft: -20,
                  }}
                ></ImageBackground>
              </View>
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
