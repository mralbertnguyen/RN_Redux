import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const home = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : 'red'
    },
    // Float button style
    fabContainer: {
        backgroundColor: "#5067FF"
    },
    fabIcon:{
        fontSize : 30
    }
})

export {
    home
}