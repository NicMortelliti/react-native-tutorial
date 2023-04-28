import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

import ToDoItem from "./src/components/ToDoItem";
import ToDoInput from "./src/components/ToDoInput";
import DisplayImage from "./src/components/DisplayImage";
import Header from "./src/components/Header";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [addTasks, setAddTasks] = useState(false);

  const addTaskHandler = (taskTitle) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Math.random().toString(), value: taskTitle },
    ]);
    setAddTasks(false);
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((currentTasks) => {
      return currentTasks.filter((task) => task.id !== taskId);
    });
  };

  const canceltaskAdditionHandler = () => {
    setAddTasks(false);
  };

  return (
    <View>
      <Header title="To-Do App"></Header>
      <View style={styles.screen}>
        <Button title="Add New task" onPress={() => setAddTasks(true)}></Button>
        <ToDoInput
          visible={addTasks}
          onAddTask={addTaskHandler}
          onCancel={canceltaskAdditionHandler}
        />
      </View>
      <DisplayImage taskStatus={tasks} />

      <View style={styles.screenlist}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={tasks}
          renderItem={(itemData) => (
            <ToDoItem
              title={itemData.item.value}
              onDelete={deleteTaskHandler}
              id={itemData.item.id}
            />
          )}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 70,
    paddingHorizontal: 70,
  },
  screenlist: {
    marginLeft: 20,
    marginRight: 20,
  },
});
