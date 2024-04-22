import { Button, Text, View } from "react-native";

export default function Section8() {
    return (
    <View style={{ flexDirection : "row", justifyContent : "space-between" ,borderTopWidth : 1 , borderBottomWidth : 1  ,padding :10  }}>
        <View style={{ flexDirection : "column"}}>
     <Text style={{ fontSize: 12 }}>Price</Text>
    <Text style={{ fontSize: 18 ,color: "red" }}>$399.99</Text>
    <Text style={{ fontSize: 12  }}>AVG/Night</Text>
    </View>
<View style={{padding : 10}}>
<Button title="Book Now" color="red" />
</View>
</View>
    );
}