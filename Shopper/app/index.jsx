import { Link, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../consts/constants";
import Button from "../components/Button";
icons;
router
export default function App() {
  return (
    <SafeAreaView className=" bg-black h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center  h-[95vh] rounded">
          <Image source={icons.onboarding} className="w-full h-[750]" />
          <Text className="text-[80px] text-white font-bold absolute ml-[4%] top-[55%]">
            Fashion Sale
          </Text>
          <View className="px-6 rounded absolute top-[80%]">
            <Button title="Get Started" handleClick={() => {router.push("/Sign-in")}}/>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}
