import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import { Colors } from "../constants/colors";




const Button = ({onPress, title, iconName, buttonStyle, iconColor}) => {
    return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
        <Feather style={styles.icon} name={iconName} size={20} color={iconColor} />
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: { 
      flexDirection: 'row',
      width: '45%',
      height: 60,
      backgroundColor: Colors.DarkBlue,
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    },
    text: {
      color: 'white',
      fontSize: 20,
      fontFamily: 'Montserrat-Regular'
    },
    icon: {
      paddingRight: 10,
    }
  });

  export default Button;