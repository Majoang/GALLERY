
import { StyleSheet,View,Image } from 'react-native'
import React from 'react'

export default function Display_image({Picture}) {
  return (
    <View>
      <Image  style={styles.image} 
        source= {Picture}/>

      
    </View>
  )
}

const styles = StyleSheet.create({

  image:
  {
      width: 300,
      height: 300,
      borderRadius: 25,
      marginBottom:5,
      borderColor:'#AD1457',
      borderWidth:2,
      marginLeft:5
  }

})
