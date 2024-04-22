import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, View } from 'react-native';
export default function Section3() {
    return (
<View style={{ paddingLeft : 10 }}>
    <View style={{ flexDirection : "row" }}>
        
                <Text style={{ fontSize : 15 , backgroundColor : "red",borderRadius : 80,padding : 10 ,color : "white"}}>9.5</Text>
                <View>
                <Text style={{color : "red"}}>Excellent</Text>
                <Text>See 801 reviews </Text>
     </View>
     </View>   
     </View>  
     
    );
}

//<View style={{ flexDirection: "row", padding: 10 }}>
//<Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../../assets/week3/profile-2.jpg")} />
//<View style={{ paddingLeft: 10 }}>
    //<Text style={{ fontSize: 20 }}>Steve Garrett</Text>
   // <Text style={{ color: "gray" }}>5 hours ago | 100k views</Text>
//</View>
//</View>