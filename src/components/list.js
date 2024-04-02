import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/colors';

export default function List(props) {
    return (
      <View style={styles.item}>
        {/*To do list*/}
        <View style={styles.checkBox}></View>
        <Text style={styles.taskName}>{props.text}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    item: {
        backgroundColor: Colors.DarkOrange,
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: Colors.Brown,
        borderWidth: 2,
    },
    checkBox: {
        width: 24,
        height: 24,
        borderRadius: 5,
        marginRight: 15,
        backgroundColor: Colors.DirtyWhite,
        opacity: 0.4,
    },
    taskName: {
        maxWidth: '80%',
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: Colors.White,
    },
  });