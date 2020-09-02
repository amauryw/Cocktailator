import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Picker,
  SafeAreaView,
} from "react-native";
import { CoctailCard } from "../components/CocktailCard";
import { FloatingButton } from "../components/FloatingButton";
import { MyInput } from "../components/MyInput";
import { useResultCocktailStore } from "../store/resultCocktail.hooks";
import Colors from "../constants/Colors";
import LottieView from "lottie-react-native";

const LOGO_HEIGHT = 150;
const PICKER_HEIGHT_IOS = 60;

export default function HomeScreen({ navigation }) {
  const { isLoading, myResultCocktails, loadCocktails } = useResultCocktailStore();
  const [inputValue, setInputValue] = useState("");
  const [pickerValue, setPickerValue] = useState("ingredient");
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
      <SafeAreaView backgroundColor={Colors.tintColor}/>
      {renderHeader()}
      <View style={styles.searchBar}>
        <MyInput
          iconName={"md-create"}
          value={inputValue}
          onChangeText={value => setInputValue(value)}
          onClear={() => setInputValue("")}
        />
        <View style={{ flex: 0.7 }}>
          <Picker
            selectedValue={pickerValue}
            mode="dropdown"
            onValueChange={itemValue => setPickerValue(itemValue)}
          >
            <Picker.Item label="Alcool" value="ingredient" />
            <Picker.Item label="Nom" value="name" />
            <Picker.Item label="Random" value="random" />
          </Picker>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.scrollViewContainer}>
          {myResultCocktails.map((cocktail, index) => {
            const evenLine = index % 2 === 0;
            return (
              <CoctailCard
                key={cocktail.id}
                label={cocktail.name}
                uri={cocktail.imagePath}
                inversed={evenLine}
                backgroundColor={evenLine ? Colors.oddLine : Colors.evenLine}
                onPress={() =>
                  navigation.navigate("Recipe", { id: cocktail.id })
                }
              />
            );
          })}
        </View>
      </ScrollView>
      <FloatingButton
        onPress={() => navigation.navigate("Favorite")}
        verticalOffset={1}
        iconName="md-add-circle-outline"
      />
      <FloatingButton
        onPress={() => loadCocktails(inputValue, pickerValue)}
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
    flexDirection: "column"
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
    alignItems: "center",
    maxHeight: PICKER_HEIGHT_IOS
  }
});
