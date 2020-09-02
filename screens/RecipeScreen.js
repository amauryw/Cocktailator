import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { fetchCocktailByID } from "../api/cocktails.api";
import { CocktailDescriptionHeader } from "../components/CocktailDescription";
import { CocktailDescription } from "../components/CocktailDescription";
import { BackButton } from "../components/BackButton";
import { DisplayInstructions } from "../components/Instructions";
import Colors from "../constants/Colors";
import LottieView from "lottie-react-native";
import { fontStyles, bigFont, smallFont } from "../constants/Fonts";
import { useFavoriteCocktailStore } from "../store/favorite/favorite.hooks";

export default function RecipeScreen({ route, navigation: { goBack } }) {
  const [currentCocktail, setCurrentCocktail] = useState({
    name: null,
    instructions: [null],
    ingredients: [{ ingredientName: null, measure: null }],
    uri: null
  });
  const [isLoading, setIsLoading] = useState(true);
  const {
    setCocktailAsFavorite,
    isFavoriteLoading = isLoading
  } = useFavoriteCocktailStore();
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
      <SafeAreaView backgroundColor={Colors.tintColor} />
      <View style={styles.contentContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.nameContainer}>
            <Text
              style={[
                fontStyles.standardFont,
                fontStyles.titleSize,
                fontStyles.secondaryFontColor,
                fontStyles.bold
              ]}
            >
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.marginRight}
        >
          {isLoading ? (
            <Text></Text>
          ) : (
            <>
              <View>{renderImage()}</View>
              <View style={styles.marginTop}>
                <CocktailDescriptionHeader />
                {currentCocktail.ingredients.map((ingredient, index) => {
                  return (
                    <CocktailDescription
                      key={`${ingredient} - ${index}`}
                      ingredient={ingredient.ingredientName}
                      measure={ingredient.measure}
                      needRadius={
                        index === currentCocktail.ingredients.length - 1
                      }
                    />
                  );
                })}
              </View>
              <View style={styles.marginTop}>
                <Text
                  style={[
                    fontStyles.standardFont,
                    fontStyles.underligned,
                    fontStyles.secondaryFontColor,
                    fontStyles.bold
                  ]}
                >
                  Instructions:
                  {"\n"}
                </Text>
                {currentCocktail.instructions.map((instruction, index) => {
                  return (
                    <DisplayInstructions
                      key={index}
                      instruction={instruction}
                      index={index}
                    />
                  );
                })}
              </View>
            </>
          )}
        </ScrollView>
      </View>
      <Button
        title="Ajouter aux favoris"
        disabled={isFavoriteLoading}
        onPress={async () => await setCocktailAsFavorite(currentCocktail)}
        color="white"
      ></Button>
      {renderLogo()}
    </View>
  );
}

const getData = async id => {
  try {
    const apiFetchedCocktail = await fetchCocktailByID(id);
    let ingredients = [];
    let currentIngredient;
    let i = 1;
    while (apiFetchedCocktail[0][`strMeasure${i}`] != null && i < 16) {
      currentIngredient = {
        ingredientName: apiFetchedCocktail[0][`strIngredient${i}`],
        measure: apiFetchedCocktail[0][`strMeasure${i}`]
      };
      ingredients.push(currentIngredient);
      i++;
    }
    const instructionsCont = formateInstructions(
      apiFetchedCocktail[0].strInstructions
    );
    return {
      name: apiFetchedCocktail[0].strDrink,
      instructions: instructionsCont.instructions,
      ingredients,
      uri: apiFetchedCocktail[0].strDrinkThumb
    };
  } catch (error) {
    console.log("error API call by ID", error);
    throw error;
  }
};

const formateInstructions = rawInstructions => {
  const regEx = /\.\s+/;
  const search = "oz.";
  const searchRegExp = new RegExp(search, "g"); // Throws SyntaxError
  const replaceWith = "oz ";
  const result = rawInstructions.replace(searchRegExp, replaceWith);
  const instructions = result.split(regEx);
  const instLength = instructions.length;
  if (instructions[instLength - 1] === "") {
    instructions.splice(instLength - 1, 1);
  }
  return {
    instructions
  };
};

const LOGO_HEIGHT = 100;
const IMAGE_HEIGHT = 150;
const standardPadding = 20;
const headerHeight = 2 * (bigFont + standardPadding);

/**
 * @todo a transformer en "theme" pour reutilser ces constantes en pages
 */
export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tintColor,
    flex: 1
  },
  contentContainer: {
    marginLeft: standardPadding,
    justifyContent: "center",
    flex: 1
  },
  logo: {
    flexDirection: "row",
    width: LOGO_HEIGHT,
    height: LOGO_HEIGHT
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  headerContainer: {
    height: headerHeight,
    flexDirection: "row"
  },
  backButtonContainer: {
    height: headerHeight,
    width: 50,
    alignContent: "center",
    justifyContent: "center"
  },
  image: {
    height: IMAGE_HEIGHT,
    width: IMAGE_HEIGHT,
    aspectRatio: 1,
    borderRadius: 5
  },
  nameContainer: {
    justifyContent: "center",
    flex: 1
  },
  marginTop: {
    flex: 1,
    marginTop: standardPadding
  },
  marginRight: {
    marginRight: standardPadding
  },
  standardFont: {
    fontSize: smallFont,
    textAlignVertical: "center",
    color: "white"
  }
});
