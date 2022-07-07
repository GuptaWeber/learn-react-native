import { StyleSheet, Text, View, FlatList, Button } from "react-native";

import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const onDeleteHandler = (id) => {
    setGoals((currentGoals) => currentGoals.filter((goal) => goal.id !== id));
  };

  const cancelModalHandler = () => {
    setShowModal(false);
  }

  return (
    <>
      <StatusBar style="light" translucent={true} />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color='purple' onPress={() => {
          setShowModal(currentValue => !currentValue)
        }} />
        <GoalInput setGoals={setGoals} display={showModal} cancelModal={cancelModalHandler} />
        <View style={styles.goalsContainer}>
          <Text style={styles.goalsTitle}>List of Goals</Text>
          <View style={styles.goals}>
            <FlatList
              data={goals}
              renderItem={({ item }) => {
                return (
                  <GoalItem
                    text={item.text}
                    onDelete={onDeleteHandler}
                    id={item.id}
                  />
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
  goalsTitle: {
    fontWeight: "bold",
    marginBottom: 24,
    color:"#ddd",
    marginTop: 50
  },
  goals: {},
});
