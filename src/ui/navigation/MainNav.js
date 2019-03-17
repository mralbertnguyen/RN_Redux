import React from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import {store} from '../../store/store';
// import screens
import Login from "../screens/Login";
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import Note from "../screens/Note";

const MainNavigation = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    Note: {
      screen: Note
    },
    Login: {
      screen: Login
    },
    SignIn: {
      screen: SignIn
    },
  },
  {
    headerMode: "none"
  }
);


const AppNavigator = createAppContainer(MainNavigation);

export default class MainNav extends React.Component {
  render() {
    return 
    <Provider store = {store} >
      <AppNavigator />;
    </Provider>
  }
}
