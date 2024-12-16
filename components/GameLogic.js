import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import WinnerText from "./winnerText";
import { GameContext } from "../contexts/GameContext";

export default function GameLogic() {
  const {
    selectedTasks,
    setWinner,
    winner,
    FullHouseWinner,
    setFullHouseWinner,

    setTiles,
  } = useContext(GameContext);

  // Effect that runs when the tiles state changes

  useEffect(() => {
    const checkWinningConditions = () => {
      // Check if tiles are populated and if the array is not empty
      if (selectedTasks.length === 0) {
        console.log("Tiles are not yet initialized.");
        return; // Don't start game win checks if tiles are empty
      }
      // variable to check if every tile is pressed for full house.
      const fullHouse = selectedTasks.every((tile) => tile.pressed === true);

      // Example combination: tiles 1, 2, 3 in a row
      const winningCombinations = [
        ["1", "2", "3"],
        ["4", "5", "6"],
        ["7", "8", "9"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"],
        ["1", "5", "9"],
        ["3", "5", "7"],
      ];

      // Check for fullhouse
      if (fullHouse) {
        setFullHouseWinner(true);

        return;
      }

      // Loop through each winning combination. If every value in the combination
      //return true the presseTiles variable will be set to True
      for (const combination of winningCombinations) {
        const pressedTiles = combination.every((id) => {
          const tile = selectedTasks.find((tile) => tile.id === id);
          return tile && tile.pressed; // Check if the tile is pressed
        });

        // Set winner to true if Pressedtiles is true. Combination matched.
        if (pressedTiles) {
          setWinner(true);
          setFullHouseWinner(false);

          return; // Exit early once a winning condition is met
        }
      }

      setWinner(false); // If no win condition are met set wiiner to false
    };

    checkWinningConditions(); // Call the function whenever tiles state changes
  }, [selectedTasks, setWinner, FullHouseWinner, setFullHouseWinner]); // Dependency array with tiles, so it runs whenever tiles change

  return null;
}
