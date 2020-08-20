import { Dimensions } from "react-native";

export const getScreenWidthAndHeight = () => ({
  width: Dimensions.get("window").width,
  height: Dimensions.get("window").height,
});