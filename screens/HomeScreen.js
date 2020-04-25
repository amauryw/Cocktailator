import * as React from "react";
import { StyleSheet, View } from "react-native";

const LOGO_HEIGHT = 80;

export default function HomeScreen() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View style={styles.logoPlace}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  logoPlace: {
    width: LOGO_HEIGHT,
    height: LOGO_HEIGHT,
    backgroundColor: "blue"
  }
});
