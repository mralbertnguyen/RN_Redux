import React, { Component } from "react";

import { Container, Content, Form } from "native-base";

import { Dimensions, StyleSheet } from "react-native";

import ItemEditText from "../components/ItemEditText";
import ButtonCus from "../components/ButtonCus";
import SpinnerCus from "../components/SpinnerCus";
import ModalCus from "../components/ModalCus";

import DataHandler from "../../scripts/dataHandler";
const handler = new DataHandler();

import APIs from "../../api/apiCentral";
const api = new APIs();
/**
 * Login page structures
 * Logo
 * Input form :
 *  - User name
 *  - Password
 * Check box remember
 * Button form:
 *  - Login button
 *  - Sign in button
 */
class Login extends Component {
  constructor(props) {
    super(props);
    // Disable Warning
    this.state = {
      userNameErrorMessage: "Please type username",
      passwordErrorMessage: "Please type password",

      lblUsn: "Username",
      lblPwd: "Password",

      txtBtnSignIn: "Sign In",
      txtBtnLogin: "Login",

      txtUsn: null,
      txtPwd: null,

      spinnerVisible: false,
      modalVisible: false,
      modalMessage: null
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <ModalCus
              visible={this.state.modalVisible}
              message={this.state.modalMessage}
              onPressOK={() => {
                console.log("Press ok");
                this.setState({ modalVisible: false });
              }}
            />
            {/* Custom spinner */}
            <SpinnerCus visible={this.state.spinnerVisible} />

            {/* Type username */}
            <ItemEditText
              label={this.state.lblUsn}
              secureTextEntry={false}
              onChangeText={usn => {
                this.setState({ txtUsn: usn });
              }}
            />
            {/* Type password */}
            <ItemEditText
              label={this.state.lblPwd}
              secureTextEntry={true}
              onChangeText={pwd => {
                this.setState({ txtPwd: pwd });
              }}
            />
          </Form>

          <Form>
            {/* Button login */}
            <ButtonCus
              txtLabel={this.state.txtBtnLogin}
              onPress={() =>
                this.handleLogin(this.state.txtUsn, this.state.txtPwd)
              }
            />
            <ButtonCus
              txtLabel={this.state.txtBtnSignIn}
              onPress={()=>{this.props.navigation.navigate('SignIn')}}
            />
          </Form>
        </Content>
      </Container>
    );
  }
  handleLogin = async (username, password) => {
    let usn = handler.isEmpty(username);
    let pwd = handler.isEmpty(password);

    if (!usn & !pwd) {
      console.log("OK");
      // Enable spinner
      this.setState({
        spinnerVisible: true
      });
      let result = await api.userLogin(username, password);
      // Disable spinner
      this.setState({
        spinnerVisible: false
      });

      // Success to move to Home disable back 
      if(result.status == "SUCCESS"){
        // Change to Home
        this.props.navigation.navigate('Home');
      }else{
        this.showResult(result.message);
      }
      
    } else {
      this.showResult("Please type username and password!");
    }
  };

  showResult = message => {
    // enable modal with message return from result
    this.setState({
      modalVisible: true,
      modalMessage: message
    });
  };
}

/**
 * Login works:
 * Get user name and password
 * check isEmpty
 * check format
 * get data from database and compare
 */

/**
 * Change to sign in screen
 */
var changeToSignIn = () => {};

const { height, width } = Dimensions.get("window");
// Customize edit text
const loginStyle = StyleSheet.create({
  container: {
    height: height,
    width: width,
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  error: {
    color: "red"
  }
});

export default Login;
