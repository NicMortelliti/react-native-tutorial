import React from "react";
import { View } from "react-native";
import PresentationalComponent from "./PresentationalComponent";

export default class App extends React.Component {
  state = {
    myState: "This is my state",
  };

  updateState = () => {
    this.setState({ myState: "The state is updated" });
  };

  render() {
    return (
      <View>
        <PresentationalComponent
          myState={this.state.myState}
          updateState={this.updateState}
        />
      </View>
    );
  }
}
