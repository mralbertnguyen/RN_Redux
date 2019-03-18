import React, { Component } from "react";
import { KeyboardAvoidingView, DeviceEventEmitter } from "react-native";
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
      txtId: null,

      spinnerVisible: false,
      modalVisible: false,
      modalMessage: null,
      errorEmpty: "Please type title and desc",

      mode: "add"
    };
  }

  componentWillMount() {
    let { params } = this.props.navigation.state;

    let getId = params ? params.id : null;
    let getTitle = params ? params.title : null;
    let getDesc = params ? params.title : null;

    if ((getId != null) & (getTitle != null) & (getDesc != null)) {
      this.setState({
        txtTitle : getTitle,
        txtDesc : getDesc,
        txtId : getId

      })
      console.log(getId);
      console.log(getTitle);
      console.log(getDesc);
    }
  }

  render() {
    const { goBack } = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <Container>
          <HeaderWithBackIcon
            onPress={() => {
              goBack();
            }}
            title={this.state.headerTitle}
          />
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
                onPress={() => this.backToHome()}
                txtLabel={this.state.lblBtnCancel}
              />
            </Form>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    );
  }

  saveNote = async () => {
    let _id = this.state.txtId
    let _title = this.state.txtTitle;
    let _desc = this.state.txtDesc;

    let isTitleEmpty = handler.isEmpty(_title);
    let isDescEmpty = handler.isEmpty(_desc);

    if (!isTitleEmpty & !isDescEmpty) {
      this.setState({
        spinnerVisible: true
      });

      if(_id == null){
        // Call add note api
        var noteResultAdd = await apis.addNewNote(_title, _desc);

      }else{
        var noteResultUpdate = await apis.updateNote(_id, _title, _desc);
      }
      this.setState({
        spinnerVisible: false
      });

      // Show popup
      this.props.navigation.goBack();
      // Emit event
      DeviceEventEmitter.emit("update list");
    } else {
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

  backToHome = () => {
    this.props.navigation.goBack();
  };
}

export default Note;
