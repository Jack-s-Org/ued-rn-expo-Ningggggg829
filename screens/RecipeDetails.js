import React, { useState } from "react";
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

const RecipeDetails = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState("ingredients");

  const detailsContent = () => {
    if (selectedCategory === "ingredients") {
      return (
        <ScrollView
          style={{ flexDirection: "column", height: 450 }}
          showsVerticalScrollIndicator={false}
        >
          <ImageBackground
            source={require("@/assets/RecipeDetails/ingredientsDetails.png")}
            style={{ width: 285, height: 88, marginBottom: 8 }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 140,
                marginTop: 8,
              }}
            >
              Spaghetti Noodles
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-Light",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 140,
              }}
            >
              100g
            </Text>
          </ImageBackground>
          <ImageBackground
            source={require("@/assets/RecipeDetails/ingredientsDetails2.png")}
            style={{ width: 285, height: 88, marginBottom: 8 }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 140,
                marginTop: 8,
              }}
            >
              Spaghetti Noodles
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-Light",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 140,
              }}
            >
              100g
            </Text>
          </ImageBackground>
          <ImageBackground
            source={require("@/assets/RecipeDetails/ingredientsDetails3.png")}
            style={{ width: 285, height: 88, marginBottom: 8 }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 140,
                marginTop: 8,
              }}
            >
              Spaghetti Noodles
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-Light",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 140,
              }}
            >
              100g
            </Text>
          </ImageBackground>
          <ImageBackground
            source={require("@/assets/RecipeDetails/ingredientsDetails4.png")}
            style={{ width: 285, height: 88, marginBottom: 8 }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 140,
                marginTop: 8,
              }}
            >
              Spaghetti Noodles
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-Light",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 140,
              }}
            >
              100g
            </Text>
          </ImageBackground>
          <ImageBackground
            source={require("@/assets/RecipeDetails/ingredientsDetails5.png")}
            style={{ width: 285, height: 88, marginBottom: 8 }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 140,
                marginTop: 8,
              }}
            >
              Spaghetti Noodles
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-Light",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 140,
              }}
            >
              100g
            </Text>
          </ImageBackground>
          <ImageBackground
            source={require("@/assets/RecipeDetails/ingredientsDetails6.png")}
            style={{ width: 285, height: 88, marginBottom: 8 }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 140,
                marginTop: 8,
              }}
            >
              Spaghetti Noodles
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-Light",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 140,
              }}
            >
              100g
            </Text>
          </ImageBackground>
          <View style={{ height: 20 }}></View>
        </ScrollView>
      );
    } else if (selectedCategory === "instructions") {
      return (
        <ScrollView
          style={{ flexDirection: "column", height: 450 }}
          showsVerticalScrollIndicator={false}
        >
          <ImageBackground
            source={require("@/assets/RecipeDetails/instructioncard.png")}
            style={{ width: 285, height: 88, marginBottom: 8 }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Montserrat-SemiBold",
                  fontSize: 24,
                  color: "#E2D5C2",
                  marginLeft: 32,
                  marginTop: 20,
                }}
              >
                01
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-Light",
                  fontSize: 12,
                  color: "#E2D5C2",
                  marginLeft: 20,
                  width: 184,
                  marginTop: 20,
                }}
              >
                Finely chop 1/4 of an onion, mince 1 garlic clove
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("@/assets/RecipeDetails/instructioncard.png")}
            style={{ width: 285, height: 88, marginBottom: 8 }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Montserrat-SemiBold",
                  fontSize: 24,
                  color: "#E2D5C2",
                  marginLeft: 32,
                  marginTop: 20,
                }}
              >
                02
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-Light",
                  fontSize: 12,
                  color: "#E2D5C2",
                  marginLeft: 20,
                  width: 184,
                  marginTop: 10,
                }}
              >
                Heat 1/2 tbsp of olive oil. Add 125g of ground turkey or chicken
                to the pan and cook until browned.
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("@/assets/RecipeDetails/instructioncard.png")}
            style={{ width: 285, height: 88, marginBottom: 8 }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Montserrat-SemiBold",
                  fontSize: 24,
                  color: "#E2D5C2",
                  marginLeft: 32,
                  marginTop: 20,
                }}
              >
                03
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-Light",
                  fontSize: 12,
                  color: "#E2D5C2",
                  marginLeft: 20,
                  width: 184,
                  marginTop: 16,
                }}
              >
                Then, add 200g of canned tomatoes. Season with salt and pepper.
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("@/assets/RecipeDetails/instructioncard.png")}
            style={{ width: 285, height: 88, marginBottom: 8 }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Montserrat-SemiBold",
                  fontSize: 24,
                  color: "#E2D5C2",
                  marginLeft: 32,
                  marginTop: 20,
                }}
              >
                04
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-Light",
                  fontSize: 12,
                  color: "#E2D5C2",
                  marginLeft: 20,
                  width: 184,
                  marginTop: 12,
                }}
              >
                Reduce the heat and let the sauce simmer for about 30 minutes,
                stirring occasionally.
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("@/assets/RecipeDetails/instructioncard.png")}
            style={{ width: 285, height: 88, marginBottom: 8 }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Montserrat-SemiBold",
                  fontSize: 24,
                  color: "#E2D5C2",
                  marginLeft: 32,
                  marginTop: 20,
                }}
              >
                05
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-Light",
                  fontSize: 12,
                  color: "#E2D5C2",
                  marginLeft: 20,
                  width: 184,
                  marginTop: 10,
                }}
              >
                Cook 100g of spaghetti according to package instructions. Drain
                the pasta once it's cooked.
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("@/assets/RecipeDetails/instructioncard.png")}
            style={{ width: 285, height: 88, marginBottom: 8 }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "Montserrat-SemiBold",
                  fontSize: 24,
                  color: "#E2D5C2",
                  marginLeft: 32,
                  marginTop: 20,
                }}
              >
                06
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-Light",
                  fontSize: 12,
                  color: "#E2D5C2",
                  marginLeft: 20,
                  width: 184,
                  marginTop: 20,
                }}
              >
                Plate the spaghetti and top with the Bolognese sauce.
              </Text>
            </View>
          </ImageBackground>
          <View style={{ height: 20 }}></View>
        </ScrollView>
      );
    } else if (selectedCategory === "pots") {
      return (
        <View style={{ flexDirection: "column" }}>
          <ImageBackground
            source={require("@/assets/RecipeDetails/potscard1.png")}
            style={{ width: 285, height: 173 }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 150,
                marginTop: 30,
                width: 139,
              }}
            >
              Tefal Starter Stewpot
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-Light",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 150,
                width: 139,
              }}
            >
              RM99.00
            </Text>
            <View
              style={{
                borderColor: "#E2D5C2",
                borderWidth: 0.5,
                borderRadius: 50,
                height: 43,
                width: 172,
                marginTop: 12,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",
                  fontSize: 16,
                  color: "#E2D5C2",
                }}
              >
                {" "}
                View More Details
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("@/assets/RecipeDetails/potscard2.png")}
            style={{ width: 285, height: 173 }}
          >
            <Text
              style={{
                fontFamily: "Montserrat-Medium",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 150,
                marginTop: 30,
                width: 139,
              }}
            >
              Tefal So Matcha Saucepan
            </Text>
            <Text
              style={{
                fontFamily: "Montserrat-Light",
                fontSize: 16,
                color: "#E2D5C2",
                marginLeft: 150,
                width: 139,
              }}
            >
              RM139.00
            </Text>
            <View
              style={{
                borderColor: "#E2D5C2",
                borderWidth: 0.5,
                borderRadius: 50,
                height: 43,
                width: 172,
                marginTop: 12,
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Montserrat-Regular",
                  fontSize: 16,
                  color: "#E2D5C2",
                }}
              >
                {" "}
                View More Details
              </Text>
            </View>
          </ImageBackground>
        </View>
      );
    }
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
                navigation.replace("Main", { screen: "RecipePortion" });
              }}
            >
              <Image
                source={require("@/assets/NFCData/backButton.png")}
                style={{ width: 40, height: 40 }}
              />
            </Pressable>

            <View style={{ marginTop: 100, marginLeft: 30 }}>
              <Text
                style={{
                  fontFamily: "Montserrat-Light",
                  color: "#F36244",
                  fontSize: 16,
                }}
              >
                Western Cuisine
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-SemiBold",
                  color: "#F36244",
                  fontSize: 32,
                  width: 200,
                }}
              >
                Spaghetti Bolognese
              </Text>
              <Text
                style={{
                  fontFamily: "Montserrat-SemiBold",
                  color: "#EEA18A",
                  fontSize: 24,
                  width: 200,
                }}
              >
                ⏱︎ 30min
              </Text>
            </View>
            <Image
              source={require("@/assets/ChoosePortion/SpaghettiBolognese.png")}
              style={{
                height: 130,
                width: 171,
                position: "absolute",
                right: 20,
                top: 100,
              }}
            />

            <ImageBackground
              source={require("@/assets/RecipeDetails/RecipeDetailsBlack.png")}
              style={{
                height: 627,
                width: 317,
                marginLeft: 24,
                marginTop: 20,
              }}
            >
              <View style={{ flexDirection: "row", marginLeft: 12 }}>
                {/* Ingredients Button */}
                <Pressable
                  style={[
                    styles.categoryButton,
                    selectedCategory === "ingredients" && styles.buttonPressed,
                  ]}
                  onPress={() => setSelectedCategory("ingredients")}
                >
                  <Text
                    style={[
                      styles.categoryButtonText,
                      selectedCategory === "ingredients" && styles.textPressed,
                    ]}
                  >
                    INGREDIENTS
                  </Text>
                </Pressable>

                {/* Instructions Button */}
                <Pressable
                  style={[
                    styles.categoryButton,
                    selectedCategory === "instructions" && styles.buttonPressed,
                  ]}
                  onPress={() => setSelectedCategory("instructions")}
                >
                  <Text
                    style={[
                      styles.categoryButtonText,
                      selectedCategory === "instructions" && styles.textPressed,
                    ]}
                  >
                    INSTRUCTIONS
                  </Text>
                </Pressable>

                {/* Pots Button */}
                <Pressable
                  style={[
                    styles.potsButton,
                    selectedCategory === "pots" && styles.buttonPressed,
                  ]}
                  onPress={() => setSelectedCategory("pots")}
                >
                  <Text
                    style={[
                      styles.categoryButtonText,
                      selectedCategory === "pots" && styles.textPressed,
                    ]}
                  >
                    POTS
                  </Text>
                </Pressable>
              </View>

              {/* Render content based on the selected category */}
              <View style={{ marginTop: 20, paddingHorizontal: 20 }}>
                {detailsContent()}
              </View>
            </ImageBackground>
          </ImageBackground>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryButton: {
    width: 101,
    height: 32,
    borderWidth: 0.5,
    borderColor: "#E2D5C2",
    borderRadius: 100,
    marginLeft: 8,
    marginTop: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  potsButton: {
    width: 60,
    height: 32,
    borderWidth: 0.5,
    borderColor: "#E2D5C2",
    borderRadius: 100,
    marginLeft: 8,
    marginTop: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonPressed: {
    backgroundColor: "#F36244",
  },
  categoryButtonText: {
    fontFamily: "Montserrat-Regular",
    color: "#E2D5C2",
    fontSize: 12,
  },
  textPressed: {
    color: "#FFF",
  },
  contentText: {
    color: "#FFF",
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
});

export default RecipeDetails;
