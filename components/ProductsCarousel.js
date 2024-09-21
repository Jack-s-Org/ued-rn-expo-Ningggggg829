import * as React from "react";
import Carousel from "react-native-reanimated-carousel";
import Slide from "./ProductsSlide";
import { useWindowDimensions, View, Pressable, Text } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const ProductsCarousel = () => {
  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue(0);
  const navigation = useNavigation();

  const allProducts = [
    {
      id: 1,
      category: "Cookware",
      component: (
        <Pressable
          onPress={() => {
            navigation.navigate("Unlimitedfrypan", { cuisine: "Western" });
          }}
        >
          <Slide
            index={0}
            backgroundImage={require("@/assets/Products/unlimitedfrypan.png")}
          />
        </Pressable>
      ),
    },
    {
      id: 2,
      category: "Cookware",
      component: (
        <Slide
          index={1}
          backgroundImage={require("@/assets/Products/tefalstarterstewpot.png")}
        />
      ),
    },
    {
      id: 3,
      category: "Cookware",
      component: (
        <Slide
          index={2}
          backgroundImage={require("@/assets/Products/tefalsaucepan.png")}
        />
      ),
    },
    {
      id: 4,
      category: "Cookware",
      component: (
        <Slide
          index={3}
          backgroundImage={require("@/assets/Products/somatchasaucepan.png")}
        />
      ),
    },
    {
      id: 5,
      category: "Cookware",
      component: (
        <Slide
          index={4}
          backgroundImage={require("@/assets/Products/somatchafrypan.png")}
        />
      ),
    },
    {
      id: 6,
      category: "Kitchenware",
      component: (
        <Slide
          index={5}
          backgroundImage={require("@/assets/Products/knifeset.png")}
        />
      ),
    },
    {
      id: 7,
      category: "Kitchenware",
      component: (
        <Slide
          index={6}
          backgroundImage={require("@/assets/Products/TefalComfortSantokuKnife.png")}
        />
      ),
    },
    {
      id: 8,
      category: "Kitchenware",
      component: (
        <Slide
          index={7}
          backgroundImage={require("@/assets/Products/TefalIngenioWood.png")}
        />
      ),
    },
    {
      id: 9,
      category: "Kitchenware",
      component: (
        <Slide
          index={8}
          backgroundImage={require("@/assets/Products/Natural3-PieceWoodenSpatula.png")}
        />
      ),
    },
    {
      id: 10,
      category: "Kitchenware",
      component: (
        <Slide
          index={9}
          backgroundImage={require("@/assets/Products/TefalBievenueWhisks.png")}
        />
      ),
    },
  ];

  const [filteredProducts, setFilteredProducts] = React.useState(allProducts);
  const [selectedCategory, setSelectedCategory] = React.useState("Cookware");

  const filterProducts = (category) => {
    setSelectedCategory(category);
    const filtered = allProducts.filter(
      (product) => product.category === category
    );
    setFilteredProducts(filtered);
  };

  const isVertical = false;

  const baseOptions = isVertical
    ? {
        vertical: true,
        width: 384,
        height: 580,
      }
    : {
        vertical: false,
        width: 384,
        height: 580,
      };

  return (
    <View style={{ borderRadius: 12 }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: -20,
          marginBottom: -20,
          marginLeft: 170,
        }}
      >
        <Pressable
          onPress={() => filterProducts("Cookware")}
          style={{
            padding: 10,
            backgroundColor:
              selectedCategory === "Cookware" ? "#F36244" : "transparent",
            borderRadius: 50,
            borderWidth: 0.5,
            borderColor: "#877571",
            zIndex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: selectedCategory === "Cookware" ? "#F4EFE9" : "#877571",
              fontFamily: "Montserrat-Light",
              fontSize: 10,
              textAlign: "center",
            }}
          >
            COOKWARE
          </Text>
        </Pressable>
        <Pressable
          onPress={() => filterProducts("Kitchenware")}
          style={{
            marginHorizontal: 4,
            padding: 10,
            backgroundColor:
              selectedCategory === "Kitchenware" ? "#F36244" : "transparent",
            borderRadius: 50,
            borderWidth: 0.5,
            borderColor: "#877571",
            zIndex: 1,
          }}
        >
          <Text
            style={{
              color: selectedCategory === "Kitchenware" ? "#F4EFE9" : "#877571",
              fontFamily: "Montserrat-Light",
              fontSize: 10,
            }}
          >
            KITCHENWARE
          </Text>
        </Pressable>
      </View>

      <Carousel
        {...baseOptions}
        style={{
          width: windowWidth,
        }}
        loop={false}
        defaultScrollOffsetValue={scrollOffsetValue}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 10,
        }}
        data={filteredProducts}
        renderItem={({ index }) => filteredProducts[index].component}
      />
    </View>
  );
};

export default ProductsCarousel;
