import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import ToDoTile from "./toDoTile";
import ToDoGrid from "./toDoGrid";
import ExampleImage from "../assets/todoImage.png";

export default function WinnerText() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>WINNER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "5",
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
