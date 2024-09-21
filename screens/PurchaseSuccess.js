import { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PurchaseSuccessVideo from "@/components/PurchaseSuccessVideo";

const PurchaseSuccess = ({ navigation }) => {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigation.replace("MainTabs", { screen: "Home" });
    }, 7000);

    return () => window.clearTimeout(timer);
  }, [navigation]);

  return <PurchaseSuccessVideo />;
};

export default PurchaseSuccess;
