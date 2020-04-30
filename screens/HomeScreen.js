import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TextInput, Button } from "react-native";
import { CoctailCard } from "../components/CocktailCard";
import { FloatingButton } from "../components/FloatingButton";
import { useFavoriteStore } from "../store/favorite.hooks";
import Colors from "../constants/Colors";
import { Makiko } from 'react-native-textinput-effects';
import { Kaede } from 'react-native-textinput-effects';

const LOGO_HEIGHT = 80;

export default function HomeScreen({ navigation }) {
  const { isLoading, myFavoriteCocktails, loadCocktails } = useFavoriteStore();
  const [inputValue, setInputValue] = useState("");
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
      <Kaede
        label={'Ingrédient'}
        inputPadding={16}
        inputStyle={styles.textContainer}
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
      <ScrollView style={styles.scrollView}>
        <View style={styles.scrollViewContainer}>
          {myFavoriteCocktails.map((cocktail, index) => {
            const evenLine = index % 2 === 0;
            return (
              <CoctailCard
                key={cocktail.id}
                label={cocktail.name}
                uri={cocktail.imagePath}
                inversed={evenLine}
                backgroundColor={
                  evenLine ? Colors.oddLine : Colors.evenLine
                }
              />
            );
          })}
        </View>
      </ScrollView>
      <FloatingButton
        onPress={() => loadCocktails(inputValue)}
        isLoading={isLoading}
        verticalOffset={0}
        iconName="md-wine"
      />
      <FloatingButton
        onPress={() => navigation.navigate('Test')}
        verticalOffset={1}
        iconName="md-add-circle-outline"
      />
    </View >
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
    flexDirection: "column"
  },
  textContainer: {
    backgroundColor: "gray",
    color: "white"                 //Text color
  }
});
