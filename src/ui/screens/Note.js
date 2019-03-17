import React, { Component } from "react";
import { KeyboardAvoidingView } from "react-native";
import { Container, Content, Form } from "native-base";

import HeaderWithBackIcon from "../components/HeaderWithBackIcon";
import ItemEditText from "../components/ItemEditText";
import EdtMulLine from "../components/EdtMulLine";
import ButtonCus from "../components/ButtonCus";
import SpinnerCus from "../components/SpinnerCus";
import ModalCus from "../components/ModalCus";

import DataHandler from "../../scripts/dataHandler";
const handler = new DataHandler();

import APIs from "../../api/apiCentral";
const apis = new APIs();
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

      spinnerVisible: false,
      modalVisible: false,
      modalMessage: null,
      errorEmpty : "Please type title and desc"
    };
  }
  render() {
    const{goBack} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Container>
          <HeaderWithBackIcon title={this.state.headerTitle} />
          <Content>
            <Form>
              {/* Custom Modal popup */}
              <ModalCus
                visible={this.state.modalVisible}
                message={this.state.modalMessage}
                onPressOK={() => {
                  this.setState({ modalVisible: false });
                }}
              />
              {/* Custom spinner */}
              <SpinnerCus visible={this.state.spinnerVisible} />
              {/* Type title for note */}
              <ItemEditText
                label={this.state.lblTitle}
                onChangeText={title => {
                  this.setState({
                    txtTitle: title
                  });
                }}
                text={this.state.txtTitle}
                secureTextEntry={false}
              />
              {/* Type desc for note with set 20 line as default */}
              <EdtMulLine
                label={this.state.lblDesc}
                text={this.state.txtDesc}
                onChangeText={desc => {
                  this.setState({
                    txtDesc: desc
                  });
                }}
              />
              {/* Button save */}
              <ButtonCus
                onPress={() => this.saveNote()}
                txtLabel={this.state.lblBtnSave}
              />
              {/* Button cancel */}
              <ButtonCus
                onPress={() => goBack}
                txtLabel={this.state.lblBtnCancel}
              />
            </Form>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    );
  }

  saveNote = async () => {
    let _title = this.state.txtTitle;
    let _desc = this.state.txtDesc;
    
    console.log(_title + '\n' + _desc);

    let isTitleEmpty = handler.isEmpty(_title);
    let isDescEmpty = handler.isEmpty(_desc);

    if (!isTitleEmpty & !isDescEmpty) {
      // Enable spinner
      this.setState({
        spinnerVisible: true
      });
      // Call add note api
      var noteResult = await apis.addNewNote(_title, _desc);
      console.log(noteResult)
      // Disable spinner
      this.setState({
        spinnerVisible: false
      });
      // Show popup
      this.showResult(noteResult.message);
    }else{
      this.showResult(this.state.errorEmpty);
    }
  };
  showResult = message => {

    this.setState({
      modalVisible: true,
      modalMessage: message
    });

    // GET STATUS
  };
}

export default Note;
