import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

export default function Event(props) {
    [
        { "id": "1", "title": "Truckfighters: Performing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-1.jpg", "month": "DEC", "date": "30", "datetime": "Thu, DEC 30, 09.00 am", "place": "London" },
        { "id": "2", "title": "Paris Motor Show", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-2.jpg", "month": "DEC", "date": "31", "datetime": "Thu, DEC 30, 09.00 am", "place": "Paris" },
        { "id": "3", "title": "Bearded Theory Spring", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-3.jpg", "month": "JAN", "date": "01", "datetime": "Thu, JAN 01, 09.00 am", "place": "Canada" },
        { "id": "4", "title": "BBC Music Introducing", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-4.jpg", "month": "JAN", "date": "11", "datetime": "Thu, JAN 11, 09.00 am", "place": "USA" },
        { "id": "5", "title": "Start-Up Meeting 2022", "uri": "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/event-5.jpg", "month": "JAN", "date": "21", "datetime": "Thu, JAN 21, 09.00 am", "place": "Thailand" }
    ];
    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let text = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await text.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }
    useEffect(() => {
        loadOnlineTours();
    }, []);
    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Up coming Event</Text>
            <Text style={{ color: "grey", marginVertical: 10 }}>What's the Worst That Could Happend</Text>
            <FlatList
                horizontal={true}
                data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 }}>
                                <Image style={{ width: 300, height: 150, borderRadius: 10 }} source={{ uri: item.uri }} />
                                <View style={{ borderWidth: 1, borderColor: 'gray', marginTop: -20, height: 70, width: 300, paddingHorizontal: 10, backgroundColor: 'lightyellow', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                                    <View style={{ flexDirection: "row",padding: 5 }}>
                                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                                            <Text style={{ fontSize: 16, color: "red" }}>{item.month}</Text>
                                            <Text style={{ fontSize: 20 }}>{item.date}</Text>
                                        </View>
                                        <View style={{ flexDirection: "column",paddingLeft: 20 }}>
                                            <Text style={{ fontSize: 16, }}>{item.title}</Text>
                                            <Text style={{ fontSize: 14, color: "gray" }}>{item.datetime}</Text>
                                            <Text style={{ fontSize: 14, color: "gray" }}>{item.place}</Text>
                                        </View>
                                    </View>
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
