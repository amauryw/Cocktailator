import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { fetchCocktailByID } from "../api/cocktails.api";
import { CocktailDescriptionHeader } from "../components/CocktailDescription";
import { CocktailDescription } from "../components/CocktailDescription";
import { BackButton } from "../components/BackButton";
import Colors from "../constants/Colors";
import LottieView from "lottie-react-native";
import { fontStyles, bigFont, smallFont } from "../constants/Fonts";

export default function RecipeScreen({ route, navigation: { goBack } }) {
    const [currentCocktail, setCurrentCocktail] = useState({
        name: null,
        instructions: null,
        ingredients: [{ ingredientName: null, measure: null }],
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
    const renderLogo = () => {
        return (
            <>
                <View style={styles.logoContainer}>
                    <LottieView
                        ref={animation}
                        style={styles.logo}
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
                    <Text style={[fontStyles.standardFont, fontStyles.titleSize, fontStyles.secondaryFontColor, fontStyles.bold]}>
                        {currentCocktail.name}
                    </Text>
                </View>
                <View style={styles.backButtonContainer}>
                    <BackButton
                        onPress={() => goBack()}
                        iconName="md-close-circle-outline"
                    />
                </View>
            </View>
            <ScrollView>
                {isLoading ? <Text></Text> :
                    <><View>
                        {renderImage()}
                    </View>
                        <View style={[styles.marginTop, styles.marginRight]}>
                            <CocktailDescriptionHeader />
                            {currentCocktail.ingredients.map((ingredient, index) => {
                                return (
                                    <CocktailDescription
                                        key={`${ingredient} - ${index}`}
                                        ingredient={ingredient.ingredientName}
                                        measure={ingredient.measure}
                                        needRadius={index === currentCocktail.ingredients.length - 1}
                                    />
                                );
                            })}</View>
                        <View style={[styles.marginTop, styles.marginRight]}>
                            <Text style={[fontStyles.standardFont, fontStyles.underligned, fontStyles.secondaryFontColor]}>
                                Instructions:
                                {"\n"}
                            </Text>
                            <Text style={[fontStyles.standardFont, fontStyles.secondaryFontColor]}>
                                {currentCocktail.instructions}
                            </Text>
                        </View>
                    </>}
            </ScrollView>
            {renderLogo()}
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
            currentIngredient = { ingredientName: apiFetchedCocktail[0][`strIngredient${i}`], measure: apiFetchedCocktail[0][`strMeasure${i}`] };
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
const standardPadding = 20;
const headerHeight = 2 * (bigFont + standardPadding);
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.tintColor,
        paddingLeft: standardPadding,
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        flexDirection: "row",
        width: LOGO_HEIGHT,
        height: LOGO_HEIGHT,
    },
    logoContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    headerContainer: {
        height: headerHeight,
        flexDirection: "row",
    },
    backButtonContainer: {
        height: headerHeight,
        width: 50,
        alignContent: "center",
        justifyContent: "center",
    },
    image: {
        height: IMAGE_HEIGHT,
        width: IMAGE_HEIGHT,
        aspectRatio: 1,
        borderRadius: 5,
    },
    nameContainer: {
        justifyContent: 'center',
        flex: 1,
    },
    marginTop: {
        paddingTop: standardPadding,
    },
    marginRight: {
        paddingRight: standardPadding,
    },
    standardFont: {
        fontSize: 15,
        textAlignVertical: "center",
        color: 'white',
    },
})

