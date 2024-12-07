import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ToDoTile from "./toDoTile";
import ToDoGrid from "./toDoGrid";
import ExampleImage from "../assets/todoImage.png";

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TO-DO TOE</Text>
      <Text style={styles.paragraph}>
        "Welcome to To-Do Toe! 🎉 It's like Tic-Tac-Toe, but with a
        twist—complete tasks to get three in a row, or go for the ultimate goal:
        a full house! Ready to check off your tasks and claim victory?"
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "30",
    backgroundColor: "darkslategrey",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // height: "20%",
  },
  text: {
    fontSize: 35,
    color: "red",
  },
  paragraph: {
    fontSize: "18",
    paddingTop: "25",
    paddingBottom: 20,
    color: "white",
  },
});
