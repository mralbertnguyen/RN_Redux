import React, { Component } from 'react';
import { YellowBox } from 'react-native';
import { Container, Content, Form, Label, Input,Item } from 'native-base';

// Import Components
import HeaderWithBackIcon from "../components/HeaderWithBackIcon";
import ItemEditText from '../components/ItemEditText';
import ButtonCus from '../components/ButtonCus';
import SpinnerCus from '../components/SpinnerCus';
import ModalCus from '../components/ModalCus';
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
      spinnerVisible: false,
      modalVisible : false,
      modalMessage : null
    };
  }
  render() {
    const {goBack} = this.props.navigation;
    return (
      <Container>
      {/* Custom header */}
        <HeaderWithBackIcon onPress={()=>{goBack()}} title={this.state.headerTitle} />
        <Content>
            {/* Custom Modal popup */}
            <ModalCus
              visible = {this.state.modalVisible}
              message = {this.state.modalMessage}
              onPressOK = {()=>{
                console.log("Press ok");
                this.setState({modalVisible : false})}}
            />
            {/* Custom spinner */}
            <SpinnerCus
              visible = {this.state.spinnerVisible}
            />
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
                    onPress = {()=>{goBack()}}
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
   handleRegister = async () =>{
    let usn = handler.isEmpty(this.state.txtUserName);
    let pwd = handler.isEmpty(this.state.txtPwd);
    let rePwd = handler.isEmpty(this.state.txtRetypePwd);

    if(!usn & !pwd & !rePwd){
      // Check pwd and retype same
      if(this.isSamePwd()){
        try{
          this.setState({spinnerVisible : true})
          // Call API
          let result = await apis.registerUser(this.state.txtUserName, this.state.txtPwd);
          this.setState({
            spinnerVisible : false,
          })
          this.showResult(result);
          
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

   // Show result return from API
   showResult = (result) => {
    console.log("Result: " + result.message);
     
    let message = result.message;
    // console.log(parsedJson.toString());

    this.setState({
      modalVisible : true,
      modalMessage : message,
    })

    // GET STATUS
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
}

export default SignIn;
