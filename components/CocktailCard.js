import * as React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Layout from "../constants/Layout";

export const CoctailCard = ({ label, uri, inversed, backgroundColor, onPress }) => {
  const renderImage = () => {
    return (
      <View>
        <Image
          style={styles.image}
          source={{
            uri
          }}
        ></Image>
      </View>
    );
  };
  const renderDescription = () => {
    return (
      <View>
        <Text style={styles.text}>{label}</Text>
      </View>
    );
  };

  const renderImageRight = () => {
    return (
      <>
        {renderDescription()}
        {renderImage()}
      </>
    );
  };

  const renderImageLeft = () => {
    return (
      <>
        {renderImage()}
        {renderDescription()}
      </>
    );
  };
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
        {inversed ? renderImageLeft() : renderImageRight()}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: Layout.margin.medium,
    flexDirection: "row",
    justifyContent: "space-between",
    padding:10,
  },
  card: {
    flex: 1,
    backgroundColor: "pink",
    borderRadius: 5,
    borderWidth: 2,
    flexDirection: "row",
    margin: Layout.margin.small,
    padding: 10,
  },
  image: {
    flex: 1,
    width: 100,
    aspectRatio: 1,
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    top: 40,
  }
});
