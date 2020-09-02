import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import Colors from "../constants/Colors";
import { BackButton } from "../components/BackButton";
import { styles } from "./RecipeScreen";
import { fontStyles } from "../constants/Fonts";

export default function FavoriteScreen({ route, navigation: { goBack } }) {
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
    </View>
  );
}
