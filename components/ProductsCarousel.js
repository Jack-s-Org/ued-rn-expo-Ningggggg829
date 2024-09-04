import * as React from "react";
import Carousel from "react-native-reanimated-carousel";
import Slide from "./ProductsSlide";
import { useWindowDimensions, View, Pressable } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const ProductsCarousel = () => {
  const windowWidth = useWindowDimensions().width;
  const scrollOffsetValue = useSharedValue(0);
  const navigation = useNavigation();

  const data = [
    <Pressable
      onPress={() => {
        navigation.navigate("Recipe", { cuisine: "Western" });
      }}
    >
      <Slide
        index={0}
        backgroundImage={require("@/assets/Products/unlimitedfrypan.png")}
      />
    </Pressable>,
    <Slide
      index={1}
      backgroundImage={require("@/assets/Products/tefalstarterstewpot.png")}
    />,
    <Slide
      index={2}
      backgroundImage={require("@/assets/Products/tefalsaucepan.png")}
    />,
    <Slide
      index={3}
      backgroundImage={require("@/assets/Products/somatchasaucepan.png")}
    />,
    <Slide
      index={4}
      backgroundImage={require("@/assets/Products/somatchafrypan.png")}
    />,
  ];

  const [index, setIndex] = React.useState(0);
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
        data={data}
        onSnapToItem={(index) => setIndex(index)}
        renderItem={({ index }) => data[index]}
      />
    </View>
  );
};

export default ProductsCarousel;
