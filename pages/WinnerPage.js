import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { useFocusEffect } from "@react-navigation/native";
import { GameContext } from "../contexts/GameContext";

// Declare quote object. Quotes will be chosen by random number key access
const wellbeingQuotes = {
  1: "Take care of your body. It’s the only place you have to live. - Jim Rohn",
  2: "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
  3: "Self-care is not a luxury; it’s a priority. - Audre Lorde",
  4: "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship. - Buddha",
  5: "Almost everything will work again if you unplug it for a few minutes, including you. - Anne Lamott",
  6: "The greatest wealth is health. - Virgil",
  7: "It’s not selfish to love yourself, take care of yourself, and make your happiness a priority. It’s necessary. - Mandy Hale",
  8: "Keep your vitality. A life without health is like a river without water. - Maxime Lagacé",
  9: "You can’t pour from an empty cup. Take care of yourself first. - Anonymous",
  10: "Your mind will answer most questions if you learn to relax and wait for the answer. - William S. Burroughs",
  11: "Nurturing yourself is not selfish – it’s essential to your survival and your well-being. - Renée Peterson Trudeau",
  12: "Wellness is the complete integration of body, mind, and spirit. - Greg Anderson",
  13: "To keep the body in good health is a duty… otherwise we shall not be able to keep our mind strong and clear. - Buddha",
  14: "When you recover or discover something that nourishes your soul and brings joy, care enough about yourself to make room for it in your life. - Jean Shinoda Bolen",
  15: "A calm mind brings inner strength and self-confidence, so that’s very important for good health. - Dalai Lama",
};
function getRandomNumber() {
  return Math.floor(Math.random() * 15 + 1);
}

export default function WinnerPage({ navigation }) {
  // Declare states.
  const [showConfetti, setShowConfetti] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState("");
  const { winner, FullHouseWinner } = useContext(GameContext);

  // Use focus to trigger confettii everytime the winnerPage is in focus. Select a new quote
  // each time.
  useFocusEffect(
    React.useCallback(() => {
      setSelectedQuote(wellbeingQuotes[getRandomNumber()]);
      // Reset confetti state after 4 seconds.
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 4000);

      return () => clearTimeout(timer); // Cleanup when page loses focus
    }, [])
  );

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.winnerTitle}>
          {FullHouseWinner ? "Victory!!" : "Keep it up!!"}
        </Text>
        <Text style={styles.paragraph}>{selectedQuote}</Text>
        <Button
          title="Back to Game"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
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
    flex: 1,
    backgroundColor: "midnightblue",
    alignItems: "center", // Center content horizontally
    justifyContent: "top", // Center content vertically
    paddingLeft: 10,
    paddingRight: 10,
  },
  contentContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 15, // Rounded corners
    padding: 20, // Add padding inside the box
    shadowColor: "#000", // Add shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
    alignItems: "center", // Center content horizontally
    marginTop: "15%",
  },
  winnerTitle: {
    fontSize: 28,
    color: "darkslategrey",
    marginBottom: 15,
    marginTop: 15,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 20,
    padding: 5,
    color: "darkslategrey",
    textAlign: "center",
  },
});
