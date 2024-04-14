import { StyleSheet, Text, Modal, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Colors } from "../constants/Colors";

const CustomModal = ({ message, buttonName, isVisible, onClose }) => {
  return (
    <View style={styles.container}>
      <Modal animationType="fade" visible={isVisible} transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{message}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={onClose}>
              <Text style={styles.buttonText}>{buttonName}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: Colors.White,
    padding: 20,
    borderRadius: 10,
    width: 250,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  modalText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    color: Colors.Pink,
  },
  modalButton: {
    marginTop: 20,
  },
  buttonText: {
    color: Colors.Blue,
    fontFamily: "Poppins-SemiBold",
    fontSize: 14,
  },
});

export default CustomModal;
