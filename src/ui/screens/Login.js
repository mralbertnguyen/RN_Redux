import React, { Component } from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { Container, Content, Form ,Headers} from "native-base";

import { View, Dimensions, StyleSheet, YellowBox } from "react-native";

import ItemEditText from "../components/ItemEditText";
import ButtonCus from "../components/ButtonCus";
import DataHandler from "../../scripts/dataHandler";
const handler = new DataHandler();

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
    console.ignoredYellowBox = ["Warning:"];
    this.state = {
      userNameErrorMessage: "Please type username",
      passwordErrorMessage: "Please type password",

      lblUsn: "Username",
      lblPwd: "Password",

      txtBtnSignIn: "Sign In",
      txtBtnLogin: "Login",

      txtUsn: null,
      txtPwd: null
    };
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
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
                handleLogin(this.state.username, this.state.password)
              }
            />
            <ButtonCus
              txtLabel={this.state.txtBtnSignIn}
              onPress={this.changeToSignIn}
            />
          </Form>
        </Content>
      </Container>
    );
  }
  handleLogin = (username, password) => {
    let usn = handler.isEmpty(username);
    let pwd = handler.isEmpty(password);

    if (!usn & !pwd) {
      console.log("OK");
    } else {
      console.log("Empty");
    }
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
    alignItems: "center",
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
