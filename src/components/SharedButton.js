import { StyleSheet, Text, TouchableOpacity } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';




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
      backgroundColor: "#4b5eb6",
      padding: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: 'white',
      fontSize: 20,
    },
    icon: {
      paddingRight: 10,
    }
  });

  export default Button;