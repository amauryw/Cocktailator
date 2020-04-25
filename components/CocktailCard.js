import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Layout from "../constants/Layout";

export const CoctailCard = ({ label, uri, inversed, backgroundColor }) => {
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
        <Text>{label}</Text>
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
    <View style={{ ...styles.container, backgroundColor: backgroundColor }}>
      {inversed ? renderImageLeft() : renderImageRight()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: Layout.margin.medium,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  card: {
    flex: 1,
    backgroundColor: "pink",
    borderRadius: 5,
    borderWidth: 2,
    flexDirection: "row",
    margin: Layout.margin.small
  },
  image: {
    flex: 1,
    width: 100,
    aspectRatio: 1,
    borderRadius: 5
  }
});
