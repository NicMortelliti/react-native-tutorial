import React from "react";
import { View } from "react-native";
import Header from "./src/components/Header";
import DisplayImage from "./src/components/DisplayImage";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />
        <DisplayImage taskStatus="0" />
      </View>
    );
  }
}
