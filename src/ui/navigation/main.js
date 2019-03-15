import React from "react";

import { createStackNavigator, createAppContainer } from "react-navigation";

// import screens
import Login from "../screens/Login";
import SignIn from "../screens/SignIn";
import Home from "../screens/Home";

const MainNavigation = createStackNavigator(
  {
    Home: {
      screen: Home
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

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
