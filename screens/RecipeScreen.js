import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { fetchCocktailByID } from "../api/cocktails.api";

export default function RecipeScreen({ route, navigation }) {
    const [currentCocktail, setCurrentCocktail] = useState(null);
    const currentCocktailId = route.params.id;
    useEffect(() => {
        async function fetchData() {
            const data = await getData(currentCocktailId);
            setCurrentCocktail(data.name);
        }
        fetchData();
    }, []);
    return (
        <ScrollView>
            <Text>
                ID cocktail =
                {currentCocktailId}
            </Text>
            <Text>
                {currentCocktail}
                salut
            </Text>
        </ScrollView>
    );
}

const getData = async id => {
    try {
        const apiFetchedCockail = await fetchCocktailByID(id);
        return {
            name: apiFetchedCockail[0].strDrink,
        }
    } catch (error) {
        console.log("error API call by ID", error);
    }
};



const styles = StyleSheet.create({})

