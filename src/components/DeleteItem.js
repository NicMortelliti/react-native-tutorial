import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const DeleteItem = (props) => {
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);

  const RenderComponent = () => {
    switch (confirmDeleteOpen) {
      case true:
        return (
          <TouchableOpacity
            onPress={props.onDelete.bind(this, props.id)}
            style={styles.button}>
            <Text style={styles.text}>U Sure?</Text>
          </TouchableOpacity>
        );

      default:
        return (
          <TouchableOpacity
            onPress={() => setConfirmDeleteOpen(true)}
            style={styles.secondaryButton}>
            <Text style={styles.secondaryText}>Delete</Text>
          </TouchableOpacity>
        );
    }
  };

  return (
    <View>
      <RenderComponent />
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
  secondaryButton: {
    display: "flex",
    height: 40,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    color: "black",
  },
  secondaryText: {
    fontSize: 14,
    color: "red",
  },
});

export default DeleteItem;
