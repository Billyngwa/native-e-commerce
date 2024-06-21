import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

const ImageViewer = ({placeholderImageSource}) => {
  return (
        <Image source={placeholderImageSource} style={styles.image}/>
  )
}

export default ImageViewer

const styles = StyleSheet.create({
    image: {
      width: 320,
      height: 440,
      borderRadius: 18,
    },
  });