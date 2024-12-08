import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

// Create a pressable tile, recieves handle press state toggle function
// from toDoGrid
export default function ToDoTile({ id, text, handlePress, pressed }) {
  return (
    <Pressable
      style={[styles.tile, { backgroundColor: pressed ? "#ff6347" : "gold" }]}
      onPress={handlePress}
    >
      <Text style={styles.text}>{text}</Text>
      <StatusBar style="auto" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tile: {
    padding: 2,
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 8,
    elevation: 2, // Adds shadow for Android
    shadowColor: "#000", // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width: "30%",
    height: "25%",
    alignItems: "center", // Centers the text inside the tile
    justifyContent: "center", // Centers the content vertically
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});
