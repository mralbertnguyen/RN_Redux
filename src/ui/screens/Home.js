import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {Container, Header, Fab , Icon} from 'native-base';
import { home } from '../../styles/screenStyles';

class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            isActiveFab : 'true'
        };
    }
    render(){
        return(
            <Container>
                <Header></Header>
                <View style = {home.container}>
                    {/* List to show note list */}
                    {/* Float button to add new note */}
                    <Fab
                        active = {this.state.isActiveFab}
                        style = {home.fabContainer}
                        position = "bottomRight"
                        onPress = {this.onPressFloatButton()}
                    >
                        {/* Icon add  */}
                        <Icon style = {home.fabIcon} name="add" />
                    </Fab>

                </View>
            </Container>
        );
    }

    onPressFloatButton = () => {
        // Do move to add new note
        console.log("Pressed add new note")
    }
}

export default Home;