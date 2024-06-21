import React from 'react'
import { StyleSheet, View } from 'react-native'

const Person = ({personName}) => {
  return (
    <View>
        <Text style={styles.text}>
            {personName}
        </Text>
    </View>
  )
}

export default Person

const styles = StyleSheet.create({
    text:{
        color:"white",
       fontSize:20,
       fontWeight:"400"
     },
})