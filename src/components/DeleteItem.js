import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

const DeleteItem = () => {
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(true);

  return (
    <View>
      <TouchableOpacity
        onPress={props.onDelete.bind(this, props.id)}
        style={styles.button}>
        <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    height: 40,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DeleteItem;
