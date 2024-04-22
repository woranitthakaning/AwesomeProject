import { Image, Text, View } from "react-native";

export default function Section6() {
    return (
<View style={{ padding : 10 ,borderTopWidth : 1 , borderBottomWidth : 1 , margin : 10}}>
<Text style={{ fontSize : 20 }}>Hotel Description</Text>
<Text>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
<View style={{ flexDirection : "row" }}>
                <Image style={{ flex : 1 , resizeMode : "cover" , aspectRatio : 5/2 }} source={require("../../assets/week3/map.jpg")} />
            </View>
</View>

 );
}