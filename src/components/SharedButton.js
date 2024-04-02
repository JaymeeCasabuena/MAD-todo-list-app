import { StyleSheet, Text, TouchableOpacity } from "react-native";


const Button = ({onPress, title}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: { 
      width: '45%',
      backgroundColor: "#4b5eb6",
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: 'white',
      fontSize: 20,
      }
  });

  export default Button;