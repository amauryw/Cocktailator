import * as React from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import Layout from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export const FloatingButton = ({ onPress, isLoading, hasErrored }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Ionicons
          name={hasErrored ? "md-warning" : "md-wine"}
          size={50}
          color={Colors.secondaryColor}
        />
      )}
    </TouchableOpacity>
  );
};
const BUTTON_HEIGHT = 80;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: BUTTON_HEIGHT / 2,
    margin: Layout.margin.medium,
    backgroundColor: Colors.primaryColor,
    height: BUTTON_HEIGHT,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8
  }
});
