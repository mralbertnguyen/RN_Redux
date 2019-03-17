import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { Container, Content, Form, Label, Input,Item } from 'native-base';

// Import Components
import HeaderWithBackIcon from "../components/HeaderWithBackIcon";
import ItemEditText from '../components/ItemEditText';
import ButtonCus from '../components/ButtonCus';
// import SpinnerCus from '../components/SpinnerCus';
// Import script 
import DataHandler from '../../scripts/dataHandler';
const handler = new DataHandler();

import APIs from '../../api/apiCentral';
const apis = new APIs();
class SignIn extends Component {
  constructor(props) {
    super(props);
    // disable warning
    console.ignoredYellowBox = ['Warning:']
    this.state = {
      headerTitle: "Register new account",
      lblUserName: "Username",
      lblPwd: "Password",
      lblRePwd: "Retype password",
      lblLogin: "Login",
      lblCancel: "Cancel",
      txtUserName: null,
      txtPwd: null,
      txtRetypePwd: null,
      spinnerVisible: false
    };
  }
  render() {
    const {goBack} = this.props.navigation;
    return (
      <Container>
      {/* Custom header */}
        <HeaderWithBackIcon title={this.state.headerTitle} />
        <Content>
            {/* Custom spinner */}
            {/* <SpinnerCus
              visible = {this.state.spinnerVisible}
            /> */}
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
                    onPress = {this.handleRegister}
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
   handleRegister = () =>{
    let usn = handler.isEmpty(this.state.txtUserName);
    let pwd = handler.isEmpty(this.state.txtPwd);
    let rePwd = handler.isEmpty(this.state.txtRetypePwd);

    if(!usn & !pwd & !rePwd){
      // Check pwd and retype same
      if(this.isSamePwd()){
        console.log("Same");
        try{
          this.setState({spinnerVisible : true})
          apis.registerUser(this.state.txtUserName, this.state.txtPwd);
          this.setState({spinnerVisible : false})
        }catch(e){
          console.log("error: "+e.getMessage());
        }
      }else{
        console.log("Not Same");
      }
    }else{
      console.log("Empty");
    }
   }
   // Compare between pwd and retype pwd
   isSamePwd = () => {
     let pwd = this.state.txtPwd;
     let retype = this.state.txtRetypePwd;
     if(pwd === retype){
      return true;
     }
     return false;
   }
   // Cancel => back to login screen
   handleCancel = () => {
    goBack()
   }
}

export default SignIn;
