import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ToDoTile from "./components/toDoTile";
import ToDoGrid from "./components/toDoGrid";
import Header from "./components/header";
import { useState } from "react";
import WinnerText from "./components/winnerText";

export default function App() {
  const [winner, setWinner] = useState(false); // State to three in row winner
  const [FullHouseWinner, setFullHouseWinner] = useState(false); // state to check fullhouse winner
  return (
    <View style={styles.container}>
      <Header />
      <ToDoGrid
        setWinner={setWinner}
        Winner={winner}
        FullHouseWinner={FullHouseWinner}
        setFullHouseWinner={setFullHouseWinner}
      />
      {winner && <WinnerText setWinner={setWinner} />}
      {FullHouseWinner && <WinnerText setWinner={setWinner} />}
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
