import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { CoctailCard } from "../components/CocktailCard";
import { useFavoriteStore } from "../store/favorite.hooks";

const LOGO_HEIGHT = 80;

export default function HomeScreen() {
  const { myFavoriteCocktails } = useFavoriteStore();
  const renderHeader = () => {
    return (
      <>
        <View style={styles.headerContainer}>
          <View style={styles.logoPlace}></View>
        </View>
      </>
    );
  };
  return (
    <View style={styles.mainContainer}>
      {renderHeader()}
      <ScrollView style={styles.scrollView}>
        <View style={styles.scrollViewContainer}>
          {myFavoriteCocktails.map((cocktail, index) => (
            <CoctailCard
              label={cocktail.name}
              uri={cocktail.imagePath}
              inversed={index % 2 === 0}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  logoPlace: {
    width: LOGO_HEIGHT,
    height: LOGO_HEIGHT,
    backgroundColor: "blue"
  },
  scrollView: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column"
  },
  scrollViewContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "yellow"
  }
});
