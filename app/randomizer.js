import { useState, useEffect } from "react";
import { Text, SafeAreaView, StyleSheet, View, Alert } from "react-native";
import { Button, DataTable } from "react-native-paper";
import { Stack } from "expo-router";

export default function App() {
  const [num, setNum] = useState(null);
  const [inPosition, setPosition] = useState(false);

  const getRandomNumber = async () => {
    try {
      const response = await fetch(
        "http://www.randomnumberapi.com/api/v1.0/random"
      );
      const data = await response.json();
      setNum(data[0]);
    } catch (error) {
      console.error("Error fetching random number:", error);
      Alert.alert(
        "Error Fetching Random Number",
        "Check your internet connection and try again."
      );
    }
  };

  let table = null;
  let posText = null;
  if (inPosition) {
    posText = "In Position";
    table = (
      <DataTable>
        <DataTable.Header style={styles.head}>
          <DataTable.Title style={styles.scenario}>Scenario</DataTable.Title>
          <DataTable.Title>Frequency</DataTable.Title>
          <DataTable.Title>Size</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row style={styles.row}>
          <DataTable.Cell style={styles.scenario}>
            High Paired/Double Broadway
          </DataTable.Cell>
          <DataTable.Cell>70-100% </DataTable.Cell>
          <DataTable.Cell>25-33% </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={styles.row}>
          <DataTable.Cell style={styles.scenario}>
            Single Broadway/A High
          </DataTable.Cell>
          <DataTable.Cell>60-80%</DataTable.Cell>
          <DataTable.Cell>33-50%</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={styles.row}>
          <DataTable.Cell style={styles.scenario}>
            Middling 2-Connected
          </DataTable.Cell>
          <DataTable.Cell>40-50%</DataTable.Cell>
          <DataTable.Cell>50-75%</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={styles.row}>
          <DataTable.Cell style={styles.scenario}>
            Low Fully Connected
          </DataTable.Cell>
          <DataTable.Cell>0-20%</DataTable.Cell>
          <DataTable.Cell>50-75%</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    );
  } else {
    posText = "Out of Position";
    table = (
      <DataTable>
        <DataTable.Header style={styles.head}>
          <DataTable.Title style={styles.scenario}>Scenario</DataTable.Title>
          <DataTable.Title>Frequency</DataTable.Title>
          <DataTable.Title>Size</DataTable.Title>
        </DataTable.Header>
        <DataTable.Row style={styles.row}>
          <DataTable.Cell style={styles.scenario}>
            High Paired/Double Broadway
          </DataTable.Cell>
          <DataTable.Cell>50-70% </DataTable.Cell>
          <DataTable.Cell>30-50% </DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={styles.row}>
          <DataTable.Cell style={styles.scenario}>
            Single Broadway/A High
          </DataTable.Cell>
          <DataTable.Cell>25-35%</DataTable.Cell>
          <DataTable.Cell>40-70%</DataTable.Cell>
        </DataTable.Row>
        <DataTable.Row style={styles.row}>
          <DataTable.Cell style={styles.scenario}>
            Middling/Low Boards
          </DataTable.Cell>
          <DataTable.Cell>0% </DataTable.Cell>
          <DataTable.Cell>-- </DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    );
  }

  useEffect(() => {
    getRandomNumber();
  }, []);

  function flipState() {
    if (inPosition) {
      setPosition(false);
    } else {
      setPosition(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Randomizer",
        }}
      />
      <Text style={styles.massiveText}>{num}</Text>
      <Button mode="contained" onPress={getRandomNumber} color="#B8CC9B">
        <Text style={styles.bigText}>New Number</Text>
      </Button>

      <Button
        mode="contained"
        onPress={flipState}
        style={{ marginTop: 35 }}
        color="#84A3A5"
      >
        <Text style={styles.bigText}>Flip Position</Text>
      </Button>
      <View style={styles.freqContainer}>
        <Text style={styles.medText}> Common CBet Frequencies {posText}: </Text>
        <View style={styles.tableContainer}>{table}</View>
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
    height: "40%",
  },
  tableContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  randButton: {
    color: "red",
  },
  head: {},
  row: {},
  scenario: {
    flex: 3,
  },
  medText: {
    fontSize: 20,
  },
  bigText: {
    fontSize: 50,
  },
  massiveText: {
    fontSize: 100,
  },
});