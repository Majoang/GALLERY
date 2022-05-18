import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useState } from 'react';
import Display_image from './Display_image';
import { AntDesign } from '@expo/vector-icons';


export default function App() {
  const[Picture, setPicture] = useState(require("./picture1.png"));
  function firstPicture()
  {
    setPicture( require("./picture1.png"));
  }
  function secondPicture()
  {
    setPicture( require("./IT-support-Companies-in-Atlanta.jpg"));
  }

  function thirdPicture()
  {
    setPicture(require("./3-Incredible-Benefits-of-Using-Managed-IT-Services.jpg"));
  }

  function fourthPicture()
  {
    setPicture(require("./IMG_20210804_145838.jpg"));
  }

 




  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'black', width:353,height:50, borderRadius:8,marginTop:5 }}>
      <View style={{marginLeft:8, marginTop:9}}>
      <TouchableOpacity>
      <AntDesign name="leftcircleo" size={30} color="white" />
      </TouchableOpacity>
      </View>
      </View>
      <Text style={{fontWeight:'bold',flex:2,color:'white', fontSize:30,fontStyle:'italic'}}>MY PICTURES</Text>
     
      <View style={{alignItems:'center', }}>
      <Display_image Picture={Picture} />
      <View style={{flexDirection:'row',marginLeft:8}}>
      <TouchableOpacity  onPress = {firstPicture}>

       <Image style={styles.smaller} source={ require('./picture1.png')} />
      </TouchableOpacity>


      
      <TouchableOpacity  onPress = {secondPicture}>

       <Image style={styles.smaller} source={ require('./IT-support-Companies-in-Atlanta.jpg')} />
      </TouchableOpacity>


      <TouchableOpacity  onPress = {thirdPicture}>

       <Image style={styles.smaller} source={ require('./3-Incredible-Benefits-of-Using-Managed-IT-Services.jpg')} />
      </TouchableOpacity>

      <TouchableOpacity  onPress = {fourthPicture}>

<Image style={styles.smaller} source={ require('./IMG_20210804_145838.jpg')} />
</TouchableOpacity>


      </View>

      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9A9A9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:40,
    borderRadius:15
  },
  smaller:
  {
  width: 50,
  height:50, 
  borderRadius:10,
  borderColor:'#AD1457',
  borderWidth:2,
  marginLeft:5
   
 }
});
