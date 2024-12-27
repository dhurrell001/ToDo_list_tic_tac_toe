import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import ToDoTile from "./toDoTile";
import { useContext, useState, useEffect } from "react";
import GameLogic from "./GameLogic"; // Import GameLogic component
import { GameContext } from "../contexts/GameContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ToDoGrid() {
  const {
    setWinner,
    setFullHouseWinner,
    winner,
    FullHouseWinner,
    setSelectedTasks,
    selectedTasks,
  } = useContext(GameContext);

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

  // Function to save current tile state
  const saveTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Error saving tasks :", error);
    }
  };

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem("tasks");

      if (savedTasks !== null && JSON.parse(savedTasks).length > 0) {
        setSelectedTasks(JSON.parse(savedTasks));
        console.log("Tasks loaded successfully.");
      } else {
        // If no tasks are saved, initialize with random list
        const randomNumber = Math.floor(Math.random() * todoTaskLists.length);
        const initialTasks = todoTaskLists[randomNumber].map((task) => ({
          ...task,
          pressed: false,
        }));
        setSelectedTasks(initialTasks);
      }
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  };

  // Load tasks when the component mounts
  useEffect(() => {
    loadTasks();
  }, []);

  // Save tasks whenever selectedTasks changes
  useEffect(() => {
    if (selectedTasks.length > 0) {
      saveTasks(selectedTasks);
    }
  }, [selectedTasks]);

  const togglePressed = (id) => {
    const updatedTasks = selectedTasks.map((tile) =>
      tile.id === id ? { ...tile, pressed: !tile.pressed } : tile
    );

    console.log("Updated Tasks:", updatedTasks.pressed);
    setSelectedTasks(updatedTasks);
  };

  // use map to go through each tile in selectedTask state  and create
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

      {/* Call game logic, props are handled in GameContext */}
      <GameLogic />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(21, 97, 109)",
    flexWrap: "wrap",
    flexDirection: "row",
    alignContent: "flex-start",
    justifyContent: "space-between",
  },
});
