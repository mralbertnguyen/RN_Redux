import React, {Component} from 'react';

import {
    ListItem,
    Text
} from 'native-base'

// import style 
import {
    itemCustom
} from '../../styles/componentsStyle'

class ItemListViewCus extends Component{
    render(){
        return(
            <ListItem style = {itemCustom.container}>
                <Text style = {itemCustom.title}> {this.props.title} </Text>
                <Text style = {itemCustom.desc}> {this.props.desc} </Text>
            </ListItem>
        );
    }
}

export default ItemListViewCus;