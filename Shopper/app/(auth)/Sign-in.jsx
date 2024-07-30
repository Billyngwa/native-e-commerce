import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import { Link, router } from "expo-router";
FormField;
const SignIn = () => {
  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = () => {
    router.push("/Home");
  };
  return (
    <SafeAreaView className="bg-white w-full h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="mt-5 w-full h-[90vh] justify-center align-center ">
          <Text className="text-black text-[60px] font-bold items-center text-center">
            Fashion Sale
          </Text>
          <Text className="text-black text-[30px] font-semibold my-[10px] ml-4">
            Sign In to Fashion Sale
          </Text>
          <View className="mt-[2%] ml-[10%] w-[80%]">
            <FormField
              label={"Email"}
              otherStyles="my-[10px] w-[100%]"
              // value={signIn.email}
              handleChangeText={(email) => setSignIn({ ...signIn, email })}
            />
            <FormField
              label={"password"}
              otherStyles="my-[10px] w-[100%]"
              // value={signIn.password}
              handleChangeText={(password) =>
                setSignIn({ ...signIn, password })
              }
            />
            <Button
              title={"Sign In"}
              addedStyles={"rounded-xl mt-4"}
              handleClick={() => handleSubmit()}
            />
            <View className="my-4">
              <Text className="text-xl">
                Don't have an account? <Text className="text-red-600"><Link href="/Sign-up"> Sign Up</Link></Text> 
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
