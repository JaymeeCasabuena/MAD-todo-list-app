import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/sharedButton";
import { Colors } from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import CustomModal from "../components/customModal";

export default function AddNew({ taskItems, setTaskItems }) {
  const navigation = useNavigation();
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleSubmit = () => {
    if (task !== "" && description !== "") {
      const maxId = taskItems.reduce(
        (max, item) => (max < item.id ? item.id : max),
        0
      );
      const newToDo = { id: maxId + 1, task, description, completed: false };
      setTaskItems([...taskItems, newToDo]);
      setTask("");
      setDescription("");
      setIsModalVisible(true);
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
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
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          <TextInput
            editable
            multiline
            maxLength={40}
            value={task}
            onChangeText={(text) => setTask(text)}
            style={styles.taskInput}
            numberOfLines={2}
            placeholder={"Write a task item"}
            placeholderTextColor={"black"}
          />
        </ScrollView>
        <Text style={styles.text}>Description</Text>
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          <TextInput
            editable
            multiline
            maxLength={200}
            style={styles.descInput}
            numberOfLines={10}
            value={description}
            onChangeText={(text) => setDescription(text)}
            placeholder={"Write task's description"}
            placeholderTextColor={"black"}
          />
        </ScrollView>
      </View>
      <View style={styles.buttons}>
        <Button
          title="Back"
          iconName="arrow-left"
          iconColor="white"
          size={28}
          hasBackgroundColor={true}
          addScreen={true}
          onPress={goBackToHome}
        />
        <Button
          title="Save"
          iconName="check"
          iconColor="white"
          size={28}
          hasBackgroundColor={true}
          addScreen={true}
          onPress={() => handleSubmit()}
        />
        <CustomModal
          message={"Task added successfully"}
          buttonName={"OK"}
          isVisible={isModalVisible}
          onClose={closeModal}
        ></CustomModal>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: Colors.White,
    marginTop: 120,
    width: 350,
    height: 500,
    padding: 20,
    elevation: 15,
  },
  text: {
    fontSize: 22,
    paddingBottom: 10,
    fontFamily: "Poppins-SemiBold",
    color: Colors.Pink,
  },
  taskInput: {
    backgroundColor: Colors.White,
    textAlign: "left",
    width: 300,
    height: 60,
    padding: 10,
    borderColor: Colors.Coral,
    borderWidth: 2,
  },
  descInput: {
    backgroundColor: Colors.White,
    textAlign: "left",
    textAlignVertical: "top",
    writingDirection: "ltr",
    width: 300,
    height: 200,
    borderColor: Colors.Coral,
    borderWidth: 2,
    padding: 10,
  },
  buttons: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 90,
    paddingBottom: 10,
  },
});
