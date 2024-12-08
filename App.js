import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ToDoTile from "./components/toDoTile";
import ToDoGrid from "./components/toDoGrid";
import Header from "./components/header";
import { useState } from "react";
import WinnerText from "./components/winnerText";

export default function App() {
  const [winner, setWinner] = useState(false); // State to track winner

  return (
    <View style={styles.container}>
      <Header />
      <ToDoGrid setWinner={setWinner} />
      {winner && <WinnerText />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkslategrey",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
