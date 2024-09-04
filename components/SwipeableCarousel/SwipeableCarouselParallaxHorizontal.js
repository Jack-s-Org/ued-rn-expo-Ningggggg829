import * as React from "react";
import Carousel from "react-native-reanimated-carousel";
import Slide from "./Slide";
import { useWindowDimensions, View, Pressable } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const SwipeableCarouselParallaxHorizontal = () => {
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
        backgroundImage={require("@/assets/HomeScreen/Cuisine/WesternCuisine.png")}
      />
    </Pressable>,
    <Slide
      index={1}
      backgroundImage={require("@/assets/HomeScreen/Cuisine/KoreanCuisine.png")}
    />,
    <Slide
      index={2}
      backgroundImage={require("@/assets/HomeScreen/Cuisine/JapaneseCuisine.png")}
    />,
    <Slide
      index={3}
      backgroundImage={require("@/assets/HomeScreen/Cuisine/ThailandCuisine.png")}
    />,
    <Slide
      index={4}
      backgroundImage={require("@/assets/HomeScreen/Cuisine/AsianCuisine.png")}
    />,
    <Slide
      index={5}
      backgroundImage={require("@/assets/HomeScreen/Cuisine/MalayCuisine.png")}
    />,
    <Slide
      index={6}
      backgroundImage={require("@/assets/HomeScreen/Cuisine/IndianCuisine.png")}
    />,
  ];

  const [index, setIndex] = React.useState(0);
  const isVertical = false;

  const baseOptions = isVertical
    ? {
        vertical: true,
        width: 184,
        height: 222,
      }
    : {
        vertical: false,
        width: 200,
        height: 222,
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
          parallaxScrollingOffset: 60,
        }}
        data={data}
        onSnapToItem={(index) => setIndex(index)}
        renderItem={({ index }) => data[index]}
      />
    </View>
  );
};

export default SwipeableCarouselParallaxHorizontal;
