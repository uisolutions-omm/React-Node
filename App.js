/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,Image,StatusBar
} from 'react-native';
import Login from './src/components/Login'
import SignUp from './src/components/SignUp'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (<View>
            <StatusBar  backgroundColor="#2658d3"/>
               <Login />

           </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
