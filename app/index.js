import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import Images from "../assets/index.js";
import { Link, useLocalSearchParams } from "expo-router";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Link
        href={{
          pathname: "./ranges",
        }}
        asChild
      >
        <Text> Hi </Text>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    alignItems: "center",
  },
  positionContainer: {
    width: "25%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  secondHeader: {
    height: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "white",
  },
  buttonStyle: {
    backgroundColor: "green",
    borderRadius: "25%",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    width: "23%",
  },
  footer: {
    backgroundColor: "#cccccc",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
