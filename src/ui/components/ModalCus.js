import React, { Component } from "react";
import { Modal, Text, View, TouchableHighlight } from "react-native";
import {modalCus} from '../../styles/componentsStyle';
export default class ModalCus extends Component {
    constructor(props){
        super(props);
        this.state={
            lblOK : "OK"
        }
    }
    render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.visible}
      >
        <View style={modalCus.container}>
        {/* Make background opacity */}
          <View style={modalCus.brg}/>
          <View style={modalCus.panel}>
            <Text style={modalCus.message}>{this.props.message}</Text>
            <TouchableHighlight
            style ={modalCus.btn}
              onPress={this.props.onPressOK}
            >
              <Text style = {modalCus.btnLabel}>{this.state.lblOK}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}

