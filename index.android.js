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
  View,
  Alert
} from 'react-native';

import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';


export default class CaO extends Component {
  onPress() {
    Alert.alert('Button has been pressed!');
  }

  render() {
    return (
      <Container> 
        <Header>
            <Title>Header</Title>
        </Header>

        <Content>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
          <Button onPress={this.onPress.bind(this)} style={styles.button}>Learn More</Button>
        </Content>

        <Footer>
          <FooterTab>
            <Button transparent>
              <Icon name='ios-call' />
            </Button>  
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  button: {
    alignSelf: 'center'
  }
});

AppRegistry.registerComponent('CaO', () => CaO);
