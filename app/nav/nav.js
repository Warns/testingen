import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Nav = props => (
  <View style={styles.nav}>
    <Text>{props.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  nav: {
    backgroundColor: 'cyan',
    alignItems: 'center',
    padding: 10,
    width: '100%'
  }
});

export default Nav;
