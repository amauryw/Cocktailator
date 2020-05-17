import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, TextInput, ScrollView } from "react-native";
import { CoctailCard } from "../components/CocktailCard";
import { FloatingButton } from "../components/FloatingButton";
import { MyInput } from "../components/MyInput";
import { useFavoriteStore } from "../store/favorite.hooks";
import Colors from "../constants/Colors";
//import { Fumi } from "react-native-textinput-effects";
import LottieView from "lottie-react-native";
import { Picker } from '@react-native-community/picker';
import { TextField } from 'react-native-material-textfield';

const LOGO_HEIGHT = 150;

export default function HomeScreen({ navigation }) {
  const { isLoading, myFavoriteCocktails, loadCocktails } = useFavoriteStore();
  const [inputValue, setInputValue] = useState("");
  const [pickerValue, setPickerValue] = useState("Ingredient");
  const animation = useRef(null);
  useEffect(() => {
    animation.current.play();
  }, []);
  const renderHeader = () => {
    return (
      <>
        <View style={styles.headerContainer}>
          <LottieView
            ref={animation}
            style={styles.logoPlace}
            source={require("../assets/cocktailAnimation.json")}
          />
        </View>
      </>
    );
  };
  return (
    <View style={styles.mainContainer}>
      {renderHeader()}
      <View style={styles.searchBar}>
        <MyInput
          iconName={'md-create'}
          value={inputValue}
          onChangeText={value => setInputValue(value)}
          onClear={()=> setInputValue("")}
        />
        <Picker
          selectedValue={pickerValue}
          style={{ flex: 1 }}
          mode='dropdown'
          onValueChange={(itemValue, itemIndex) =>
            setPickerValue(itemValue)
          }>
          <Picker.Item label="Ingrédient" value="ingredient" />
          <Picker.Item label="test" value="test" />
        </Picker>
      </View>
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
                backgroundColor={evenLine ? Colors.oddLine : Colors.evenLine}
                onPress={() => navigation.navigate("Recipe", { id: cocktail.id })}
              />
            );
          })}
        </View>
      </ScrollView>
      <FloatingButton
        //onPress={() => navigation.navigate("Test")}
        verticalOffset={1}
        iconName="md-add-circle-outline"
      />
      <FloatingButton
        onPress={() => loadCocktails(inputValue)}
        isLoading={isLoading}
        verticalOffset={0}
        iconName="md-search"
      />
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
    backgroundColor: Colors.tintColor
  },
  logoPlace: {
    width: LOGO_HEIGHT,
    height: LOGO_HEIGHT
  },
  scrollView: {
    flex: 1,
    backgroundColor: "white",
    flexDirection: "column"
  },
  scrollViewContainer: {
    flex: 1,
    flexDirection: "column",

  },
  textContainer: {
    backgroundColor: Colors.tintColorLighter,
    color: Colors.tintColor
  },
  labelStyleContainer: {
    backgroundColor: Colors.tintColorLight,
    color: Colors.tintColor
  },
  searchBar: {
    flexDirection: "row",
  },
});
