import { StyleSheet } from "react-native";
import colors from "../../../themes/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    color: colors.primary,
  },
});