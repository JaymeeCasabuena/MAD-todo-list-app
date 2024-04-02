import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/SharedButton';
import { Colors } from '../constants/colors';



export default function AddNew () {
  const navigation = useNavigation();
  const goBackToHome = () => {
    navigation.navigate("Home");
  }
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>Add New Todo</Text>
        </View>
        <View style={styles.taskName}>
            <Text style={styles.text}>Title</Text>
            <TextInput editable multiline maxLength={40} style={styles.taskInput} numberOfLines={2} placeholder={'Write a todo item'} placeholderTextColor={'black'}/>
        </View>
        <View style={styles.description}>
            <Text style={styles.text}>Description</Text>
            <TextInput editable multiline maxLength={100} style={styles.descInput} numberOfLines={10} placeholder={'Write the description of the todo item'} placeholderTextColor={'black'} />
        </View>
        <View style={styles.buttons}>
        <Button title="Cancel" iconName="x-circle" iconColor='white' onPress={goBackToHome}/>
        <Button title="Save" iconName="save" iconColor='white' />
      </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.DirtyWhite,
      alignItems: 'center',
      paddingBottom: 40,
    },
    titleWrapper: {
      position: 'absolute',
      left: 5,
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 24,
      fontFamily: 'Montserrat-Medium',
      color: Colors.DarkBlue,
    },
    text: {
      fontSize: 16,
      paddingBottom: 10,
      color: Colors.DarkBlue,
      fontFamily: 'Montserrat-Regular',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: 0,
        paddingBottom: 40,
    },
    taskName: {
        position: 'absolute',
        top: 100,
    },
    description: {
        position: 'absolute',
        top: 200,
    },
    taskInput: {
        backgroundColor: Colors.DirtyWhite,
        textAlign: 'left',
        width: 360,
        height: 50,
        padding: 10,
        borderColor: Colors.DarkOrange,
        borderWidth: 2,
        borderRadius: 5,
    },
    descInput: {
        backgroundColor: Colors.DirtyWhite,
        textAlign: 'left',
        width: 360,
        height: 200,
        padding: 10,
        borderColor: Colors.DarkOrange,
        borderWidth: 2,
        borderRadius: 5,
    },
  });