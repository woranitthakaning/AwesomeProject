import React from 'react';
import { View } from 'react-native';

export default function Ex08() {
  return (
    <View style={{ flex : 1 , flexDirection : 'row', justifyContent : "space-between",alignItems : "center"}}>    
      <View style={{ backgroundColor : '#50E3C2' , width : 100  ,height : 100 }}></View>
      <View style={{ backgroundColor : '#4A90E2' , width : 100 , height : 100 }}></View>    
      <View style={{ backgroundColor : '#9013FE' , width : 100 , height : 100 }}></View>          
    </View>
  );
}