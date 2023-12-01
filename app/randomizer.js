import { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
  Linking,
} from "react-native";
import { Button, DataTable } from "react-native-paper";

export default function App() {
  const [num, setNum] = useState(null);

  const getRandomNumber = async () => {
    try {
      const response = await fetch(
        "http://www.randomnumberapi.com/api/v1.0/random"
      );
      const data = await response.json();
      setNum(data[0]);
    } catch (error) {
      console.error("Error fetching random number:", error);
    }
  };

  useEffect(() => {
    getRandomNumber();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.massiveText}>{num}</Text>
      <Button mode="contained" onPress={getRandomNumber}>
        <Text style={styles.bigText}>New number</Text>
      </Button>
      <Text style={styles.medText}> Common Frequencies: </Text>
      <View style={styles.freqContainer}>
        <DataTable>
          <DataTable.Header style={styles.head}>
            <DataTable.Title>Scenario</DataTable.Title>
            <DataTable.Title>Frequency</DataTable.Title>
          </DataTable.Header>
          <DataTable.Row style={styles.row}>
            <DataTable.Cell>IP CBet, Advantage</DataTable.Cell>
            <DataTable.Cell>nabendu@gmail.com</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={styles.row}>
            <DataTable.Cell>Shikha</DataTable.Cell>
            <DataTable.Cell>shikha@gmail.com</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row style={styles.row}>
            <DataTable.Cell>Hriday</DataTable.Cell>
            <DataTable.Cell>hriday@gmail.com</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </View>
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
  freqContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  head: {},
  row: {},
  medText: {
    fontSize: 30,
  },
  bigText: {
    fontSize: 50,
  },
  massiveText: {
    fontSize: 100,
  },
});
