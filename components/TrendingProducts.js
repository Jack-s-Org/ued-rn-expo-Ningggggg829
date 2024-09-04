import React from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const trendingProducts = {
  cookware: [
    {
      name: "Tefal Starter Stewpot",
      price: "RM99.00",
      productImage: require("@/assets/HomeScreen/stewpot.png"),
      imageBackground: require("@/assets/HomeScreen/stewpot-frame.png"),
    },
    {
      name: "Tefal Revive Frypan",
      price: "RM199.00",
      productImage: require("@/assets/HomeScreen/reviveFrypan.png"),
      imageBackground: require("@/assets/HomeScreen/frypan-frame.png"),
    },
    {
      name: "Tefal Saucepan",
      price: "RM139.00",
      productImage: require("@/assets/HomeScreen/saucepan.png"),
      imageBackground: require("@/assets/HomeScreen/saucepan-frame.png"),
    },
  ],
  kitchenware: [
    {
      name: "Comfort Chef Knife ",
      price: "RM199.00",
      productImage: require("@/assets/HomeScreen/KitchenKnife.png"),
      imageBackground: require("@/assets/HomeScreen/kitchenware_frame.png"),
    },
    {
      name: "Natural 3-Piece Wooden Spatula",
      price: "RM89.00",
      productImage: require("@/assets/HomeScreen/Woodspoon.png"),
      imageBackground: require("@/assets/HomeScreen/kitchenware_frame.png"),
    },
  ],
};

function TrendingProducts({ category }) {
  const navigation = useNavigation();
  const products = trendingProducts[category] || [];

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: "row",
        marginLeft: 8,
        marginTop: 8,
      }}
    >
      {products.map((product, index) => (
        <View
          key={index}
          style={{
            height: 260,
            width: 240,
            marginHorizontal: 8,
            justifyContent: "center",
            alignItems: "flex-start",
            marginRight: 10,
          }}
        >
          <View
            style={{
              borderRadius: 20,
            }}
          >
            <ImageBackground
              source={product.imageBackground}
              style={{ resizeMode: "cover", height: 240, width: 240 }}
            >
              <Pressable
                style={{
                  backgroundColor: "#F36244",
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  borderWidth: 0.5,
                  borderColor: "#877571",
                  position: "absolute",
                  bottom: 6,
                  right: 6,
                }}
              >
                <Text
                  style={{
                    fontSize: 50,
                    fontFamily: "Montserrat-Light",
                    marginTop: -10,
                    color: "#F4EFE9",
                  }}
                >
                  +
                </Text>
              </Pressable>
              <Image
                source={product.productImage}
                style={{ width: 213, height: 213, marginTop: -10 }}
              />
              <View
                style={{
                  marginTop: -35,
                  marginLeft: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Montserrat-SemiBold",
                    color: "#877571",
                    fontSize: 14,
                  }}
                >
                  {product.name}
                </Text>
                <Text
                  style={{
                    fontFamily: "Montserrat-Light",
                    color: "#877571",
                  }}
                >
                  {product.price}
                </Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      ))}
      <View
        style={{
          height: 230,
          width: 65,
          marginTop: 14,
          borderRadius: 8,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          marginLeft: 4,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 8,
          borderWidth: 0.5,
          borderColor: "#E2D5C2",
        }}
      >
        <Pressable>
          <LinearGradient
            colors={["rgba(226, 213, 194, 1)", "rgba(226, 213, 194, 0)"]}
            start={[-0.5, 0]}
            end={[1, 0]}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 8,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            <Text
              style={{
                transform: [{ rotate: "-90deg" }],
                color: "#FFE7C3",
                fontFamily: "Montserrat-Light",
                textAlign: "center",
                marginTop: 100,
                fontSize: 16,
                width: 68,
                marginLeft: 0,
                zIndex: 1,
              }}
              onPress={() => {
                navigation.replace("Main", { screen: "Products" });
              }}
            >
              Show All
            </Text>
          </LinearGradient>
        </Pressable>
      </View>
    </ScrollView>
  );
}

export default TrendingProducts;
