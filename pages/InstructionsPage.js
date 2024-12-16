import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function InstructionsPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>How to Play</Text>
      <Text style={styles.instructions}>
        Complete tasks and try to achieve a three-in-a-row or a full house to
        win.
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
  instructions: {
    fontSize: 16,
    marginTop: 10,
  },
});
