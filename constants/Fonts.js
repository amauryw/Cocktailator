import { StyleSheet } from 'react-native';
const primaryColor = 'black';
const secondaryColor = 'white';
export const smallFont = 15;
export const bigFont = 30;
export const fontStyles = StyleSheet.create({
    standardFont: {
        fontSize: smallFont,
        textAlignVertical: "center",
        color: primaryColor,
    },
    underligned: {
        textDecorationLine: 'underline'
    },
    bold: {
        fontWeight: "bold"
    },
    titleSize: {
        fontSize: bigFont,
    },
    secondaryFontColor: {
        color: secondaryColor,
    },
    centered: {
        textAlign: "center",
    }
})