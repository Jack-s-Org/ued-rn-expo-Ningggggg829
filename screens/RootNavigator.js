import SignInScreen from "./SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import NFCData from "./NFCData";
import NFCScreenStatic from "./NFCScreenStatic";
import OnboardingScreen from "./OnboardingScreen";
import RecipeScreen from "./RecipeScreen";
import Unlimitedfrypan from "./Unlimitedfrypan";
import AR from "./ARScreen";
import YourCart from "./YourCartScreen";
import SplashScreen from "./SplashScreens";
import RecipeChoosePortion from "./RecipeChoosePortion";
import RecipeDetails from "./RecipeDetails";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnBoarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Main" component={MainScreens} />
        <Stack.Screen name="NFCStatic" component={NFCScreenStatic} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />
        <Stack.Screen name="UnlimitedFrypan" component={Unlimitedfrypan} />
        <Stack.Screen name="AR" component={AR} />
        <Stack.Screen name="YourCart" component={YourCart} />
        <Stack.Screen name="RecipePortion" component={RecipeChoosePortion} />
        <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
