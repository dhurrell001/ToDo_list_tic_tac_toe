import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import ToDoGrid from "../components/toDoGrid";
import Header from "../components/header";
import WinnerText from "../components/winnerText";
import { GameContext } from "../contexts/GameContext";
import WinnerPage from "./WinnerPage";
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const { winner, FullHouseWinner } = useContext(GameContext);
  const navigation = useNavigation();
  //Check if there is a 3 in a row winner or full house worker. Redirect to winnerpage
  //if winner found.
  useEffect(() => {
    if (winner || FullHouseWinner) {
      navigation.navigate("Winner"); // Navigate to WinnerPage
    }
  }, [winner, FullHouseWinner, navigation]);
  return (
    <View style={styles.container}>
      <Header />
      <ToDoGrid />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "midnightblue",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
