import React , {Component} from 'react';

// import UI components
import {
    View, 
    Text,
    
} from 'react-native';
class Demo1 extends Component{
    render(){
        return(
            <View style = {{
                alignItems: 'center',
                backgroundColor:'red'
            }}>
                <Text>Demo 1</Text>
            </View>
        );
    }
}
export default Demo1;