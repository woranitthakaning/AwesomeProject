import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function TourFlatList(props) {
    const tours = [
        { "id": "1", "title": "Tour in London", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg" },
        { "id": "2", "title": "Tour in Paris", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg"  },
        { "id": "3", "title": "Tour in Italy", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg"  },
        { "id": "4", "title": "Tour in Portugal", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg"  },
        { "id": "5", "title": "Tour in Netherlands", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg" }
    ];
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try{
            let text = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json');
            let data = await text.json();
            console.log("Load Data : " , data);
          //SET STATE
            setOnlineTours(data);
        }catch(error){
            console.log("ERROR : " , error);
        }
    }
    useEffect(() => {
        loadOnlineTours();
    }, []);
    
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Tour with FlatList</Text>
            <Text style={{ color: "grey", marginVertical: 10 }}>Let find out what most interesting things</Text>
            <FlatList
                horizontal={true}
                data={ onlineTours }
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                    <View style={{ marginRight: 10 }}>
                    <Image style={{ width: 200, height: 150, borderRadius: 10 }} source={{ uri: item.uri }} />
                    <View style={{ marginTop: -30, height: 30, width: 200, paddingHorizontal: 10, backgroundColor: 'black', opacity: 0.5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                        <Text style={{ fontSize: 20, color: "white" }}>{ item.title }</Text>
                    </View>
                </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />
        </View>
    );
}

