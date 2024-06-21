import { StatusBar } from 'expo-status-bar';
import {  Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';
import Person from './components/Person';
const landingImage = require("./assets/landing.png")
Image
Person
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fashion Sale</Text>
      {/* <View style={styles.imageContainer}>
          <ImageViewer placeholderImageSource={landingImage}/>
      </View> */}
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <ScrollView>
        {
          [...Array(30).keys()].map((_,i) => {
            <Person key={i} personName={`Person${i}`}/>
          }) 
        }
      </ScrollView>
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
    fontSize:40,
    fontWeight:"800"
  },
  image: {
    width: 300,
    height: 500,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
});
