import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center" >
      <Text className="text-2xl font-bold hidden">Smart Criminal </Text>
      <Link href="/Profile" style={{color:"blue"}}>Go to profile</Link>
      <StatusBar style="auto" />
    </View>
  );
}


