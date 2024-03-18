import { StyleSheet, Text, View, Button} from 'react-native';
import List from './list'

export default function Home () {
    return (
      <View style={styles.container}>
        {/*To do list*/}
        <View style={styles.listWrapper}>
        <Text style={styles.title}>My Todo List</Text>
        <View style={styles.items}>
            <List text={'Buy Milk'}/>
            <List text={'Buy Bread'}/>
            <List text={'Buy Eggs'}/>
        </View>
        </View>
      </View>
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
    items: {
        marginTop: 20,
    }
  });