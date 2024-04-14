import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/sharedButton";
import { Colors } from "../constants/Colors";
import { Months, Days } from "../constants/Date";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native-gesture-handler";
import Collapsible from "react-native-collapsible";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Home({ taskItems, setTaskItems }) {
  const [currentDate, setCurrentDate] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [collapsed, setCollapsed] = useState(true);

  const navigation = useNavigation();
  const goToAddScreen = () => {
    navigation.navigate("Add New Todo");
  };
  const toggleExpand = (itemId) => {
    setCollapsed(itemId === collapsed ? null : itemId);
  };

  useEffect(() => {
    // Get current date
    const date = new Date();
    const formattedDate = `${
      Months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;

    // Get the day of the week
    const currentDay = Days[date.getDay()];
    // Update state with current date
    setCurrentDate(formattedDate);
    setCurrentDay(currentDay);
    console.log(taskItems);
  }, []);

  const deleteTask = (itemId) => {
    const objWithIdIndex = taskItems.findIndex(
      (object) => object.id === itemId
    );
    const updatedList = [...taskItems];
    updatedList.splice(objWithIdIndex, 1);
    setTaskItems(updatedList);
  };

  const completeTask = (itemId) => {
    const objWithIdIndex = taskItems.findIndex(
      (object) => object.id === itemId
    );
    const updatedList = [...taskItems];
    updatedList[objWithIdIndex].completed = true;
    setTaskItems(updatedList);
    console.log(updatedList);
    console.log(updatedList[objWithIdIndex].completed);
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.Pink, Colors.Coral]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.listWrapper}>
        <View style={styles.dateCounter}>
          <Text style={styles.day}>{currentDay}</Text>
          <Text style={styles.date}>{currentDate}</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.flatlistContainer}>
          <FlatList
            data={taskItems.sort(
              (a, b) => (a.completed ? 1 : 0) - (b.completed ? 1 : 0)
            )}
            renderItem={({ item }) => (
              <View
                style={
                  collapsed !== item.id
                    ? styles.itemList
                    : [
                        styles.itemList,
                        {
                          backgroundColor: Colors.Coral,
                          elevation: 5,
                          borderRadius: 10,
                        },
                      ]
                }
              >
                <TouchableOpacity
                  onPress={() => toggleExpand(item.id)}
                  style={styles.taskItem}
                >
                  <Text
                    style={
                      collapsed !== item.id && item.completed
                        ? [
                            styles.taskName,
                            { textDecorationLine: "line-through" },
                          ]
                        : collapsed === item.id && !item.completed 
                        ? [
                          styles.taskName,
                          {
                            color: Colors.White
                          },
                        ]
                        : collapsed === item.id && item.completed
                        ? [
                            styles.taskName,
                            {
                              color: Colors.White,
                              textDecorationLine: "line-through",
                            },
                          ]
                        : styles.taskName
                    }
                  >
                    {item.task}
                  </Text>
                  <FontAwesome6
                    style={styles.caretIcon}
                    name="caret-down"
                    size={20}
                  />
                </TouchableOpacity>
                <Collapsible
                  collapsed={collapsed !== item.id}
                  style={styles.collapsible}
                >
                  <Text style={styles.description}>{item.description}</Text>
                  <View style={styles.taskButtons}>
                    {item.completed === false ? (
                      <Button
                        iconName="check-circle"
                        iconColor={Colors.Green}
                        onPress={() => completeTask(item.id)}
                      />
                    ) : null}
                    <Button
                      iconName="trash"
                      iconColor={Colors.Red}
                      onPress={() => deleteTask(item.id)}
                    />
                  </View>
                </Collapsible>
              </View>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View style={styles.button}>
        <Button
          title="Add New Todo"
          iconName="plus-circle"
          iconColor="white"
          buttonStyle={{ width: "80%" }}
          onPress={goToAddScreen}
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
  listWrapper: {
    backgroundColor: Colors.White,
    width: 350,
    height: 600,
    padding: 10,
    elevation: 20,
  },
  dateCounter: {
    alignItems: "center",
  },
  day: {
    textAlign: "center",
    fontFamily: "OpenSans-SemiBold",
    fontSize: 26,
    marginBottom: 10,
  },
  date: {
    textAlign: "center",
    fontFamily: "OpenSans-Light",
    fontSize: 20,
    color: Colors.Gray,
    marginBottom: 15,
  },
  line: {
    height: 1,
    width: "85%",
    backgroundColor: Colors.Pink,
    alignSelf: "center",
    marginBottom: 10,
  },
  itemList: {
    padding: 10,
    marginLeft: 25,
    width: 275,
  },
  flatlistContainer: {
    height: 500,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  taskName: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    color: Colors.Pink,
    width: 230,
  },
  collapsible: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 260,
    height: 190,
    marginTop: 5,
    marginLeft: 5,
  },
  scrollView: {
    flexGrow: 1,
    height: 100,
  },
  description: {
    textAlign: "justify",
    width: 230,
    fontFamily: "Poppins-Light",
    fontSize: 13,
    color: Colors.White,
    marginBottom: 8,
  },
  taskButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  caretIcon: {
    marginRight: 0,
    color: Colors.Pink,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    paddingBottom: 40,
  },
});
