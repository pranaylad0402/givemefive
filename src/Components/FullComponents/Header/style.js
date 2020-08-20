import { StyleSheet } from "react-native";
import { getScreenWidthAndHeight } from "../../../helpers";
const { width, height } = getScreenWidthAndHeight();
const styles = StyleSheet.create({
  headerIcon: {
    alignItems: "center",
    height: 40,
    width: 30,
    marginLeft: (width / 2) - 15
  },
  headerText: {
    color: '#F60C25',
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 13
  },
  headerLine: {
    borderBottomColor: '#F60C25',
    borderBottomWidth: 10,
  }
});
export default styles;