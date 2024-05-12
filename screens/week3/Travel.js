import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Signup from '../../components/week3/Signup';
import Hotel from '../../components/week3/Hotel';
import Card from '../../components/week3/Card';
import Menu from '../../components/week3/Menu';
import { useNavigation } from '@react-navigation/native';

export default function Travel() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 50 }}>
                <Text> Text of Week 3  </Text>
                <Signup />
                <Card />
                <Hotel />
                <Menu />
            </View>
        </ScrollView>

    );
}
