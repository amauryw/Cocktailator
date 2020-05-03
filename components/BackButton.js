import * as React from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";

export const BackButton = ({
    onPress,
    isLoading,
    iconName
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
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
const BUTTON_HEIGHT = 40;
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        borderRadius: BUTTON_HEIGHT / 2,
        backgroundColor: Colors.tintColor,
        height: BUTTON_HEIGHT,
        width: BUTTON_HEIGHT,
        alignItems: "center",
        justifyContent: "center",
    }
});
