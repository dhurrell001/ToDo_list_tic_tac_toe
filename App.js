import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ToDoTile from "./components/toDoTile";
import ToDoGrid from "./components/toDoGrid";
import Header from "./components/header";
export default function App() {
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
    backgroundColor: "darkslategrey",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
