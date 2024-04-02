import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import List from '../components/List'
import Button from '../components/SharedButton';

export default function Home () {
  const navigation = useNavigation();
  const goToAddScreen = () => {
    navigation.navigate("Add New To Do");
  }
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
        <View style={styles.button}>
          <Button title="Add New To Do" iconName="plus-circle" iconColor='white' buttonStyle={{width: '100%'}} onPress={goToAddScreen}/>
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
      justifyContent: 'space-between',
    },
    listWrapper: {
      paddingTop: 80,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    items: {
        marginTop: 20,
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingVertical: 15,
      alignItems: 'center',
      margin: 20,
    }
  });