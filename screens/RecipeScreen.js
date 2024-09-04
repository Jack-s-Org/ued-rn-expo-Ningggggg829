import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Pressable,
} from "react-native";
import RecipeCarousel from "@/components/RecipeCarousel";
import Ionicons from "@expo/vector-icons/Ionicons";

const RecipeScreen = ({ navigation }) => {
  return (
    <View style={{ height: 844, width: 390 }}>
      <ImageBackground
        source={require("@/assets/Recipe/RecipeBG.png")}
        style={{ height: 844, width: 390 }}
      >
        <Pressable
          style={{
            height: 50,
            width: 50,
            zIndex: 1,
            marginTop: 50,
            marginLeft: 20,
          }}
          onPress={() => {
            navigation.replace("Main", { screen: "Home" });
          }}
        >
          <Ionicons name="arrow-back" size={50} color="#F4EFE9" />
        </Pressable>
        <View style={{ marginTop: 370, marginLeft: 20 }}>
          <Text
            style={{
              color: "#F36244",
              fontFamily: "Montserrat-Bold",
              fontSize: 24,
            }}
          >
            Western Cuisine
          </Text>
        </View>
        <RecipeCarousel></RecipeCarousel>
      </ImageBackground>
    </View>
  );
};

export default RecipeScreen;
