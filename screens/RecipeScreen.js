import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { fetchCocktailByID } from "../api/cocktails.api";
import { CocktailDescriptionHeader } from "../components/CocktailDescription";
import { CocktailDescription } from "../components/CocktailDescription";
import { BackButton } from "../components/BackButton";
import Colors from "../constants/Colors";
import LottieView from "lottie-react-native";

export default function RecipeScreen({ route, navigation }) {
    const [currentCocktail, setCurrentCocktail] = useState({
        name: null,
        instructions: null,
        ingredients: [{ ingredient: null, measure: null }],
        uri: null,
    });
    const [isLoading, setIsLoading] = useState(false);
    const currentCocktailId = route.params.id;
    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const data = await getData(currentCocktailId);
                setCurrentCocktail(data);
                setIsLoading(false);
            } catch (err) {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);
    const animation = useRef(null);
    useEffect(() => {
        animation.current.play();
    }, []);
    const renderHeader = () => {
        return (
            <>
                <View style={styles.logoContainer}>
                    <LottieView
                        ref={animation}
                        style={styles.logoPlace}
                        source={require("../assets/cocktailAnimation.json")}
                    />
                </View>
            </>
        );
    };
    const renderImage = () => {
        return (
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: currentCocktail.uri
                    }}
                ></Image>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.nameContainer}>
                    <Text style={{ ...styles.standardFont, fontWeight: "bold", fontSize: 30 }}>
                        {currentCocktail.name}
                    </Text>
                </View>
                <View style={styles.backButtonContainer}>
                    <BackButton
                        onPress={() => navigation.navigate("Root")}
                        iconName="md-close-circle-outline"
                    />
                </View>
            </View>
            <ScrollView>
                {isLoading ? <Text></Text> :
                    <><View style={styles.imageContainer}>
                        {renderImage()}
                    </View>
                        <View>
                            <CocktailDescriptionHeader />
                            {currentCocktail.ingredients.map((cocktail) => {
                                return (
                                    <CocktailDescription
                                        ingredient={cocktail.ingredient}
                                        measure={cocktail.measure} />
                                );
                            })}</View>
                        <View style={styles.instructionContainer}>
                            <Text style={{ ...styles.standardFont, textDecorationLine: 'underline' }}>
                                Instructions:
                                {"\n"}
                            </Text>
                            <Text style={styles.standardFont}>
                                {currentCocktail.instructions}
                            </Text>
                        </View>
                    </>}
            </ScrollView>
            {renderHeader()}
        </View>
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
            uri: apiFetchedCocktail[0].strDrinkThumb,
        }
    } catch (error) {
        console.log("error API call by ID", error);
        throw error;
    }
};

const LOGO_HEIGHT = 80;
const IMAGE_HEIGHT = 150;
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.tintColor,
        flex: 1,
    },
    logoPlace: {
        flexDirection: "row",
        width: LOGO_HEIGHT,
        height: LOGO_HEIGHT,
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    headerContainer: {
        height: 80,
        paddingTop: 10,
        justifyContent: "flex-end",
        flexDirection: "row",
    },
    backButtonContainer: {
        right: 10,
        top: 10,
        height: 40,
        width: 40,
        justifyContent: "center",
    },
    imageContainer: {
        flexDirection: "row",
        padding: 20,
    },
    image: {
        height: IMAGE_HEIGHT,
        width: IMAGE_HEIGHT,
        aspectRatio: 1,
        borderRadius: 5,
    },
    nameContainer: {
        paddingLeft: 20,
        flex: 1,
    },
    instructionContainer: {
        padding: 20,
        flex: 1,
    },
    standardFont: {
        fontSize: 15,
        textAlignVertical: "center",
        color: 'white',
    },
})

