import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ToDoTile from "./toDoTile";
import { useState } from "react";
import GameLogic from "./GameLogic"; // Import GameLogic component

export default function ToDoGrid({ setWinner }) {
  // Initialize tiles with id, text content and 'pressed' state
  const [tiles, setTiles] = useState([
    { id: "1", text: "Washing up", pressed: false },
    { id: "2", text: "Brush teeth twice", pressed: false },
    { id: "3", text: "Fold clothes 20 min", pressed: false },
    { id: "4", text: "Eat Breakfast", pressed: false },
    { id: "5", text: "Exercise 20 mins", pressed: false },
    { id: "6", text: "Watch a Movie", pressed: false },
    { id: "7", text: "Relax 30 mins", pressed: false },
    { id: "8", text: "No phone 1 hour", pressed: false },
    { id: "9", text: "Sing a song!", pressed: false },
  ]);
  // Function to toggle the pressed state of a tile. This
  // function is passed to each tile on creation
  const togglePressed = (id) => {
    setTiles(
      tiles.map((tile) =>
        tile.id === id ? { ...tile, pressed: !tile.pressed } : tile
      )
    );
  };
  // use map to go through each tile in tiles state array and create
  // a new tile, assign values accordingly.
  return (
    <View style={styles.container}>
      {tiles.map((tile) => (
        <ToDoTile
          key={tile.id}
          id={tile.id}
          text={tile.text}
          pressed={tile.pressed}
          handlePress={() => togglePressed(tile.id)} // Pass the press handler
        />
      ))}

      {/* send data to gamelogic and pass through setWinner state */}
      <GameLogic tiles={tiles} setTiles={setTiles} setWinner={setWinner} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "darlslategrey",
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "flex-start",
    justifyContent: "space-between",
  },
});
