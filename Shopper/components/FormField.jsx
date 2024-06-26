import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../consts/constants";
import Button from "./Button";
import { Link } from "expo-router";
const FormField = ({ placeHolder, label, otherStyles, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`bg-gray-100 rounded-xl ${otherStyles}`}>
      <Text className="pl-4 py-3 text-[18px]">{label}</Text>
      <View
        style={{ display: "flex", flexDirection: "row" }}
        className="flex gap-0 justify-between align-middle "
      >
        <TextInput
          value={value}
          onChangeText={onChange}
          secureTextEntry={label === "password" && !showPassword}
          className="px-4 pb-2 text-[20px] font-bold"
        />
        {label === "password" && (
          <>
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className="relative right-2 "
            >
              <Image
                source={!showPassword ? icons.eye : icons.closedEye}
                resizeMode="contain"
                className="w-[30px] h-[30px]"
              />
            </TouchableOpacity>
          </>
          
        )}
      </View>
    
    </View>
  );
};

export default FormField;
