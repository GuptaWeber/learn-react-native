import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem({text, onDelete, id}) {
  return (
   

            <View style={styles.goalItem}>
         <Pressable onPress={onDelete.bind(this, id)} android_ripple={{color:'#8a2be2'}}>
      <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>

  );
}

const styles = StyleSheet.create({
    goalItem: {
        backgroundColor: "purple",
        borderRadius: 10,
        margin: 8,
      },
      goalText: {
        color: "white",
        padding: 8,
      },
})
