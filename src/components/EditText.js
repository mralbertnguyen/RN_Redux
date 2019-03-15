import React, { Component, PropTypes} from "react";
import {YellowBox} from 'react-native';
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class EditTextCustom extends Component {
    constructor(props){
        super(props);
       
    }
  render() {
    return (
      <Input
        placeholder={this.props.placeholder}
        leftIcon={<Icon name={this.props.leftIconName} size={24} color="black" />}
        shake={true}
        onChangeText={this.props.onChangeText}
      />
    );
  }
}


EditTextCustom.defaultProps={
    placeholder : 'Placeholder default',
    leftIconName : 'angry',
    onChangeText : ()=>{console.log("default onChange Text function")}
}

