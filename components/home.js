import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
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
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add New Todo</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
      justifyContent: 'space-between'
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
    },
    button: {
        backgroundColor: '#4b5eb6',
        paddingVertical: 15,
        alignItems: 'center',
        margin: 20,
    },
    buttonText: {
        color: '#FFF'
    }
  });