import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { GameProvider } from "./contexts/GameContext";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import InstructionsPage from "./pages/InstructionsPage";
import SettingsPage from "./pages/SettingsPage";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GameProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "darkslategrey" },
            headerTintColor: "#fff",
            drawerStyle: { backgroundColor: "#f0f0f0", width: 240 },
          }}
        >
          <Drawer.Screen name="Home" component={HomePage} />
          <Drawer.Screen name="About" component={AboutPage} />
          <Drawer.Screen name="Instructions" component={InstructionsPage} />
          <Drawer.Screen name="Settings" component={SettingsPage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GameProvider>
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
