import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Pressable,
  Animated,
} from "react-native";
import React, { useState, useRef } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import AntDesign from "@expo/vector-icons/AntDesign";

const SignInScreen = ({ navigation }) => {
  const [text, onChangeText] = useState();
  const [number, onChangeNumber] = useState("");
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View>
      <ImageBackground
        source={require("@/assets/LogIn/LogInPage.png")}
        style={{
          height: 844,
          width: 360,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 28,
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-Regular",
              fontSize: 24,
              color: "#F4EFE9",
            }}
          >
            Hello,
          </Text>
          <Text
            style={{
              fontFamily: "Montserrat-SemiBold",
              fontSize: 28,
              color: "#F4EFE9",
            }}
          >
            Welcome To{" "}
            <Text style={{ fontFamily: "Montserrat-Alternates" }}>Tefal</Text>
          </Text>
        </View>
        <ImageBackground
          source={require("@/assets/LogIn/LogInCard.png")}
          style={{
            height: 630,
            width: 327,
            marginBottom: -100,
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "Montserrat-SemiBold",
                color: "#F36244",
                fontSize: 20,
                marginTop: 80,
                marginLeft: 28,
              }}
            >
              Log In
            </Text>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 8,
              }}
            >
              <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Your Email"
                placeholderTextColor="#F3A896"
              />

              <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Your Password"
                placeholderTextColor="#F3A896"
                keyboardType="numeric"
                secureTextEntry={true}
              />
            </View>
          </View>
          <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
            <Pressable
              style={styles.button}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              onPress={() => {
                navigation.replace("Main", { screen: "Home" });
              }}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>
          </Animated.View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              height: 53,
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                color: "#877571",
                fontFamily: "Montserrat-Light",
                fontSize: 12,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 12,
              }}
            >
              Sign up with
            </Text>

            <MaterialCommunityIcons
              name="facebook"
              size={24}
              color="#877571"
              style={{ marginRight: 4 }}
            />

            <AntDesign
              name="apple1"
              size={24}
              color="#877571"
              style={{ marginRight: 4 }}
            />
            <FontAwesome6
              name="google"
              size={24}
              color="#877571"
              style={{ marginRight: 4 }}
            />
          </View>
          <View
            style={{
              width: 199,
              height: 30,
              alignSelf: "center",
              position: "absolute",
              bottom: 80,
            }}
          >
            <Text
              style={{
                color: "#F36244",
                fontFamily: "Montserrat-Light",
                fontSize: 10,
                textAlign: "center",
              }}
            >
              By signing up you agree to our{" "}
              <Text style={{ textDecorationLine: "underline" }}>
                Terms of Use
              </Text>{" "}
              and{" "}
              <Text style={{ textDecorationLine: "underline" }}>
                Privacy Policy
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </ImageBackground>
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
  button: {
    backgroundColor: "#F36244",
    padding: 10,
    borderRadius: 50,
    height: 40,
    width: 284,
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 0.5,
    borderColor: "#877571",
    marginTop: 40,
  },
  buttonText: {
    color: "#F4EFE9",
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    textAlign: "center",
  },
});

export default SignInScreen;
