import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

import Nav from './app/nav/nav';
import Generate from './app/generator';

export default class App extends Component {
  state = {
    nameofApp: 'My Awesome App'
  };

  render() {
    return (
      <View style={styles.container}>
        <Nav name={this.state.nameofApp} />
        <View style={styles.textContainer}>
          <Text>Earth</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Mars</Text>
        </View>
        <Generate />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 27 : 0
  },
  textContainer: {
    backgroundColor: 'blue',
    width: '100%',
    padding: 20,
    marginBottom: 5
  }
});
