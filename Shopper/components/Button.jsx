import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Button = ({title,addedStyles, isLoading,handleClick}) => {
  return (
    <TouchableOpacity className={`bg-red-600 ${addedStyles}`} onPress={handleClick}>
      <Text className="text-white font-bold text-[30px] px-5 py-3 text-center">{title}</Text>
    </TouchableOpacity>
  )
}

export default Button