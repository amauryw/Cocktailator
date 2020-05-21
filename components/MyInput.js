import React, { useRef, useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { TextField } from "react-native-material-textfield";
import { get } from "lodash";

export const MyInput = ({ iconName, value, onChangeText, onClear }) => {
  const refText = useRef(null);
  const clear = () => {
    if (get(refText, "current.inputRef.current.clear", "")) {
      refText.current.inputRef.current.clear();
      onClear();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.SectionStyle}>
        <TouchableOpacity onPress={() => clear()} style={styles.ImageStyle}>
          <Ionicons
            name={iconName}
            size={BUTTON_HEIGHT - 20}
            color={Colors.tintColor}
          />
        </TouchableOpacity>
        <TextField
          value={value}
          containerStyle={{ flex: 1 }}
          contentInset={{ top: 2 }}
          label="Recherche par: "
          lineWidth={0}
          activeLineWidth={0}
          onChangeText={onChangeText}
          ref={refText}
        ></TextField>
      </View>
    </View>
  );
};
const BUTTON_HEIGHT = 40;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.tintColorLighter
  },

  SectionStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: BUTTON_HEIGHT,
    width: BUTTON_HEIGHT,
    alignItems: "center"
  }
});
