import { AsyncStorage } from "react-native";

export const setItem = async (
  key: string,
  item: Object | string
): Promise<void> => {
  switch (typeof item) {
    case typeof "string":
      await AsyncStorage.setItem(key, item);
      break;
    case typeof {}:
      await AsyncStorage.setItem(key, JSON.stringify(item));
      break;
    case undefined:
    case null:
      AsyncStorage.setItem(key, item);
      break;
    default:
      console.log(
        "[TYPE_NOT_HANDLED] Error while saving data on device",
        typeof item
      );
  }
};

export const getItem = async (
  key: string,
  typeExemple: "string" | "object"
): Promise<any> => {
  try {
    switch (typeExemple) {
      case "string":
        const stringValue = await AsyncStorage.getItem(key);
        return stringValue;
      case "object":
        const ObjectValue = await AsyncStorage.getItem(key);
        return JSON.parse(ObjectValue);
      default:
        throw new Error("TYPE_NOT_HANDLED");
    }
  } catch (error) {
    console.log("Error while gettig data on device", {
      type: typeof typeExemple,
      error
    });
  }
};
