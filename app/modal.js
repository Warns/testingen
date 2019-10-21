import React, { Component } from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";

class ModalComponent extends Component {
  state = {
    modal: false
  };
  _handleModal = () => {
    this.setState({ modal: !this.state.modal ? true : false });
  };

  render() {
    return (
      <View style={{ width: "100%" }}>
        <Button title="Open Modal" onPress={this._handleModal} />

        <Modal visible={this.state.modal}>
          <View style={{ flex: 1, backgroundColor: "red" }}>
            <Text>Modal Content</Text>
          </View>
          <Button title="Close Modal" onPress={this._handleModal}></Button>
        </Modal>
      </View>
    );
  }
}

// const styles = StyleSheet.create({});

export default ModalComponent;
