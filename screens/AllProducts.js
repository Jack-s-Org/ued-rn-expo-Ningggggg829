import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Pressable,
  Image
} from "react-native";
import ProductsCarousel from "@/components/ProductsCarousel";

const AllProductsScreen = ({ navigation }) => {
  return (
    <View style={{ height: 844, width: 390 }}>
      <ImageBackground
        source={require("@/assets/Products/ProductBG.png")}
        style={{ height: 854, width: 390 }}
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
        <View style={{ marginTop: 140, marginLeft: 20 }}>
          <Text
            style={{
              color: "#F36244",
              fontFamily: "Montserrat-SemiBold",
              fontSize: 24,
            }}
          >
            Products
          </Text>
        </View>

        <View style={{ position: "absolute", top: 155 }}>
          <ProductsCarousel></ProductsCarousel>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AllProductsScreen;
