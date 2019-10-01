import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Generate = () => {
  return (
    <View style={styles.generate}>
      <Text style={{ color: '#fff' }}>Add number</Text>
    </View>
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
