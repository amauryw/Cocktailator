import * as React from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const MARGIN_OFFSET = 10;
const DISTANCE_FROM_SIDE_SCREEN = 12;

export const FloatingButton = ({
  onPress,
  isLoading,
  verticalOffset,
  iconName
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles(verticalOffset).container}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Ionicons
          name={iconName}
          size={BUTTON_HEIGHT - 10}
          color={Colors.secondaryColor}
        />
      )}
    </TouchableOpacity>
  );
};
const BUTTON_HEIGHT = 50;
const styles = verticalOffset =>
  StyleSheet.create({
    container: {
      position: "absolute",
      bottom:
        DISTANCE_FROM_SIDE_SCREEN +
        verticalOffset * (BUTTON_HEIGHT + MARGIN_OFFSET),
      right: DISTANCE_FROM_SIDE_SCREEN,
      borderRadius: BUTTON_HEIGHT / 2,
      backgroundColor: Colors.tintColor,
      height: BUTTON_HEIGHT,
      width: BUTTON_HEIGHT,
      alignItems: "center",
      justifyContent: "center",
      shadowColor: Colors.tintColor,
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8
    }
  });
