import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "../constants/Colors";

const Button = ({
  onPress,
  title,
  iconName,
  buttonStyle,
  iconColor,
  size,
  hasBackgroundColor = false,
  addScreen = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      {addScreen ? (
        <Feather
          hasBackgroundColor={true}
          style={
            hasBackgroundColor
              ? [styles.icon, styles.iconWithBackground]
              : styles.icon
          }
          name={iconName}
          size={size}
          color={iconColor}
        />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
      {addScreen ? (
        <Text style={styles.text}>{title}</Text>
      ) : (
        <Feather
          hasBackgroundColor={true}
          style={
            hasBackgroundColor
              ? [styles.icon, styles.iconWithBackground]
              : styles.icon
          }
          name={iconName}
          size={size}
          color={iconColor}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: "45%",
    height: 60,
    backgroundColor: Colors.Black,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 22,
    fontFamily: "Poppins-SemiBold",
  },
  icon: {
    marginLeft: 20,
    marginBottom: 5,
  },
  iconWithBackground: {
    marginRight: 15,
    marginBottom: 5,
    width: 50,
    height: 50,
    backgroundColor: Colors.Salmon,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 50,
    elevation: 10,
  },
});

export default Button;
