import React, { useContext, useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import ToDoGrid from "../components/toDoGrid";
import Header from "../components/header";
import WinnerText from "../components/winnerText";
import { GameContext } from "../contexts/GameContext";
import WinnerPage from "./WinnerPage";
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const {
    winner,
    FullHouseWinner,
    todoTaskLists,
    setSelectedTasks,
    setFullhouseWinner,
  } = useContext(GameContext);
  const navigation = useNavigation();

  const createTaskList = () => {
    const randomNumber = Math.floor(Math.random() * todoTaskLists.length);
    const Tasklist = todoTaskLists[randomNumber].map((task) => ({
      ...task,
      pressed: false,
    }));
    setSelectedTasks(Tasklist);
  };
  //Check if there is a 3 in a row winner or full house worker. Redirect to winnerpage
  //if winner found.
  useEffect(() => {
    if (winner || FullHouseWinner) {
      navigation.navigate("Winner"); // Navigate to WinnerPage
      //   setFullhouseWinner(false);
    }
  }, [winner, FullHouseWinner, navigation]);
  return (
    <View style={styles.container}>
      <Header />
      <ToDoGrid />
      <Button title="Reset" onPress={createTaskList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(21, 97, 109)",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
