import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { fontStyles, smallFont } from "../constants/Fonts";

export const DisplayInstructions = ({ instruction, index }) => {
  return (
    <View style={styles.header}>
      <Text
        style={[
          fontStyles.standardFont,
          fontStyles.secondaryFontColor,
          fontStyles.notVerticalCentered,
          { flex: 1 }
        ]}
      >
        {`${index + 1}.`}
      </Text>
      <Text
        style={[
          fontStyles.standardFont,
          fontStyles.secondaryFontColor,
          fontStyles.notVerticalCentered,
          { flex: 9 }

        ]}
      >
        {`${instruction}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginLeft: 20,
    flexDirection: "row"
  }
});
