import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const yellowDark = "#F3CD10";
const alphaGray = "rgba(112, 112, 112 , 0.56)";

const login = StyleSheet.create({
    container : {
        flex :1 ,
        justifyContent : 'center',
        alignItems : 'center',
    },
    contentStyle: {
        justifyContent : 'center',
        alignSelf :'center',
        backgroundColor : 'pink'
    }
})

const home = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : 'white',
        justifyContent : 'center',
        alignItems : 'center'
    },
    // Float button style
    fabContainer: {
        backgroundColor: yellowDark
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
    home,
    login
}