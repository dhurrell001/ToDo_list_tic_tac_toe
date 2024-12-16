import React, { createContext, useState } from "react";

// Create the Context
export const GameContext = createContext();

// Define the Provider
export const GameProvider = ({ children }) => {
  // Define global states
  const [winner, setWinner] = useState(false); // Three-in-a-row winner
  const [FullHouseWinner, setFullHouseWinner] = useState(false); // Full house winner
  const [selectedTasks, setSelectedTasks] = useState([]); // store the currently selected task list
  // Define states for to do list tiles
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

  // Define the values available  to the children components
  const value = {
    winner,
    setWinner,
    FullHouseWinner,
    setFullHouseWinner,

    selectedTasks,
    setSelectedTasks,
    todoTaskLists,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
