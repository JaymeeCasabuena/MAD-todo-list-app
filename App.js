import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import AddNew from './src/screens/AddNewToDo'

const Stack = createStackNavigator ();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#E8EAED'}}}>
        <Stack.Screen name='Home' component={Home} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name='Add New To Do' component={AddNew} options={{headerTitleAlign: 'center'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED'
  }
});
