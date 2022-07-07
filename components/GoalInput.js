import { View, TextInput, StyleSheet, Button, Modal, Image } from "react-native";
import { useState } from "react";

export default function GoalInput({ setGoals, display, cancelModal }) {
  const [goalText, setGoalText] = useState("");

  return (
    <Modal visible={display} animationType='slide'>
      <View style={styles.boxLayout}>
      <Image style={styles.image}  source={require('../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          value={goalText}
          placeholder={"Enter Your Goal"}
          onChangeText={setGoalText}
          placeholderTextColor={"#ddd"}
        />
        <View  style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button
                color={"#b180f0"}
                onPress={() => {
                    setGoals((prevState) => [
                    ...prevState,
                    {
                        text: goalText,
                        id: new Date().getUTCMilliseconds().toString(),
                    },
                    ]);
                    setGoalText("");
                    cancelModal();
                }}
                title="Add me"
                />
            </View>
            <View style={styles.button}>
                <Button title="Cancel" onPress={cancelModal} color={"#f31282"} />
            </View>
        </View>
      </View>
      </Modal>

  );
}

const styles = StyleSheet.create({
  boxLayout: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    backgroundColor: "#311b6b"
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ddd",
    color:"#ddd",
    margin: 50,
    height: 36,
    padding: 8,
    width: "100%"
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  image:{
    width: 100,
    height: 100,
    margin: 16
  },
  button:{
    marginHorizontal: 30,
    width: 150
  }
});
