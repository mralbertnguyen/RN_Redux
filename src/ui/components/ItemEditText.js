import React, { Component } from "react";
import { Input, Item, Label } from "native-base";

import * as componentsStyle from "../../styles/componentsStyle";

export default class ItemEditText extends Component {
  render() {
    return (
      <Item floatingLabel>
        <Label>{this.props.label}</Label>
        <Input 
            secureTextEntry = {this.props.secureTextEntry} 
            onChangeText = {this.props.onChangeText}
            />
      </Item>
    );
  }
}
