import React, { Component } from "react";

import Icon from "react-native-vector-icons/FontAwesome";

import { Input, Button } from "react-native-elements";

import { View, Dimensions, StyleSheet } from "react-native";

import EditTextCustom from "../components/EditText";

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
    this.state = {
      userNameErrorMessage: "Please type username",
      passwordErrorMessage: "Please type password",

      txtBtnSignIn: "Sign In",
      txtBtnLogin: "Login",

      username: null,
      password: null
    };
  }

  render() {
    return (
      <View style={loginStyle.container}>
        {/* Customize input with customize icon */}
        <Input
          placeholder="User name"
          leftIcon={<Icon name="user" size={24} color="black" />}
          errorStyle={loginStyle.error}
          shake={true}
          onChangeText={_username => {
            this.setState({
              username: _username
            });
          }}
          errorMessage={this.state.userNameErrorMessage}
        />

        <EditTextCustom placeholder={"User name"} />
        {/* Button login */}
        <Button
          title={this.state.txtBtnLogin}
          onPress={() => handleLogin(this.state.username, this.state.password)}
          type="outline"
          raised={true}
        />
        <Button
          title={this.state.txtBtnSignIn}
          onPress={this.changeToSignIn}
          type="outline"
          raised={true}
        />
      </View>
    );
  }
}

/**
 * Login works:
 * Get user name and password
 * check isEmpty
 * check format
 * get data from database and compare
 */

handleLogin = (username, password) => {
  if (isEmpty(username) || isEmpty(password)) {
    console.log("empty");
  }
};

isEmpty = str => {
  if (str == "" || str == null) {
    return true;
  } else return false;
};
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
    justifyContent: "center"
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
