import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const RecipeChoosePortion = ({ navigation }) => {
  const [selectedPortion, setSelectedPortion] = useState(null);
  const [isDonePressed, setIsDonePressed] = useState(false);

  const handlePortionPress = (portion) => {
    setSelectedPortion(portion);
  };

  return (
    <View style={{ height: 844, width: 390 }}>
      <LinearGradient
        colors={["#F8ECDC", "#E7D6C3"]}
        start={[100, 300]}
        end={[300, 30]}
      >
        <View style={{ height: 844, width: 390 }}>
          <ImageBackground
            source={require("@/assets/ChoosePortion/ChooseportionBG.png")}
            style={{ width: 393, height: 844, marginTop: 0 }}
          >
            {/* Back button */}
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
                navigation.replace("Main", { screen: "Recipe" });
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

            <View style={{ marginTop: 100, marginLeft: 30 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-Light",
                  color: "#F36244",
                  fontSize: 24,
                }}
              >
                Western Cuisine
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-SemiBold",
                  color: "#F36244",
                  fontSize: 36,
                  width: 200,
                }}
              >
                Spaghetti Bolognese
              </Text>
            </View>

            <View>
              <Image
                source={require("@/assets/ChoosePortion/SpaghettiBolognese.png")}
                style={{
                  height: 312,
                  width: 390,
                  marginLeft: -8,
                  marginTop: 8,
                }}
              />
            </View>

            <View style={{ marginLeft: 30, marginTop: 16 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-Light",
                  color: "#877571",
                  fontSize: 20,
                }}
              >
                Choose Your Portion
              </Text>
            </View>

            <View
              style={{
                width: 305,
                height: 64,
                borderWidth: 0.5,
                borderColor: "#877571",
                borderRadius: 16,
                marginLeft: 30,
                marginTop: 8,
                flexDirection: "row",
              }}
            >
              {[1, 2, 3, 4, 5].map((portion) => (
                <Pressable
                  key={portion}
                  style={[
                    styles.portionButton,
                    selectedPortion === portion && styles.buttonPressed,
                  ]}
                  onPress={() => handlePortionPress(portion)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      selectedPortion === portion && styles.textPressed,
                    ]}
                  >
                    {portion}
                  </Text>
                </Pressable>
              ))}
            </View>

            <ImageBackground
              source={require("@/assets/ChoosePortion/RecipePortionBlack.png")}
              style={{
                height: 149,
                width: 423,
                marginLeft: -4,
                marginTop: 20,
              }}
            >
              <Pressable
                style={[
                  styles.doneButton,
                  isDonePressed && styles.doneButtonPressed,
                ]}
                onPressIn={() => setIsDonePressed(true)}
                onPressOut={() => setIsDonePressed(false)}
                onPress={() => {
                  navigation.replace("Main", { screen: "RecipeDetails" });
                }}
              >
                <Text
                  style={[
                    styles.doneButtonText,
                    isDonePressed && styles.doneTextPressed,
                  ]}
                >
                  Done
                </Text>
              </Pressable>
            </ImageBackground>
          </ImageBackground>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  portionButton: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "transparent",
    marginTop: 6,
    marginLeft: 9,
  },
  buttonPressed: {
    backgroundColor: "#F36244",
  },
  buttonText: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
    color: "#525252",
  },
  textPressed: {
    color: "#FFF",
  },
  doneButton: {
    width: 290,
    height: 40,
    borderWidth: 0.5,
    borderColor: "#E2D5C2",
    borderRadius: 100,
    marginLeft: 40,
    marginTop: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  doneButtonPressed: {
    backgroundColor: "#F36244",
  },
  doneButtonText: {
    fontFamily: "Montserrat-Regular",
    color: "#E2D5C2",
  },
  doneTextPressed: {
    color: "#FFF",
  },
});

export default RecipeChoosePortion;
