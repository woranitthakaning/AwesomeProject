import { Text, View } from "react-native";

export default function Greeting2(props){
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {props.name}!</Text>
      </View>
    );
}
