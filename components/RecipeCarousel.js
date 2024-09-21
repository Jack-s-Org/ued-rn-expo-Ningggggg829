import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  Pressable,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Entypo from "@expo/vector-icons/Entypo";

const Recipe = [
  {
    name: "Spaghetti Bolognese",
    Ingredients: "Tomato sauce, hamburger meat, spaghetti noodles",
    time: "30min",
    productImage: require("@/assets/Recipe/bolognese.png"),
    imageBackground: require("@/assets/Recipe/Recipecard.png"),
  },
  {
    name: "Spaghetti Carbonara",
    Ingredients: "Spaghetti, pancetta, parmesan, eggs, sea salt, butter",
    time: "35min",
    productImage: require("@/assets/Recipe/carbonara.png"),
    imageBackground: require("@/assets/Recipe/Recipecard.png"),
  },
  {
    name: "Beef Steak",
    Ingredients:
      "Rib eye, red pepper flakes, butter, olive oil, garlic, soy sauce",
    time: "2hr 30 min",
    productImage: require("@/assets/Recipe/beefSteak.png"),
    imageBackground: require("@/assets/Recipe/Recipecard.png"),
  },
  {
    name: "Parmesan Potatoes",
    Ingredients: "Red potatoes, parmesan cheese, Italian seasoning, garlic",
    time: "1hr",
    productImage: require("@/assets/Recipe/potatoes.png"),
    imageBackground: require("@/assets/Recipe/Recipecard.png"),
  },
  {
    name: "Chopped Salad",
    Ingredients: "Black beans, ranch dressing, sweet corn, blue corn tortilla",
    time: "15min",
    productImage: require("@/assets/Recipe/salad.png"),
    imageBackground: require("@/assets/Recipe/Recipecard.png"),
  },
  {
    name: "Bacon Burger",
    Ingredients: "Ground beef, frozen onion rings, bacon, barbecue sauce",
    time: "45min",
    productImage: require("@/assets/Recipe/burger.png"),
    imageBackground: require("@/assets/Recipe/Recipecard.png"),
  },
  {
    name: "Garlic Butter Salmon",
    Ingredients:
      "Salmon fillets, olive oil, lemon juice, garlic, salted butter",
    time: "15min",
    productImage: require("@/assets/Recipe/salmon.png"),
    imageBackground: require("@/assets/Recipe/Recipecard.png"),
  },
  {
    name: "Mushroom Soup",
    Ingredients: "Mushroom, bread, olive oil, croutons, black pepper",
    time: "40min",
    productImage: require("@/assets/Recipe/mushroomSoup.png"),
    imageBackground: require("@/assets/Recipe/Recipecard.png"),
  },
  {
    name: "Tomato Baked Rice",
    Ingredients:
      "Spinach, grain white rice, mushrooms, garlic, chopped tomatoes",
    time: "1hr",
    productImage: require("@/assets/Recipe/bakedRice.png"),
    imageBackground: require("@/assets/Recipe/Recipecard.png"),
  },
];

function RecipeCarousel() {
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}
    >
      {Recipe.map((product, index) => (
        <View key={index} style={styles.recipeCard}>
          <View style={styles.imageBackgroundContainer}>
            <ImageBackground
              source={product.imageBackground}
              style={styles.imageBackground}
            >
              <ExploreButton
                isNavigable={product.name === "Spaghetti Bolognese"}
                onPress={() => {
                  if (product.name === "Spaghetti Bolognese") {
                    navigation.navigate("RecipePortion");
                  }
                }}
              />
              <Image
                source={product.productImage}
                style={styles.productImage}
              />
              <View style={styles.textContainer}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.ingredientsText}>
                  {product.Ingredients}
                </Text>
                <View style={styles.timeContainer}>
                  <Entypo
                    name="time-slot"
                    size={16}
                    color="#D65F47"
                    style={styles.timeIcon}
                  />
                  <Text style={styles.timeText}>{product.time}</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

function ExploreButton({ isNavigable, onPress }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      style={[
        styles.exploreButton,
        { backgroundColor: isPressed ? "#C44E34" : "#F36244" },
      ]}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => {
        setIsPressed(false);
        if (isNavigable) {
          onPress();
        }
      }}
      disabled={!isNavigable}
    >
      <Image
        source={require("@/assets/Recipe/explore.png")}
        style={styles.exploreImage}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexDirection: "row",
    marginLeft: 8,
    marginTop: 8,
  },
  recipeCard: {
    height: 260,
    width: 250,
    marginHorizontal: 16,
    justifyContent: "center",
    alignItems: "flex-start",
    marginRight: 12,
  },
  imageBackgroundContainer: {
    borderRadius: 20,
  },
  imageBackground: {
    resizeMode: "cover",
    height: 257,
    width: 250,
  },
  exploreButton: {
    height: 66,
    width: 66,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "#877571",
    position: "absolute",
    top: 6,
    right: 6,
    zIndex: 1,
  },
  exploreImage: {
    width: 80,
    height: 80,
  },
  productImage: {
    width: 192,
    height: 180,
    position: "absolute",
    right: -40,
    top: 100,
  },
  textContainer: {
    marginTop: 20,
    marginLeft: 20,
  },
  productName: {
    fontFamily: "Montserrat-SemiBold",
    color: "#E2D5C2",
    fontSize: 24,
    width: 140,
  },
  ingredientsText: {
    fontFamily: "Montserrat-Regular",
    color: "#E2D5C2",
    fontSize: 12,
    width: 136,
    marginTop: 4,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timeIcon: {
    marginTop: 8,
    marginRight: 4,
  },
  timeText: {
    fontFamily: "Montserrat-SemiBold",
    color: "#D65F47",
    fontSize: 16,
    marginTop: 8,
  },
});

export default RecipeCarousel;
