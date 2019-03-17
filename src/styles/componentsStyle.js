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

const itemCustom = StyleSheet.create({
  container: {
    backgroundColor: "red",
    margin: 10,
    width: width * 0.8,
    height: height * 0.1,
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  title: {
    fontSize: 40,
    alignSelf: "flex-start"
  },
  desc: {
    fontSize: 25,
    alignSelf: "flex-start"
  }
});

const edtCustom = StyleSheet.create({
    container: {
        marginTop : 10
    }
})
const edtMulLine = StyleSheet.create({
  container: {
    marginTop :10,
    height: 300
  }
});
// Export style's components
export { cusButton, editTextCustom, itemCustom, edtMulLine ,edtCustom};
