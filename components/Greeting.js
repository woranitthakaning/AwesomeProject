import { Text, View } from "react-native";

export default function Greeting(props){
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {props.name}!</Text>
      </View>
    );
}
