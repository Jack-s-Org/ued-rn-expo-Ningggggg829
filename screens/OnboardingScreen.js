import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Animated,
} from "react-native";
import { Video } from "expo-av";
import { LinearGradient } from "expo-linear-gradient";

const onboardingData = [
  {
    key: "1",
    title: "Welcome To",
    maintitle: "Tefal App",
    subtitle:
      "Discover innovative kitchen appliances, expert tips, and recipes to elevate your culinary creations. Cook with confidence and enjoy every meal with Tefal!",
    video: require("@/assets/Videos/WelcomePage.mp4"),
  },
  {
    key: "2",
    title: "                                          AR FEATURE",
    subtitle:
      "Discover appliance safety and maintenance with interactive AR animations. Tap to engage and learn proper usage in a dynamic virtual environment.",
    video: require("@/assets/Videos/boardingpage2.mp4"),
  },
  {
    key: "3",
    title: "                                         NFC FEATURE",
    subtitle:
      "Easily access appliance details with our NFC Scan feature. Just scan the NFC tags for instant information on each appliance.",
    video: require("@/assets/Videos/boardingpage3.mp4"),
  },
];

const OnboardingScreen = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current.scrollToIndex({ index: nextIndex });
      setCurrentIndex(nextIndex);
    } else {
      navigation.navigate("SignIn");
    }
  };

  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.pageContainer}>
      <Video
        source={item.video}
        style={styles.video}
        resizeMode="cover"
        shouldPlay
        isLooping
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        {item.maintitle && (
          <Text style={styles.maintitle}>{item.maintitle}</Text>
        )}
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={["#F8ECDC", "#E7D6C3"]}
      start={[100, 300]}
      end={[300, 30]}
      style={styles.container}
    >
      <Animated.FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
            listener: (event) => {
              const contentOffsetX = event.nativeEvent.contentOffset.x;
              const index = Math.floor(
                contentOffsetX / Dimensions.get("window").width
              );
              setCurrentIndex(index);
            },
          }
        )}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.dotContainer}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                {
                  backgroundColor:
                    index === currentIndex ? "#F36244" : "#C4C4C4",
                },
              ]}
            />
          ))}
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentIndex === onboardingData.length - 1 ? "Welcome" : "Next >"}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
  video: {
    alignSelf: "center",
    width: 335,
    height: 750,
    borderRadius: 20,
    marginTop: 20,
    shadowColor: "#930000",
    shadowOpacity: 1,
    shadowRadius: 0,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  textContainer: {
    position: "absolute",
    bottom: 200,
    left: 30,
    width: 270,
    height: 68,
  },
  title: {
    fontSize: 24,
    fontFamily: "Montserrat-SemiBold",
    color: "#525252",
  },
  maintitle: {
    fontSize: 32,
    fontFamily: "Montserrat-Alternates",
    color: "#F36244",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    color: "#525252",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  dotContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  nextButton: {
    backgroundColor: "#F36244",
    borderRadius: 12,
    width: 100,
    height: 50,
    borderWidth: 0.5,
    borderColor: "#877571",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
  },
});

export default OnboardingScreen;
