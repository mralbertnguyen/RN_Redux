import React, {Component} from 'react';
// import {connect} from 'react-redux';

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';

export default class Demo1 extends Component{
    render(){
        return(
            <View style = {styleApp.container}> 
                {/* View Label */}
                <View style = {styleApp.viewText}>
                    <Text style = {styleApp.viewText}>Hello</Text>
                </View>
                <View style = {styleApp.form_button}>
                    <TouchableOpacity onPress = {this.upValue} style = {styleApp.button}>
                        <Text>UP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {this.downValue} style = {styleApp.button}>
                        <Text>DOWN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    } 
}

// Function of button
function upValue(){
    console.log('pressed up button');
}

function downValue(){
    console.log('pressed down button');
}

const {height, width} = Dimensions.get('window');

const styleApp = StyleSheet.create({
    container: {
        height : height,
        width : width,
        justifyContent : 'center',
        alignItems: 'center',
    },
    form_button: {
        height : 100,
        width : 300,
        justifyContent : 'center',
        flexDirection: 'row',
        backgroundColor : 'yellow',
        alignItems: 'center',
    },
    button:{
        height : 80,
        width : 100,
        justifyContent : 'center',
        backgroundColor : 'red',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    viewText:{
        height: 100,
        width : width,
        alignItems:'center',
        justifyContent: 'center'
    },
    textLabel : {
        fontSize : 30
    }
})

// export default connect(mapStateToProps)(Demo1);