import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function AddNew () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Add New Todo</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E8EAED',
    },
    title: {
        fontSize: 24,
        justifyContent: 'center',
        alignItems: 'center'
      },
})