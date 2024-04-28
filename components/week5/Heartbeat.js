import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {  
    const [count,setCount] = useState(0);    
   

    return (
        <View style = {{ flexDirection : "row" , padding : 10,  justifyContent : "space-around"}} >
        <TouchableOpacity style={{ alignItems : "center" }} onPress={()=> setCount (count +1) } >
        <FontAwesome name= "heart" size = {30} color= "orange" />
        </TouchableOpacity>
        <Text style = {{ color : "red" ,fontSize : 30 }}>{count}</Text>
    
    </View>
    );
}
