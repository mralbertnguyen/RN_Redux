import {Alert} from 'react-native';

const AlertCus = (title, content) =>{
    Alert.alert(
        title,
        content,
        [
          {text: 'OK', onPress: () => this.props.navigation.goBack()},
        ],
        {cancelable: true},
      )    
}

export {AlertCus};