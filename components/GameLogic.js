import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import WinnerText from "./winnerText";

export default function GameLogic({ tiles, setWinner, setTiles }) {
  // State to track if a winner has been found
  const [winnerFound, setWinnerFound] = useState(false);

  // Effect that runs when the tiles state changes

  useEffect(() => {
    const checkWinningConditions = () => {
      const winningCombinations = [
        ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        ["1", "2", "3"], // Example combination: tiles 1, 2, 3 in a row
        ["4", "5", "6"], // Tiles 4, 5, 6
        ["7", "8", "9"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"],
        ["1", "5", "9"],
        ["3", "5", "7"],
      ];

      // Loop through each winning combination. If every value in the combination
      //return true the presseTiles variable will be set to True
      for (const combination of winningCombinations) {
        const pressedTiles = combination.every((id) => {
          const tile = tiles.find((tile) => tile.id === id);
          return tile && tile.pressed; // Check if the tile is pressed
        });
        // of pressed tiles is true set winner variable to true, of not
        // set winner variable to false and remove 'Winner' message
        if (pressedTiles) {
          setWinner(true);

          return; // Exit early once a winning condition is met
        } else {
          setWinner(false);
        }
      }
    };

    checkWinningConditions(); // Call the function whenever tiles state changes
  }, [tiles, setWinner]); // Dependency array with tiles, so it runs whenever tiles change

  return null;
}
