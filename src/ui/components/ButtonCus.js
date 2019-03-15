import React, { Component } from 'react';
import { Button} from 'native-base';

import{Text} from 'react-native';
import {
    cusButton
} from '../../styles/componentsStyle';

export default class ButtonCus extends Component {
  render() {
    return (
      <Button 
        onPress = {this.props.onPress}
        style = {cusButton.container} rounded>
          <Text>{this.props.txtLabel}</Text>
      </Button>
    );
  }
}
