import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import WinnerText from "./winnerText";

export default function GameLogic({
  tiles,
  setWinner,
  Winner,
  FullHouseWinner,
  setFullHouseWinner,
  setTiles,
}) {
  // State to track if a winner has been found
  const [winnerFound, setWinnerFound] = useState(false);

  // Effect that runs when the tiles state changes
  let winnerCount = 0;
  useEffect(() => {
    const checkWinningConditions = () => {
      // Check if tiles are populated and if the array is not empty
      if (tiles.length === 0) {
        console.log("Tiles are not yet initialized.");
        return; // Don't run the check if tiles are empty
      }
      // variable to check if every tile is pressed for full house.
      const fullHouse = tiles.every((tile) => tile.pressed === true);
      const winningCombinations = [
        ["1", "2", "3"], // Example combination: tiles 1, 2, 3 in a row
        ["4", "5", "6"], // Tiles 4, 5, 6
        ["7", "8", "9"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["3", "6", "9"],
        ["1", "5", "9"],
        ["3", "5", "7"],
      ];

      console.log("i am here");
      console.log(`fullhouse=${fullHouse}`);
      console.log(
        "Checking full house:",
        tiles.map((t) => t.pressed)
      );
      // Check for fullhouse
      if (fullHouse) {
        setFullHouseWinner(true);

        return;
      }
      console.log("full house Winner state is:", FullHouseWinner);

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
          console.log("three in row activated");
          winnerCount++;
          setWinner(true);
          setFullHouseWinner(false);
          console.log("Winner state is:", Winner);

          return; // Exit early once a winning condition is met
        }
      }

      // if (!fullHouse) {
      //   setWinner(false);
      //   setFullHouseWinner(false); // Reset full house state if needed
      // }
      //   console.log("Winner:", Winner);

      setWinner(false);
      console.log("Winner state end of function is:", Winner);
    };

    checkWinningConditions(); // Call the function whenever tiles state changes
  }, [tiles, setWinner, FullHouseWinner, setFullHouseWinner]); // Dependency array with tiles, so it runs whenever tiles change

  return null;
}
