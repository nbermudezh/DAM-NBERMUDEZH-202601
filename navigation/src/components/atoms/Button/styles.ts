import { StyleSheet } from "react-native";
import colors from "../../../themes/colors";

export default StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  text: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
});