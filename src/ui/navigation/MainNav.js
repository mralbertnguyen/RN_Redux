import React from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";
// import screens
import Login from "../screens/Login";
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";
import Note from "../screens/Note";

const MainNavigation = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Home: {
      screen: Home
    },
    Note: {
      screen: Note
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
    return <AppNavigator />;
  }
}
