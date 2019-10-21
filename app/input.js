import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView
} from 'react-native';

class Input extends Component {
  state = {
    myTextInput: '',
    users: [
      'John',
      'Lara',
      'Mert',
      'James',
      'Hector',
      'Joe',
      'Bart',
      'Homer',
      'Klaxxon',
      'Star Wars',
      'Batman',
      'Fatman'
    ]
  };

  onChangeInput = event => {
    this.setState({
      myTextInput: event
    });
  };

  onPressAddUsers = () => {
    this.setState(prevState => {
      return {
        myTextInput: '',
        users: [...prevState.users, prevState.myTextInput]
      };
    });
  };

  render() {
    return (
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={this.state.myTextInput}
          onChangeText={this.onChangeInput}
        />
        <Button title='Clicky' onPress={this.onPressAddUsers} />
        {this.state.users.map(item => (
          <Text style={styles.users} key={item}>
            {item}
          </Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    width: '100%'
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#f2f2f2',
    marginTop: 20,
    marginBottom: 20,
    fontSize: 20
  },
  users: {
    fontSize: 30,
    borderWidth: 1,
    borderColor: '#cecece',
    marginBottom: 20
  }
});

export default Input;
