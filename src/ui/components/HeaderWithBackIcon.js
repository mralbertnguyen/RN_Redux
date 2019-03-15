import React, {Component} from 'react';
import {
    StyleSheet
}from 'react-native';
import {
    Header,
    Button,
    Title,
    Left,
    Body,
    Right,
    Icon
} from 'native-base';

class HeaderWithBackIcon extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Header>
                <Left style = {headerStyle.left}>
                    <Button transparent>
                        <Icon name = 'arrow-back'/>
                    </Button>
                </Left>
                <Body style = {headerStyle.body}>
                    <Title>{this.props.title}</Title>
                </Body>
                <Right style = {headerStyle.right}></Right>
            </Header>
        );
    }
}

const headerStyle = StyleSheet.create({
    left : {
        flex : 1
    },
    body:{
        flex : 3
    },
    right : {
        flex : 1
    }
})

export default HeaderWithBackIcon;



