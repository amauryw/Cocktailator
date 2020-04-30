import * as React from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import Layout from "../constants/Layout";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export const FloatingButton = ({ onPress, isLoading, verticalOffset, iconName }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles(verticalOffset).container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
          <Ionicons name={iconName} size={BUTTON_HEIGHT-10} color={Colors.secondaryColor} />
        )}
    </TouchableOpacity>
  );
};
const BUTTON_HEIGHT = 50;
const styles = (verticalOffset) => StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0 + verticalOffset*BUTTON_HEIGHT,
    right: 0,
    borderRadius: BUTTON_HEIGHT / 2,
    margin: Layout.margin.medium,
    backgroundColor: Colors.primaryColor,
    height: BUTTON_HEIGHT,
    width: BUTTON_HEIGHT,
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
