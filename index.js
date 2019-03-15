/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Login from './src/ui/screens/Login.js';
import SignIn from './src/ui/screens/SignIn.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
