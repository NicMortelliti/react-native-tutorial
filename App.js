import React from "react";
import { StyleSheet, View } from "react-native";
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
      <View style={styles.container}>
        <PresentationalComponent
          myState={this.state.myState}
          updateState={this.updateState}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
