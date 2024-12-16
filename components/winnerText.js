import React, { useContext, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { GameContext } from "../contexts/GameContext";

export default function WinnerText() {
  const [showConfetti, setShowConfetti] = useState(false);
  // const [setWinner] = useState(true);
  const { setWinner, setFullHouseWinner } = useContext(GameContext);
  const [showMessage, setShowMessage] = useState(true);
  useEffect(() => {
    // Trigger confetti and start timer to hide message
    setShowConfetti(true);

    const timer = setTimeout(() => {
      setShowConfetti(false); // Stop showing confetti
      setShowMessage(false); // Hide the winner message
      // setWinner(false);
    }, 4000); // Adjust timeout duration to match confetti duration (in ms)
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <View style={styles.container}>
      {showMessage && <Text style={styles.text}>WINNER</Text>}
      {showConfetti && (
        <ConfettiCannon
          count={200}
          origin={{ x: 0, y: 0 }} // Adjust origin as needed
          fadeOut={true} // Confetti will fade out after animation
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "darkslategrey",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  text: {
    fontSize: 35,
    color: "red",
  },
});
