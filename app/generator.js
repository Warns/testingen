import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Generate = () => {
  onPressAddNumber = () => {
    console.log('trigger');
  };

  return (
    <View style={styles.generate}>
      <Button
        color='orange'
        title='Add number'
        accessibilityLabel='Yo check this out!'
        onPress={onPressAddNumber}
      />
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
