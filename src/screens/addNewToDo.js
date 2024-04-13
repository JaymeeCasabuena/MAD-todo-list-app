import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/sharedButton";
import { Colors } from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";

export default function AddNew({ taskItems, setTaskItems }) {
  const navigation = useNavigation();
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (task !== '' && description !== '') {
      const maxId = taskItems.reduce((max, item) => max < item.id ? item.id: max, 0)
      const newToDo = {id:maxId+1, task, description, completed: false}
      setTaskItems([...taskItems, newToDo]);
      setTask("");
      setDescription("");
      console.log(newToDo)
    }
  };

  const goBackToHome = () => {
    navigation.navigate("Today's Task");
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.Pink, Colors.Coral]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Title</Text>
        <TextInput
          editable
          multiline
          maxLength={40}
          value={task}
          onChangeText={(text) => setTask(text)}
          style={styles.taskInput}
          numberOfLines={2}
          placeholder={"Write a todo item"}
          placeholderTextColor={"black"}
        />
        <Text style={styles.text}>Description</Text>
        <TextInput
          editable
          multiline
          maxLength={100}
          style={styles.descInput}
          numberOfLines={10}
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
      <View style={styles.buttons}>
        <Button
          title="Cancel"
          iconName="x-circle"
          iconColor="white"
          onPress={goBackToHome}
        />
        <Button
          title="Save"
          iconName="save"
          iconColor="white"
          onPress={() => handleSubmit()}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: Colors.White,
    width: 350,
    height: 500,
    padding: 20,
    elevation: 15,
  },
  text: {
    fontSize: 24,
    paddingBottom: 10,
    fontFamily: "OpenSans-SemiBold",
  },
  taskInput: {
    backgroundColor: Colors.White,
    textAlign: "left",
    width: 300,
    height: 50,
    padding: 10,
    borderColor: Colors.Coral,
    borderWidth: 2,
  },
  descInput: {
    backgroundColor: Colors.White,
    textAlign: "left",
    width: 300,
    height: 200,
    borderColor: Colors.Coral,
    borderWidth: 2,
    padding: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    paddingBottom: 40,
  },
});
