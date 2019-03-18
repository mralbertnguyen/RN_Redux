import { StyleSheet, Dimensions ,Platform} from "react-native";

const { height, width } = Dimensions.get("window");
const yellowDark = "#F3CD10";
const alphaGray = "rgba(112, 112, 112 , 0.56)";
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
    backgroundColor: "rgba(112, 112, 112 , 0.56)",
    padding : 10,
    marginTop : 10,
    marginBottom: 10,
    borderRadius : 5,
    width: width * 0.9,
    height: height * 0.14,
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "column",
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset : {
      width : 0,
      height : 3,
    }
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: "flex-start"
  },
  desc: {
    fontSize: 25,
    color: 'white',
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
