import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Content, Form, Label, Input,Item } from 'native-base';

// Import Components
import HeaderWithBackIcon from "../components/HeaderWithBackIcon";
import ItemEditText from '../components/ItemEditText';
import ButtonCus from '../components/ButtonCus';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: "Register new account",
      lblUserName: "Username",
      lblPwd: "Password",
      lblRePwd: "Retype password",
      lblLogin: "Login",
      lblCancel: "Cancel",
      txtUserName: "",
      txtPwd: "",
      txtRetypePwd: ""
    };
  }
  render() {
    return (
      <Container>
      {/* Custom header */}
        <HeaderWithBackIcon title={this.state.headerTitle} />
        <Content>
            {/* Form to type information */}
            <Form>
                {/* User name */}
                <ItemEditText
                    label = {this.state.lblUserName}
                    secureTextEntry = {false}
                    onChangeText = {(username)=>{this.setState({txtUserName: username})}}
                />
                {/* Password */}
                <ItemEditText
                    label = {this.state.lblPwd}
                    secureTextEntry = {true}
                    onChangeText = {(pwd)=>{this.setState({txtPwd: pwd})}}
                />
                {/* ReType Password */}
                <ItemEditText
                    label = {this.state.lblRePwd}
                    secureTextEntry = {true}
                    onChangeText = {(rePwd)=>{this.setState({txtRetypePwd: rePwd})}}
                />
            </Form>   
            {/* Button group */}
            <Form>
                <ButtonCus
                    onPress = {()=>{}}
                    txtLabel = {this.state.lblLogin}
                />
                <ButtonCus
                    txtLabel = {this.state.lblCancel}
                />
            </Form>
        </Content>
      </Container>
    );
  }

  /**
   * Functions handle work
   */

   // Login
   handleLogin = () =>{

   }
}


export default SignIn;
