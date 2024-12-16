import { StyleSheet, Text, View } from "react-native";

import ToDoGrid from "./components/toDoGrid";
import Header from "./components/header";
import WinnerText from "./components/winnerText";
import { GameProvider, GameContext } from "./contexts/GameContext";
import { useContext } from "react";

// Function to create app content, This allows the component
// to be simply wrapped in GameProvider wrapper below
function AppContent() {
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

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
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
