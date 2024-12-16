import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AboutPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About the Game</Text>
      <Text style={styles.description}>
        This game is designed to challenge and entertain you with fun tasks.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});
