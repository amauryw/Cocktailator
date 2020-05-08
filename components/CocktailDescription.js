import * as React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";

export const CocktailDescriptionHeader = () => {
  return (
    <View style={styles.header}>
      <View style={{ ...styles.headerColumn, borderTopLeftRadius: 5 }}>
        <Text style={{ ...styles.standardFont, fontWeight: "bold" }}>
          Ingrédients
        </Text>
      </View>
      <View style={{ ...styles.headerColumn, borderTopRightRadius: 5 }}>
        <Text style={{ ...styles.standardFont, fontWeight: "bold" }}>
          Quantités
        </Text>
      </View>
    </View >
  );
};

export const CocktailDescription = ({ ingredient, measure }) => {
  return (
    <View style={styles.tab}    >
      <View style={styles.dataColumn}>
        <Text style={styles.standardFont}>
          {ingredient}
        </Text>
      </View>
      <View style={styles.dataColumn}>
        <Text style={styles.standardFont}>
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
  headerColumn: {
    flex: 1,
    backgroundColor: Colors.tintColorLight,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    borderRightWidth: 1,
    borderRightColor: Colors.borderColor,
  },
  dataColumn: {
    flex: 1,
    backgroundColor: Colors.tintColorLighter,
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: Colors.borderColor,
  },
  standardFont: {
    textAlign: "center",
    color: 'black',
  }
});