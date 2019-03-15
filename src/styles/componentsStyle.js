import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const editTextCustom = StyleSheet.create({
  container: {}
});
const cusButton = StyleSheet.create({
  container: {
    width: width * 0.8,
    height: height * 0.08,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    margin: 5
  }
});


// Export style's components
export { cusButton, editTextCustom, };
