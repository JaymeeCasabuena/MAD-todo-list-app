import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Home from "./src/screens/Home";
import AddNew from "./src/screens/addNewToDo";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Colors } from "./src/constants/Colors";
import { manageState } from "./src/datamodel/stateManagement";

const Stack = createStackNavigator();
export default function App() {
  const { taskItems, saveTaskItems} = manageState();
  const [fontsLoaded] = useFonts({
    "Montserrat-Medium": require("./assets/Fonts/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("./assets/Fonts/Montserrat-Regular.ttf"),
    "OpenSans-Light": require("./assets/Fonts/OpenSans-Light.ttf"),
    "OpenSans-Regular": require("./assets/Fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/Fonts/OpenSans-SemiBold.ttf"),
  });

  const handleOnLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitleStyle: { color: "white" },
          headerBackTitleStyle: { color: "white" },
        }}
      >
        <Stack.Screen
          name="Today's Task"
          options={{
            headerTitleAlign: "center",
            headerTintColor: Colors.White,
            unmountOnBlur: false
          }}
        >{(props) => (
          <Home
            {...props}
            taskItems={taskItems}
            setTaskItems={saveTaskItems}
          />
        )}</Stack.Screen>
        <Stack.Screen
          name="Add New Todo"
          options={{
            headerTitleAlign: "center",
            headerTintColor: Colors.White,
          }}
        >{(props) => (
          <AddNew
            {...props}
            taskItems={taskItems}
            setTaskItems={saveTaskItems}
          />
        )}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
