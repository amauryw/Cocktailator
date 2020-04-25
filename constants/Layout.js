import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default {
  window: {
    width,
    height
  },
  margin: {
    small: 2,
    medium: 8,
  },
  isSmallDevice: width < 375
};
