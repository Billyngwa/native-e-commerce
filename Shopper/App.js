import { StatusBar } from 'expo-status-bar';
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
const landingImage = require("./assets/landing.png")
Image

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fashion Sale</Text>
      <View>
        <Image source={landingImage} style={styles.image}/>
      </View>
      <Pressable  title='jdf' onPress={alert("you oressd")}>
      <Text style={styles.text}>check me out</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    position:"relative"
   
  },
  text:{
     color:"white",
    position:"absolute",
    top:500,
    zIndex:40,
    fontSize:80,
    fontWeight:"800"
  },
  image: {
    width: 400,
    height: 800,
    borderRadius: 18,
  },
});
