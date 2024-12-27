import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function AboutPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome to Task Tic-Tac-Toe 🎉</Text>
        <Text style={styles.paragraph}>
          Life can sometimes feel overwhelming, especially when even the
          smallest tasks feel like climbing mountains. Whether you’re dealing
          with <Text style={styles.highlight}>depression</Text>,{" "}
          <Text style={styles.highlight}>ADHD</Text>, anxiety, or just the
          challenges of everyday life, completing simple tasks can feel like a
          huge victory—and it <Text style={styles.highlight}>is</Text>.
        </Text>

        <Text style={styles.paragraph}>
          In a world where social media often paints a picture of perfection,
          it’s easy to believe that everyone else has it all together. The
          reality?
          <Text style={styles.highlight}> You’re not alone</Text>—everyone
          struggles in their own way. This game is here to celebrate your wins,
          no matter how big or small.
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.subtitle}>How it works:</Text> Your tasks are laid
          out like a game of Tic-Tac-Toe. Each time you complete a task, you tap
          the tile to mark it off. Complete 3 tasks in a row or clear the whole
          grid, and you're a <Text style={styles.highlight}>winner</Text>! 🎉
        </Text>

        <Text style={styles.paragraph}>
          Each completed task is a step forward, a little moment of success
          worth celebrating. It's not about comparing yourself to others; it’s
          about recognizing your progress, at your pace, on your terms.
        </Text>

        <Text style={styles.paragraph}>
          So, take a deep breath, start where you are, and enjoy the process.{" "}
          <Text style={styles.highlight}>Every small win is a big step.</Text>
        </Text>

        <Text style={styles.quote}>
          “Progress over perfection. Your efforts matter. You’ve got this!” 💪
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(21, 97, 109)",
    padding: 20,
    alignItems: "center",
  },
  contentContainer: {
    // width: "90%",
    backgroundColor: "rgb(255, 236, 209)",
    borderRadius: 15, // Rounded corners
    padding: 20, // Add padding inside the box
    shadowColor: "#000", // Add shadow for depth
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
    alignItems: "center", // Center content horizontally
    // marginTop: "15%",
  },
  title: {
    fontSize: 28,
    color: "rgb(255, 125, 0)",
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 18,
    color: "rgb(0, 21, 36",
    textAlign: "justify",
    marginBottom: 15,
    lineHeight: 22,
  },
  highlight: {
    color: "navyblue",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "orange",
    marginBottom: 5,
  },
  quote: {
    fontSize: 18,
    fontStyle: "italic",
    color: "darkslategrey",
    marginTop: 15,
    textAlign: "center",
  },
});
