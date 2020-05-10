import * as React from "react";
import { View, StyleSheet, Text, } from "react-native";
import { fontStyles, smallFont } from "../constants/Fonts";


export const DisplayInstructions = ({ instruction, index }) => {
    return (
        <View style={styles.header}>
            < Text style={[fontStyles.standardFont, fontStyles.secondaryFontColor, fontStyles.notVerticalCentered]}>
                {`${index + 1}.\t\t`}
            </Text >
            < Text style={[fontStyles.standardFont, fontStyles.secondaryFontColor, fontStyles.notVerticalCentered]}>
                {`${instruction}`}
            </Text >
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        marginLeft: 20,
        marginRight: 20,
    },
    standardFont: {
        fontSize: smallFont,
        color: 'white',
    },

});