import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Container, Content, Form } from "native-base";

import HeaderWithBackIcon from "../components/HeaderWithBackIcon";
import ItemEditText from "../components/ItemEditText";
import EdtMulLine from "../components/EdtMulLine";
import ButtonCus from '../components/ButtonCus';
class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: "Note",
      lblTitle: "Title",
      lblDesc: "Description",

      txtTitle: null,
      txtDesc: null,
      lblBtnSave: "Save",
      lblBtnCancel: "Cancel",

    };
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Container>
          <HeaderWithBackIcon title={this.state.headerTitle} />
          <Content>
            <Form>
              {/* Type title for note */}
              <ItemEditText
                label={this.state.lblTitle}
                onChangeText={title => {
                  this.setState({
                    txtTitle: title
                  });
                }}
                secureTextEntry={false}
              />
              {/* Type desc for note with set 20 line as default */}
              <EdtMulLine
                label={this.state.lblDesc}
                onChangeText={title => {
                  this.setState({
                    txtTitle: title
                  });
                }}
              />

              {/* Button save */}
              <ButtonCus onPress = {()=>this.saveNote()} txtLabel = {this.state.lblBtnSave}/>
              {/* Button cancel */}
              <ButtonCus onPress = {()=>this.cancel()} txtLabel = {this.state.lblBtnCancel}/>
            </Form>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    );
  }

  saveNote = () => {
    console.log("Pressed save note button");
  }

  cancel = ()=>{
      console.log("pressed cancel button");
  }
}

export default Note;
