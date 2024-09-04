import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

const progressBarData = [
  { id: 1, name: "RM209", targetValue: 70 },
  { id: 2, name: "★★★★☆", targetValue: 80 },
  { id: 3, name: "24cm", targetValue: 60 },
  { id: 4, name: "2 Years", targetValue: 50 },
];

const ProgressBarLeft = () => {
  const [progressArray] = useState(
    progressBarData.map(() => new Animated.Value(0))
  );

  useEffect(() => {
    progressArray.forEach((progress, index) => {
      Animated.timing(progress, {
        toValue: progressBarData[index].targetValue,
        duration: 1000 + index * 200,
        useNativeDriver: false,
      }).start();
    });
  }, [progressArray]);

  return (
    <View>
      {progressArray.map((progress, index) => (
        <View key={progressBarData[index].id} style={styles.progressContainer}>
          <Text style={styles.label}>{progressBarData[index].name}</Text>
          <View style={styles.progressBarContainer}>
            <Animated.View
              style={[
                styles.bar,
                {
                  width: progress.interpolate({
                    inputRange: [0, 100],
                    outputRange: ["0%", "100%"],
                  }),
                },
              ]}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  progressContainer: {
    marginBottom: 8,
  },
  label: {
    marginBottom: 5,
    fontSize: 14,
    color: "#E2D5C2",
    fontFamily: "Montserrat-Regular",
  },
  progressBarContainer: {
    width: 123,
    height: 16,
    borderWidth: 0.5,
    borderColor: "#E2D5C2",
    borderRadius: 50,
    overflow: "hidden",
  },
  bar: {
    height: 16,
    backgroundColor: "#F36244",
    borderRadius: 50,
  },
});

export default ProgressBarLeft;
