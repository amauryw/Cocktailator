import * as React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";
import Colors from "../constants/Colors";
import { fontStyles, smallFont } from "../constants/Fonts";

export const CocktailDescriptionHeader = () => {
  return (
    <View style={styles.header}>
      <View style={{ ...styles.headerColumn, borderTopLeftRadius: 5 }}>
        <Text style={[fontStyles.standardFont, fontStyles.bold, fontStyles.centered]}>
          Ingrédients
        </Text>
      </View>
      <View style={{ ...styles.headerColumn, borderTopRightRadius: 5 }}>
        <Text style={[fontStyles.standardFont, fontStyles.bold, fontStyles.centered]}>
          Quantités
        </Text>
      </View>
    </View >
  );
};

export const CocktailDescription = ({ ingredient, measure, needRadius }) => {
  return (
    <View style={styles.tab}>
      <View style={[styles.dataColumn, (needRadius) ? { borderBottomLeftRadius: 5 } : { borderBottomLeftRadius: 0 }]}>
        <Text style={[fontStyles.standardFont, fontStyles.centered]}>
          {ingredient}
        </Text>
      </View>
      <View style={[styles.dataColumn, (needRadius) ? { borderBottomRightRadius: 5 } : { borderBottomRightRadius: 0 }]}>
        <Text style={[fontStyles.standardFont, fontStyles.centered]}>
          {measure}
        </Text>
      </View>
    </View >
  )
};


const smallMargin = 15;
const bigMargin = 30;
const headerHeight = smallFont + bigMargin;
const rowHeight = smallFont + smallMargin;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: headerHeight,
    paddingBottom: 0
  },
  tab: {
    flexDirection: "row",
    height: rowHeight,
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
  test: {
    borderBottomRightRadius: 20,
  }
});