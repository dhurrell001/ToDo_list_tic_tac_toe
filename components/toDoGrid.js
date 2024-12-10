import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ToDoTile from "./toDoTile";
import { useState, useEffect } from "react";
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

  const todoTaskLists = [
    [
      { id: "1", text: "Washing up", pressed: false },
      { id: "2", text: "Brush teeth twice", pressed: false },
      { id: "3", text: "Fold clothes 20 min", pressed: false },
      { id: "4", text: "Eat Breakfast", pressed: false },
      { id: "5", text: "Exercise 20 mins", pressed: false },
      { id: "6", text: "Watch a Movie", pressed: false },
      { id: "7", text: "Relax 30 mins", pressed: false },
      { id: "8", text: "No phone 1 hour", pressed: false },
      { id: "9", text: "Sing a song!", pressed: false },
    ],

    [
      { id: "1", text: "Washing up", pressed: false },
      { id: "2", text: "Read 20 mins", pressed: false },
      { id: "3", text: "Vacuum 1 room", pressed: false },
      { id: "4", text: "Drink water!", pressed: false },
      { id: "5", text: "Have shower", pressed: false },
      { id: "6", text: "Brush teeth", pressed: false },
      { id: "7", text: "No social media 1 hour", pressed: false },
      { id: "8", text: "No phone 1 hour", pressed: false },
      { id: "9", text: "Take a break", pressed: false },
    ],
    [
      { id: "1", text: "Dance", pressed: false },
      { id: "2", text: "Listen to music 20 mins", pressed: false },
      { id: "3", text: "Wash hair", pressed: false },
      { id: "4", text: "Drink water!", pressed: false },
      { id: "5", text: "Relax 15 mins", pressed: false },
      { id: "6", text: "Brush teeth", pressed: false },
      { id: "7", text: "No TV 1 hour", pressed: false },
      { id: "8", text: "Wash 1 load of laundry", pressed: false },
      { id: "9", text: "Write a grocery list", pressed: false },
    ],
  ];

  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    // Example: Randomly select a task list
    //   const keys = Object.keys(taskLists);
    const randomNumber = Math.floor(Math.random() * todoTaskLists.length);
    console.log(`number ${randomNumber}`);
    setSelectedTasks(
      todoTaskLists[randomNumber].map((task) => ({ ...task, pressed: false }))
    );
  }, []);
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
      {selectedTasks.map((tile) => (
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
