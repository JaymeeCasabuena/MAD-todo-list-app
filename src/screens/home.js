import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/sharedButton";
import { Colors } from "../constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { FlatList } from "react-native-gesture-handler";
import Collapsible from "react-native-collapsible";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6"

export default function Home({ taskItems }) {
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
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const formattedDate = `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const currentDay = days[date.getDay()]; // Get the day of the week
    // Update state with current date
    setCurrentDate(formattedDate);
    setCurrentDay(currentDay);
    console.log(taskItems);
  }, []);

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
            data={taskItems}
            renderItem={({ item }) => (
              <View style={collapsed !== item.id ? styles.itemList : [styles.itemList, {backgroundColor: Colors.GrayishWhite}]}>
                <TouchableOpacity
                  onPress={() => toggleExpand(item.id)}
                  style={styles.taskItem}
                >
                  <Text style={styles.taskName}>{item.task}</Text>
                  <FontAwesome6 style={styles.caretIcon} name="caret-down" size={20} color={Colors.Coral} />
                </TouchableOpacity>
                <Collapsible collapsed={collapsed !== item.id} style={styles.collapsible}>
                  <Text style={styles.description}>{item.description}</Text>
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
    width: "80%",
    backgroundColor: "#ff5e62",
    alignSelf: "center",
  },
  itemList: {
    padding: 10,
    marginLeft: 25,
    margin: 10,
    width: 275,
    borderRadius: 5,
  },
  flatlistContainer: {
    height: 500,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskName: {
    fontFamily: "OpenSans-Regular",
    fontSize: 22,
    color: Colors.Coral,
    width: 230,
  },
  collapsible: {
    width: 260,
    height: 100,
    marginTop: 10,
    backgroundColor: Colors.GrayishWhite,

  },
  description: {
    textAlign: 'left',
    width: 230,
    padding: 10,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
  caretIcon: {
    marginRight: 0,
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    paddingBottom: 40,
  },
});
