import React, { Component } from "react";
import Spinner from 'react-native-loading-spinner-overlay';
import {StyleSheet} from 'react-native';
export default class SpinnerCus extends Component {
  render() {
    return (
      <Spinner
        visible={this.props.visible}
        textContent={"Loading..."}
        textStyle={styles.spinnerTextStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: "#FFF"
  }
});
