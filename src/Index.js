// @flow

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules
} from 'react-native';
const {MyModule} = NativeModules;

export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Button
          title="Log"
          onPress={() => MyModule.callFunc(100)}
        />
        <Button
          title="Firebase Auth"
          onPress={() => MyModule.openView()}
        />
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