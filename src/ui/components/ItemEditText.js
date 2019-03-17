import React, { Component } from "react";
import { Input, Item, Label } from "native-base";

import {edtCustom} from "../../styles/componentsStyle";

export default class ItemEditText extends Component {
  render() {
    return (
      <Item floatingLabel>
        <Label>{this.props.label}</Label>
        <Input 
            style={edtCustom.container}
            value={this.props.text}
            secureTextEntry = {this.props.secureTextEntry} 
            onChangeText = {this.props.onChangeText}
            />
      </Item>
    );
  }
}
