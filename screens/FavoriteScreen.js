import React, { useEffect } from "react";
import { Text, View, SafeAreaView, Button } from "react-native";
import Colors from "../constants/Colors";
import { BackButton } from "../components/BackButton";
import { styles } from "./RecipeScreen";
import { fontStyles } from "../constants/Fonts";
import { useFavoriteCocktailStore } from "../store/favorite/favorite.hooks";

export default function FavoriteScreen({ route, navigation: { goBack } }) {
  const {
    myFavoriteCocktails,
    loadFavoriteCocktails,
    removeFavoriteCocktailByName,
    isLoading
  } = useFavoriteCocktailStore();
  useEffect(() => {
    loadFavoriteCocktails();
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView backgroundColor={Colors.tintColor} />
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
            Mes cocktails favoris
          </Text>
        </View>
        <View style={styles.backButtonContainer}>
          <BackButton
            onPress={() => goBack()}
            iconName="md-close-circle-outline"
          />
        </View>
      </View>
      <Text>{myFavoriteCocktails.length}</Text>
      {myFavoriteCocktails.map(cocktail => (
        <Button
          title={cocktail.name}
          disabled={isLoading}
          color="white"
          onPress={() => removeFavoriteCocktailByName(cocktail.name)}
        />
      ))}
      {isLoading && <Text>Loading</Text>}
    </View>
  );
}
