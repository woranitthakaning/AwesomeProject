import { Image, Text, View } from "react-native";
export default function Section7() {
    return (
<View>
<View style={{ flexDirection: "row", padding: 10  }}>
    <Text style={{ fontSize: 15 }}>Room Type</Text>
    </View>
    <View style={{ paddingLeft: 10 ,flexDirection: "row" }}>
        <View>
    <Image style={{ width: 70, height: 80, borderRadius : 10 }} source={require("../../assets/week3/room-8.jpg")} />
    </View>
    <View style={{ padding : 10 }}>
        <View style={{ paddingBottom : 20 }}>
    <Text style={{ fontSize: 15  }}>Standard Twin Room
    </Text>
    </View>
    <Text style={{ fontSize: 13 ,color: "red" }}>$399.99</Text>
    <Text style={{ fontSize: 10 ,color: "blue" }}>Hurry Up! This is your last room!</Text>
</View>
</View>
</View>
 );
}