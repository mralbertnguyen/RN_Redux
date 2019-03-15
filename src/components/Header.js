import React, {Component} from 'react';
import {
    StyleSheet
}from 'react-native';
import {Header} from 'react-native-elements';

class MyHeader extends Component{
    render(){
        return(
            <Header
                leftComponent={{
                    icon : 'back'
                }}

                centerComponent={{
                    text: 'My title',
                    style : {}
                }}
            />
        );
    }
}
const headerStyle = StyleSheet.create({
    container:{},
    centerComponent : {
        color
    },
})



