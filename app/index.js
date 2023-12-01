import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
  Linking,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Images from "../assets/index.js";
import { Link, useLocalSearchParams } from "expo-router";
import { Button, ThemeProvider } from "react-native-paper";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Link
        href={{
          pathname: "./ranges",
        }}
        asChild
      >
        <Button mode="contained">
          <Text style={styles.bigText}>Ranges</Text>
        </Button>
      </Link>
      <Link
        href={{
          pathname: "./randomizer",
        }}
        asChild
      >
        <Button style={styles.mainButtons} mode="contained">
          <Text style={styles.bigText}>Randomizer</Text>
        </Button>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
    alignItems: "center",
  },
  mainButtons: {},
  bigText: {
    fontSize: 50,
  },
});
