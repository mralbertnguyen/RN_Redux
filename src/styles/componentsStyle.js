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

const modalCus = StyleSheet.create({
  container: { 
      flex :  1,
      alignItems : 'center',
      justifyContent : 'center',
  },
  brg : {
    width : '100%',
    height : '100%',
    position : 'absolute',
    backgroundColor : 'black',
    opacity : 0.2
  },
  panel : {
    height : height * 0.2,
    width : width * 0.6,
    backgroundColor : 'white',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 10,
  },
  message : {
    fontSize : 20,
  },
  btn : {
    height : height * 0.05,
    width : width * 0.6,
    backgroundColor : 'green',
    alignItems : 'center',
    justifyContent : 'center'
  },
  btnLabel : {
  fontSize : 25,
}
})

// Export style's components
export { cusButton, editTextCustom, itemCustom, edtMulLine ,edtCustom, modalCus};
