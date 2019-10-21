import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  StatusBar,
  ActivityIndicator,
  ImageBackground
} from "react-native";

import Nav from "./app/nav/nav";
// import Generate from './app/generator';
// import ListItem from './app/listitem';
import Input from "./app/input";
import Picker from "./app/picker";
import Hacker from "./app/assets/images/wallhaven-529105.jpg";
import ModalComp from "./app/modal";

export default class App extends Component {
  state = {
    nameofApp: "My Awesome App",
    random: [20, 837]
  };

  onAddRandom = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, random]
      };
    });
  };

  onItemClickDelete = position => {
    const newArray = this.state.random.filter((item, index) => {
      return position != index;
    });
    this.setState({
      random: newArray
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Nav name={this.state.nameofApp} />

        {/* 
        <View style={styles.textContainer}>
          <Text>Earth</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>Mars</Text>
        </View>
        <Generate add={this.onAddRandom} />
        <ListItem items={this.state.random} delete={this.onItemClickDelete} />
        <StatusBar barStyle='dark-content' /> */}
        <ScrollView style={{ width: "100%" }}>
          {/* <Input /> */}

          {/* <Picker />
          <ActivityIndicator size='large' color='#0000ff' animating={true} /> */}
          {/* <ImageBackground
            source={{ uri: "https://picsum.photos/400" }}
            style={styles.hacker}
            // resizeMode="cover"
            // onLoadEnd={() => alert("image loaded")}
          >
            <Text>Hello</Text>
          </ImageBackground> */}

          <ModalComp />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#fff"
    // paddingTop: Platform.OS === 'android' ? 27 : 0
  },
  textContainer: {
    backgroundColor: "blue",
    width: "100%",
    padding: 20,
    marginBottom: 5
  },
  hacker: {
    width: "100%",
    height: 300,
    marginTop: 20
  }
});
