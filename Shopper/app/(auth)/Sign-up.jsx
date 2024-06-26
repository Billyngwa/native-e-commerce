import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import { Link, router } from "expo-router";
FormField;
const SignUp = () => {
  const [signUp, setSignUp] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const handleSubmit = () => {
    router.push("/Sign-in");
  };
  return (
    <SafeAreaView className="bg-white w-full h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="mt-5">
          <Text className="text-black text-[60px] font-bold items-center text-center">
            Fashion Sale
          </Text>
          <Text className="text-black text-[30px] font-semibold my-[10px] ml-4">
            Sign In to Fashion Sale
          </Text>
          <View className="mt-[2%] ml-[10%] w-[80%]">
            <FormField
              label={"First Name"}
              otherStyles="my-[10px] w-[100%]"
              // value={signUp.email}
              handleChangeText={(firstName) =>
                setSignUp({ ...signUp, firstName })
              }
            />
             <FormField
              label={"Last Name"}
              otherStyles="my-[10px] w-[100%]"
              // value={signUp.email}
              handleChangeText={(firstName) =>
                setSignUp({ ...signUp, firstName })
              }
            />
            <FormField
              label={"Email"}
              otherStyles="my-[10px] w-[100%]"
              // value={signUp.email}
              handleChangeText={(email) => setSignUp({ ...signUp, email })}
            />
            <FormField
              label={"password"}
              otherStyles="my-[10px] w-[100%]"
              // value={signUp.password}
              handleChangeText={(password) =>
                setSignUp({ ...signUp, password })
              }
            />
            <Button
              title={"Sign Up"}
              addedStyles={"rounded-xl mt-4"}
              handleClick={() => handleSubmit()}
            />
                  <View className="my-4">
              <Text className="text-xl">
                Don't have an account? <Text className="text-red-600"><Link href="/Sign-in"> Sign In</Link></Text> 
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
