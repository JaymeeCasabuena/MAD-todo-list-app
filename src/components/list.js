import { StyleSheet, Text, View } from 'react-native';

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
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkBox: {
        width: 24,
        height: 24,
        borderRadius: 5,
        marginRight: 15,
        backgroundColor: '#4b5eb6',
        opacity: 0.4,
    },
    taskName: {
        maxWidth: '80%',
        fontSize: 16,
    },
  });