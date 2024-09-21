import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ARVideo from "@/components/ARVideo";
import { useState } from "react";

const ARScreen = ({ navigation }) => {
  const [selectedVideo, setSelectedVideo] = useState("default");
  return (
    <View style={{ height: 800, width: 380 }}>
      <ImageBackground
        source={require("@/assets/AR/gradient.png")}
        style={{ height: 300, width: 390, position: "absolute", top: 1550 }}
      ></ImageBackground>
      <ARVideo videoSource={selectedVideo} />
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
          navigation.replace("Main", { screen: "NFCData" });
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
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: "row",
          marginLeft: 64,
          marginTop: 564,
        }}
        style={{
          marginBottom: 20,
          alignSelf: "center",
          marginLeft: -12,
        }}
      >
        <ImageBackground
          source={require("@/assets/AR/ARCard.png")}
          style={{ height: 161, width: 231 }}
        >
          <View style={{ flexDirection: "row", padding: 16 }}>
            <View
              style={{
                backgroundColor: "#5A5150",
                height: 25,
                width: 25,
                borderRadius: 50,
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#FF746D",
                height: 25,
                width: 25,
                borderRadius: 50,
                marginLeft: 4,
              }}
            ></View>
          </View>
          <Text
            style={{
              fontFamily: "Montserrat-SemiBold",
              fontSize: 16,
              color: "#525252",
              marginLeft: 16,
              marginTop: -8,
            }}
          >
            Tefal Unlimited Frypan
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-Light",
              fontSize: 12,
              marginLeft: 16,
            }}
          >
            RM209.00
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 12, marginTop: 8 }}>
            <Pressable
              style={{
                backgroundColor: "#F36244",
                height: 50,
                width: 50,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#877571",
              }}
              onPress={() => setSelectedVideo("cleaning")}
            >
              <Image
                source={require("@/assets/AR/Cleaning.png")}
                style={{ width: 10, height: 25 }}
              ></Image>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#F36244",
                height: 50,
                width: 50,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#877571",
                marginLeft: 4,
              }}
              onPress={() => setSelectedVideo("fire")}
            >
              <Image
                source={require("@/assets/AR/Fire.png")}
                style={{ width: 20, height: 22 }}
              ></Image>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#F36244",
                height: 50,
                width: 50,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#877571",
                marginLeft: 4,
              }}
              onPress={() => setSelectedVideo("spoonfork")}
            >
              <Image
                source={require("@/assets/AR/Spoonnfork.png")}
                style={{ width: 25, height: 23 }}
              ></Image>
            </Pressable>
          </View>
          <Pressable
            style={{
              backgroundColor: "#F4EFE9",
              borderWidth: 0.5,
              borderColor: "#F36244",
              width: 105,
              height: 27,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: 0,
              top: 0,
            }}
            onPress={() => {
              navigation.replace("Main", { screen: "YourCart" });
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-SemiBold",
                fontSize: 14,
                color: "#F36244",
              }}
            >
              Buy Now
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#F36244",
              borderWidth: 0.5,
              borderColor: "#877571",
              width: 46,
              height: 46,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: 0,
              bottom: 0,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Regular",
                fontSize: 36,
                color: "#F4EFE9",
                marginTop: -4,
              }}
            >
              +
            </Text>
          </Pressable>
        </ImageBackground>
        {/* -----------------------------------------------------------------2------------------------------------------------------- */}
        <ImageBackground
          source={require("@/assets/AR/ARCard2.png")}
          style={{ height: 161, width: 231, marginLeft: 32 }}
        >
          <View style={{ flexDirection: "row", padding: 16 }}>
            <View
              style={{
                backgroundColor: "#5A5150",
                height: 25,
                width: 25,
                borderRadius: 50,
                borderWidth: 0.5,
                borderColor: "#F4EFE9",
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#EDDCDB",
                height: 25,
                width: 25,
                borderRadius: 50,
                marginLeft: 4,
                borderWidth: 0.5,
                borderColor: "#F4EFE9",
              }}
            ></View>
          </View>
          <Text
            style={{
              fontFamily: "Montserrat-SemiBold",
              fontSize: 16,
              color: "#E2D5C2",
              marginLeft: 16,
              marginTop: -8,
            }}
          >
            Tefal Saucepan
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-Light",
              fontSize: 12,
              marginLeft: 16,
              color: "#E2D5C2",
            }}
          >
            RM139.00
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 12, marginTop: 8 }}>
            <Pressable
              style={{
                backgroundColor: "#F36244",
                height: 50,
                width: 50,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#877571",
              }}
            >
              <Image
                source={require("@/assets/AR/Cleaning.png")}
                style={{ width: 10, height: 25 }}
              ></Image>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#F36244",
                height: 50,
                width: 50,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#877571",
                marginLeft: 4,
              }}
            >
              <Image
                source={require("@/assets/AR/Fire.png")}
                style={{ width: 20, height: 22 }}
              ></Image>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#F36244",
                height: 50,
                width: 50,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#877571",
                marginLeft: 4,
              }}
            >
              <Image
                source={require("@/assets/AR/Spoonnfork.png")}
                style={{ width: 25, height: 23 }}
              ></Image>
            </Pressable>
          </View>
          <Pressable
            style={{
              backgroundColor: "#F4EFE9",
              borderWidth: 0.5,
              borderColor: "#F36244",
              width: 105,
              height: 27,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: 0,
              top: 0,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-SemiBold",
                fontSize: 14,
                color: "#F36244",
              }}
            >
              Buy Now
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#F36244",
              borderWidth: 0.5,
              borderColor: "#877571",
              width: 46,
              height: 46,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: 0,
              bottom: 0,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Regular",
                fontSize: 36,
                color: "#F4EFE9",
                marginTop: -4,
              }}
            >
              +
            </Text>
          </Pressable>
        </ImageBackground>
        {/* ---------------------------------------------------------------3-------------------------------------------------------------- */}
        <ImageBackground
          source={require("@/assets/AR/ARCard3.png")}
          style={{ height: 161, width: 231, marginLeft: 32 }}
        >
          <View style={{ flexDirection: "row", padding: 16 }}>
            <View
              style={{
                backgroundColor: "#5A5150",
                height: 25,
                width: 25,
                borderRadius: 50,
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#783531",
                height: 25,
                width: 25,
                borderRadius: 50,
                marginLeft: 4,
              }}
            ></View>
          </View>
          <Text
            style={{
              fontFamily: "Montserrat-SemiBold",
              fontSize: 16,
              color: "#525252",
              marginLeft: 16,
              marginTop: -8,
            }}
          >
            Tefal Deep Frypan
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-Light",
              fontSize: 12,
              marginLeft: 16,
            }}
          >
            RM139.00
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 12, marginTop: 8 }}>
            <Pressable
              style={{
                backgroundColor: "#F36244",
                height: 50,
                width: 50,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#877571",
              }}
            >
              <Image
                source={require("@/assets/AR/Cleaning.png")}
                style={{ width: 10, height: 25 }}
              ></Image>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#F36244",
                height: 50,
                width: 50,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#877571",
                marginLeft: 4,
              }}
            >
              <Image
                source={require("@/assets/AR/Fire.png")}
                style={{ width: 20, height: 22 }}
              ></Image>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#F36244",
                height: 50,
                width: 50,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#877571",
                marginLeft: 4,
              }}
            >
              <Image
                source={require("@/assets/AR/Spoonnfork.png")}
                style={{ width: 25, height: 23 }}
              ></Image>
            </Pressable>
          </View>
          <Pressable
            style={{
              backgroundColor: "#F4EFE9",
              borderWidth: 0.5,
              borderColor: "#F36244",
              width: 105,
              height: 27,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: 0,
              top: 0,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-SemiBold",
                fontSize: 14,
                color: "#F36244",
              }}
            >
              Buy Now
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#F36244",
              borderWidth: 0.5,
              borderColor: "#877571",
              width: 46,
              height: 46,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: 0,
              bottom: 0,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Regular",
                fontSize: 36,
                color: "#F4EFE9",
                marginTop: -4,
              }}
            >
              +
            </Text>
          </Pressable>
        </ImageBackground>
        {/* ---------------------------------------------------------------------4---------------------------------------------------------------- */}
        <ImageBackground
          source={require("@/assets/AR/ARCard4.png")}
          style={{ height: 161, width: 231, marginLeft: 32 }}
        >
          <View style={{ flexDirection: "row", padding: 16 }}>
            <View
              style={{
                backgroundColor: "#5A5150",
                height: 25,
                width: 25,
                borderRadius: 50,
                borderWidth: 0.5,
                borderColor: "#F4EFE9",
              }}
            ></View>
            <View
              style={{
                backgroundColor: "#898989",
                height: 25,
                width: 25,
                borderRadius: 50,
                marginLeft: 4,
                borderWidth: 0.5,
                borderColor: "#F4EFE9",
              }}
            ></View>
          </View>
          <Text
            style={{
              fontFamily: "Montserrat-SemiBold",
              fontSize: 16,
              color: "#E2D5C2",
              marginLeft: 16,
              marginTop: -8,
            }}
          >
            Tefal Stewpot
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-Light",
              fontSize: 12,
              marginLeft: 16,
              color: "#E2D5C2",
            }}
          >
            RM299.00
          </Text>
          <View style={{ flexDirection: "row", marginLeft: 12, marginTop: 8 }}>
            <Pressable
              style={{
                backgroundColor: "#F36244",
                height: 50,
                width: 50,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#877571",
              }}
            >
              <Image
                source={require("@/assets/AR/Cleaning.png")}
                style={{ width: 10, height: 25 }}
              ></Image>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#F36244",
                height: 50,
                width: 50,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#877571",
                marginLeft: 4,
              }}
            >
              <Image
                source={require("@/assets/AR/Fire.png")}
                style={{ width: 20, height: 22 }}
              ></Image>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#F36244",
                height: 50,
                width: 50,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.5,
                borderColor: "#877571",
                marginLeft: 4,
              }}
            >
              <Image
                source={require("@/assets/AR/Spoonnfork.png")}
                style={{ width: 25, height: 23 }}
              ></Image>
            </Pressable>
          </View>
          <Pressable
            style={{
              backgroundColor: "#F4EFE9",
              borderWidth: 0.5,
              borderColor: "#F36244",
              width: 105,
              height: 27,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: 0,
              top: 0,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-SemiBold",
                fontSize: 14,
                color: "#F36244",
              }}
            >
              Buy Now
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#F36244",
              borderWidth: 0.5,
              borderColor: "#877571",
              width: 46,
              height: 46,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              right: 0,
              bottom: 0,
            }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Regular",
                fontSize: 36,
                color: "#F4EFE9",
                marginTop: -4,
              }}
            >
              +
            </Text>
          </Pressable>
        </ImageBackground>
        <View style={{ width: 120 }}></View>
      </ScrollView>
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

export default ARScreen;
