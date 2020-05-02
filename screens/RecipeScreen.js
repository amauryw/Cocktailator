import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { fetchCocktailByID } from "../api/cocktails.api";
import { onSessionWasInterrupted } from "expo/build/AR";

export default function RecipeScreen({ route, navigation }) {
    const [currentCocktail, setCurrentCocktail] = useState({
        cocktail: {
            name: null,
            instructions: null,
            ingredients: [],
        }
    });
    const [isLoading, setIsLoading] = useState(false);
    const currentCocktailId = route.params.id;
    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const data = await getData(currentCocktailId);
                setIsLoading(false);
                setCurrentCocktail(data);
                console.log(data.ingredients);
                console.log(currentCocktail.ingredients);
            } catch (err) {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);
    return (
        <ScrollView>
            <Text>
                {currentCocktailId}
            </Text>
            <Text>
                {currentCocktail.name}
                {isLoading ? "loading" : ""}
            </Text>
            <Text>
                {currentCocktail.instructions}
            </Text>
            <Text>
                {currentCocktail.ingredients[0].ingredient}
                {currentCocktail.ingredients[0].measure}
            </Text>
        </ScrollView>
    );
}

const getData = async id => {
    try {
        const apiFetchedCocktail = await fetchCocktailByID(id);
        let ingredients = [];
        let currentIngredient;
        let test;
        let i = 1;
        while (apiFetchedCocktail[0][`strMeasure${i}`] != null && i < 16) {
            currentIngredient = { ingredient: apiFetchedCocktail[0][`strIngredient${i}`], measure: apiFetchedCocktail[0][`strMeasure${i}`] };
            ingredients.push(currentIngredient);
            i++;
        }
        return {
            name: apiFetchedCocktail[0].strDrink,
            instructions: apiFetchedCocktail[0].strInstructions,
            ingredients,
        }
    } catch (error) {
        console.log("error API call by ID", error);
        throw error;
    }
};



const styles = StyleSheet.create({})

