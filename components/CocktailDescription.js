import * as React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { Dimensions } from 'react-native';

export const CocktailDescriptionHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.leftColumn}>
        <Text style={styles.textHeader}>
          Ingrédients
        </Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.textHeader}>
          Quantités
        </Text>
      </View>
    </View >
  );
};

export const CocktailDescription = ({ ingredient, measure }) => {
  return (
    <View style={styles.tab}    >
      <View style={styles.leftColumnRow}>
        <Text style={styles.text}>
          {ingredient}
        </Text>
      </View>
      <View style={styles.rightColumnRow}>
        <Text style={styles.text}>
          {measure}
        </Text>
      </View>
    </View >
  );
};


const headerHeight = 60;
const headerPadding = 20;
const rowHeight = 30;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: headerHeight,
    padding: headerPadding,
    paddingBottom: 0
  },
  tab: {
    flexDirection: "row",
    height: rowHeight,
    paddingHorizontal: headerPadding,
  },
  leftColumn: {
    flex: 1,
    backgroundColor: Colors.tintColorLight,
    borderTopLeftRadius: 5,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    borderRightWidth: 1,
    borderRightColor: Colors.borderColor,
  },
  rightColumn: {
    flex: 1,
    backgroundColor: Colors.tintColorLighter,
    borderTopRightRadius: 5,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
  },
  leftColumnRow: {
    flex: 1,
    backgroundColor: Colors.tintColorLight,
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: Colors.borderColor,
  },
  rightColumnRow: {
    flex: 1,
    backgroundColor: Colors.tintColorLighter,
    justifyContent: "center",
  },
  textHeader: {
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
  }
});