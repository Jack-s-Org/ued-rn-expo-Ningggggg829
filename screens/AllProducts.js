import { StyleSheet, Text, ImageBackground, View } from "react-native";
import ProductsCarousel from "@/components/ProductsCarousel";

const AllProductsScreen = () => {
  return (
    <View style={{ height: 844, width: 390 }}>
      <ImageBackground
        source={require("@/assets/Products/ProductBG.png")}
        style={{ height: 804, width: 390 }}
      >
        <View style={{ marginTop: 120, marginLeft: 20 }}>
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

        <View style={{ position: "absolute", top: 130 }}>
          <ProductsCarousel></ProductsCarousel>
        </View>
      </ImageBackground>
    </View>
  );
};

export default AllProductsScreen;
