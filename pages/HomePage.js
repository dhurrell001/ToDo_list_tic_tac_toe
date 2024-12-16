import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import ToDoGrid from "../components/toDoGrid";
import Header from "../components/header";
import WinnerText from "../components/winnerText";
import { GameContext } from "../contexts/GameContext";

export default function HomePage() {
  const { winner, FullHouseWinner } = useContext(GameContext);

  return (
    <View style={styles.container}>
      <Header />
      <ToDoGrid />
      {winner && <WinnerText />}
      {FullHouseWinner && <WinnerText />}
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
