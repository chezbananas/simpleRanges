import { Text, SafeAreaView, StyleSheet, Image } from "react-native";
import Images from "../assets/index.js";
import { Button } from "react-native-paper";
import { Stack, useNavigation } from "expo-router";

export default function App() {
  const navigation = useNavigation();

  const navigateToRanges = () => {
    navigation.navigate("ranges");
  };

  const navigateToRandomizer = () => {
    navigation.navigate("randomizer");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Image source={Images.cards} style={styles.icons} />
      <Button mode="contained" color="#B8CC9B" onPress={navigateToRanges}>
        <Text style={styles.bigText}>Ranges</Text>
      </Button>
      <Image source={Images.dice} style={styles.icons} />
      <Button
        style={styles.mainButtons}
        mode="contained"
        color="#738499"
        onPress={navigateToRandomizer}
      >
        <Text style={styles.bigText}>Randomizer</Text>
      </Button>
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
  icons: {
    width: "50%",
    height: "25%",
    margin: "5%",
    resizeMode: "contain",
  },
  bigText: {
    fontSize: 50,
  },
});
