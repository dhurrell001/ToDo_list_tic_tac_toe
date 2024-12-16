import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GameProvider } from "./contexts/GameContext";
import HomePage from "./pages/HomePage";

export default function WinnerPage() {
  return (
    <View style={styles.container}>
      <Text>Winner page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkslategrey",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
