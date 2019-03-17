import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const home = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : 'white'
    },
    // Float button style
    fabContainer: {
        backgroundColor: "#5067FF"
    },
    fabIcon:{
        fontSize : 30
    },
    viewTxtEmpty : {
        width: '100%',
        height : '100%',
        position : 'absolute',
        justifyContent : 'center',
        alignItems : 'center'
    },
    txtEmpty : {
        fontSize : 25
    }
})

export {
    home
}