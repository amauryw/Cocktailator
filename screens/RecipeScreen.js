import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function RecupeScreen({ route, navigation }) {
    return (
        <ScrollView>
            <Text>
                ID cocktail =
                {route.params.id}
            </Text>
        </ScrollView>
    );
}


const styles = StyleSheet.create({})

