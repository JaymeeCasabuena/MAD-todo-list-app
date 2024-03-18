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
    backgroundColor: '#E8EAED'
  }
});
