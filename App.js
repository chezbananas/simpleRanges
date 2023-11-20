import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
  Button,
} from 'react-native';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Images from './assets/index.js';

export default function App() {
  const [currPlayers, setPlayers] = useState(9);
  const [currPosition, setPosition] = useState(1);
  const [currStage, setStage] = useState(0);
  const maxStage = Object.keys(Images[currPosition]).length - 1;
  let currImage = Images[currPosition][currStage];
  const imgWidth = Dimensions.get('window').width * 0.9;
  const imgHeight = Dimensions.get('window').width * 0.9 * 2.84; // aspect ratio for all images

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Pressable
          onPress={() => {
            const newPlayers = Math.max(currPlayers - 1, 2);
            setPlayers(newPlayers);
            if (newPlayers < currPosition) {
              setPosition(newPlayers);
            }
          }}>
          <AntDesign name="minuscircle" size={36} color="black" />
        </Pressable>
        <Text style={styles.playerText}> {currPlayers} </Text>
        <Pressable onPress={() => setPlayers(Math.min(currPlayers + 1, 9))}>
          <AntDesign name="pluscircle" size={36} color="black" />
        </Pressable>
      </SafeAreaView>
      <SafeAreaView style={styles.secondHeader}>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            let newPos = currPosition - 1;
            if (newPos == 0) {
              newPos = currPlayers;
            }
            setPosition(newPos);
            setStage(0);
          }}>
          <Text style={styles.buttonText}> Prev Position </Text>
        </Pressable>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => setStage(Math.max(currStage - 1, 0))}>
          <Text style={styles.buttonText}> Prev Stage </Text>
        </Pressable>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => setStage(Math.min(currStage + 1, maxStage))}>
          <Text style={styles.buttonText}> Next Stage </Text>
        </Pressable>
        <Pressable
          style={styles.buttonStyle}
          onPress={() => {
            let newPos = currPosition + 1;
            if (newPos == currPlayers + 1) {
              newPos = 1;
            }
            setPosition(newPos);
            setStage(0);
          }}>
          <Text style={styles.buttonText}>Next Position</Text>
        </Pressable>
      </SafeAreaView>
      <ScrollView>
        <Image
          source={currImage}
          style={{ width: imgWidth, height: imgHeight }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: "2%",
  },
  playerText: {
    fontSize: 30,
  },
  secondHeader: {
    height: '5%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: 'white',
  },
  buttonStyle: {
    backgroundColor: 'green',
    borderRadius: '25%',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: '23%',
  },
});
