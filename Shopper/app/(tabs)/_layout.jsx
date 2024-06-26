import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Home from "./Home";
import { icons } from "../../consts/constants";

const TabsIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center gap-1 justify-center">
      <Image source={icon} 
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? "text-[16px] text-white" : " text-sm text-white"}`} style={{color:color}}>{name}</Text>
    </View>
  );
};
const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel:false,
        tabBarActiveTintColor:"#DB3022",
        
        tabBarStyle: {
          backgroundColor: "black",
          padding:10,
          height:84
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View> 
              <TabsIcon icon={icons.home}
                color={color}
                focused={focused}
                name="Home"
              />
            </View>
          ),
        }}
      />
    
      <Tabs.Screen
        name="Shop"
        options={{
          title: "Shop",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View> 
              <TabsIcon icon={icons.shopping_cart}
                color={color}
                focused={focused}
                name="Shop"
              />
            </View>
          ),
        }}
      />
       <Tabs.Screen
        name="Bag"
        options={{
          title: "Bag",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View> 
              <TabsIcon icon={icons.bag}
                color={color}
                focused={focused}
                name="Bag"
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Favorite"
        options={{
          title: "Favorite",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View> 
              <TabsIcon icon={icons.favorite}
                color={color}
                focused={focused}
                name="Favorite"
              />
            </View>
          ),
        }}
      />
        <Tabs.Screen
        name="Profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <View> 
              <TabsIcon icon={icons.account_circle}
                color={color}
                focused={focused}
                name="Profile"
              />
            </View>
          ),
        }}
      />
    </Tabs>
    
  );
};

export default TabsLayout;
