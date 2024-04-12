import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Home from "./src/screens/Home";
import AddNew from "./src/screens/AddNewToDo";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { Colors } from "./src/constants/colors";

const Stack = createStackNavigator();
export default function App() {
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
          component={Home}
          options={{
            headerTitleAlign: "center",
            headerTintColor: Colors.White,
          }}
        />
        <Stack.Screen
          name="Add New Todo"
          component={AddNew}
          options={{
            headerTitleAlign: "center",
            headerTintColor: Colors.White,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
