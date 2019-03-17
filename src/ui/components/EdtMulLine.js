import React, { Component } from "react";
import { Input, Item, Label } from "native-base";
import {edtMulLine} from '../../styles/componentsStyle';
export default class EdtMulLine extends Component {
  render() {
    return (
      <Item floatingLabel>
        <Label>{this.props.label}</Label>
        <Input 
            multiline = {true}
            value = {this.props.text}
            style ={edtMulLine.container}
            onChangeText = {this.props.onChangeText}
            />
      </Item>
    );
  }
}
