import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback
} from 'react-native';

const Generate = props => {
  return (
    <TouchableWithoutFeedback onPress={() => props.add()}>
      <View style={styles.generate}>
        <Text style={{ color: '#fff' }}>Add Number</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  generate: {
    backgroundColor: 'red',
    padding: 10,
    width: '100%',
    alignItems: 'center'
  }
});

export default Generate;
