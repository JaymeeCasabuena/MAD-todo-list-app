import { StyleSheet, Text, View } from 'react-native';
import Home from './components/home';

export default function App() {
  return (
    <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  listWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontStyle: 'bold'
  },
  items: {},

});
