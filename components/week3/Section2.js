import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from 'react-native';
export default function Section2() {
    return (
        <View style={{ flex : 1, margin : 25 , padding : 10, borderWidth : 1, width  :400 , borderColor : '#d3d3d3', borderRadius : 10 ,backgroundColor : '#f5f5f5' , marginTop : -50  }}>
          <Text style ={{textAlign: "center", fontSize : 16}}>Hilton San Francisco</Text>
          <View style={{ flexDirection : "row", justifyContent : "center"}}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
                    <Text style={{ textAlign : 'center', fontSize : 14 , color : 'gray'}}
                    >Facilities provided may range from a modest quality mattress in a small room to large suites</Text>
                </View>
    );
}
