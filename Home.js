import React, { Component } from "react";
import { Text, View } from "react-native";

class Home extends Component {
  state = {
    myState:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestiae quis at eius, ex praesentium alias ratione soluta minima veritatis odio aut in odit facere hic ut ad quibusdam suscipit.",
  };
  
  updateState = () => this.setState({ myState: "The state is updated" });
  
  render() {
    return (
      <View>
        <Text onPress={this.updateState}>{this.state.myState}</Text>
      </View>
    );
  }
}
export default Home;
