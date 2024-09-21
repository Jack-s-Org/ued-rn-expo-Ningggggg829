import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, StyleSheet, ImageBackground } from "react-native";
import YourCart from "./YourCartScreen";
import HomeScreen from "./HomeScreen";
import DiscoverScreen from "./DiscoverScreen";
import HistoryScreen from "./HistoryScreen";
import NFCScreen from "./NFCScreen";
import NFCData from "./NFCData";
import NFCScreenStatic from "./NFCScreenStatic";
import OnBoarding from "./OnboardingScreen";
import AllProducts from "./AllProducts";
import RecipeScreen from "./RecipeScreen";
import Unlimitedfrypan from "./Unlimitedfrypan";
import ARScreen from "./ARScreen";
import PurchaseSuccess from "./PurchaseSuccess";
import RecipeDetails from "./RecipeDetails";
import RecipePortion from "./RecipeChoosePortion";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(4);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          elevation: 0,
          height: 80,
          width: 280,
          marginBottom: 20,
          backgroundColor: "transparent",
          borderRadius: 100,
          position: "absolute",
          left: 45,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && { backgroundColor: "#F36244" },
              ]}
            >
              <Ionicons name="home" size={28} color={color} />
            </View>
          ),
          tabBarLabel: () => null,
          tabBarActiveTintColor: "#F8ECDC",
          tabBarInactiveTintColor: "#F36244",
        }}
      />

      <Tab.Screen
        name="Discover"
        component={Empty} // this is a workaround to show a full screen when this tab is pressed
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && { backgroundColor: "#F36244" },
              ]}
            >
              <Ionicons name="search" size={28} color={color} />
            </View>
          ),
          tabBarLabel: () => null,
          tabBarActiveTintColor: "#F8ECDC",
          tabBarInactiveTintColor: "#F36244",
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // stop default navigation
            navigation.navigate("Discover"); // manually navigate to the stack screen outside of the tab navigators
          },
        }}
      />

      <Tab.Screen
        name="YourCart"
        component={Empty} // this is a workaround to show a full screen when this tab is pressed
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && { backgroundColor: "#F36244" },
              ]}
            >
              <Ionicons name="cart" size={28} color={color} />
            </View>
          ),
          tabBarLabel: () => null,
          tabBarActiveTintColor: "#F8ECDC",
          tabBarInactiveTintColor: "#F36244",
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault(); // stop default navigation
            navigation.navigate("YourCart"); // manually navigate to the stack screen outside of the tab navigators
          },
        }}
      />

      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.iconContainer,
                focused && { backgroundColor: "#F36244" },
              ]}
            >
              <Ionicons name="book" size={28} color={color} />
            </View>
          ),
          tabBarLabel: () => null,
          tabBarActiveTintColor: "#F8ECDC",
          tabBarInactiveTintColor: "#F36244",
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("History");
          },
        }}
      />
    </Tab.Navigator>
  );
};
const MainScreens = () => {
  return (
    <MainStacks.Navigator screenOptions={{ headerShown: false }}>
      <MainStacks.Screen name="MainTabs" component={MainTabs} />

      <MainStacks.Screen
        name="NFC"
        component={NFCScreen}
        options={{ animation: "fade" }}
      />
      <MainStacks.Screen
        name="NFCData"
        component={NFCData}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="NFCStatic"
        component={NFCScreenStatic}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Recipe"
        component={RecipeScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Products"
        component={AllProducts}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="YourCart"
        component={YourCart}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Unlimitedfrypan"
        component={Unlimitedfrypan}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="AR"
        component={ARScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="PurchaseSuccess"
        component={PurchaseSuccess}
        options={{ animation: "fade_from_bottom" }}
      />
       <MainStacks.Screen
        name="RecipePortion"
        component={RecipePortion}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="RecipeDetails"
        component={RecipeDetails}
        options={{ animation: "fade_from_bottom" }}
      />
    </MainStacks.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    width: 69,
    height: 69,
    borderRadius: 100,
    backgroundColor: "#E2D5C2",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#877571",
  },
});

export default MainScreens;
