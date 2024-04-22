import { View } from "react-native";
import MyIcon from "./MyIcon";
export default function Section5() {
    return (
<View style={{ flexDirection : "row", marginTop : 10  }}>
        <MyIcon title="wifi" name="wifi" size={30} color="blue" />
        <MyIcon title="coffee" name="coffee" size={30} color="blue" />
        <MyIcon title="path" name="bath" size={30} color="blue" />
        <MyIcon title="car" name="car" size={30} color="blue" />
        <MyIcon title="paw" name="paw" size={30} color="blue" />
      </View>
    );
}