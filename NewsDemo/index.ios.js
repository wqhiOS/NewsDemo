/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const Main = require('./components/Main');

export default class NewsDemo extends Component {
    render(){
        return(
            <Main/>
        )

    }
}


AppRegistry.registerComponent('NewsDemo', () => NewsDemo);
