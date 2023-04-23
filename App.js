import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  state = {
    myState:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima modi a quasi, itaque voluptatem accusantium quisquam illo necessitatibus repellat consequuntur ipsam nesciunt tempora soluta ex consectetur. Ipsum consequuntur libero ea.",
  };
  return (
    <View style={styles.container}>
      <Text >{state.myState}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
