import { AsyncStorage } from "react-native";
export const FAVORITE_COCKTAILS = "FAVORITE_COCKTAILS";

export const setItem = async (
  key: string,
  item: Object | string | any[],
  typeExemple: "string" | "object" | "array"
): Promise<void> => {
  switch (typeExemple) {
    case "array":
      await AsyncStorage.setItem(key, JSON.stringify(item));
      break;
    case "string":
      await AsyncStorage.setItem(key, item);
      break;
    case "object":
      await AsyncStorage.setItem(key, JSON.stringify(item));
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
  typeExemple: "string" | "object" | "array"
): Promise<any> => {
  try {
    switch (typeExemple) {
      case "array":
        const arrayValue = await AsyncStorage.getItem(key);
        // default value
        if (arrayValue === "1") return [];
        return JSON.parse(arrayValue);
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
