import * as React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { CoctailCard } from "../components/CocktailCard";

const LOGO_HEIGHT = 80;

export default function HomeScreen() {
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
          <CoctailCard
            label="coucou"
            uri="https://www.thecocktaildb.com/images/media/drink/g1vnbe1493067747.jpg"
          />
          <CoctailCard
            label="coucou"
            uri="https://www.thecocktaildb.com/images/media/drink/g1vnbe1493067747.jpg"
            inversed
          />
          <CoctailCard
            label="coucou"
            uri="https://www.thecocktaildb.com/images/media/drink/g1vnbe1493067747.jpg"
          />
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
