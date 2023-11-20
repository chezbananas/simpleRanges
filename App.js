import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Images from './assets/index.js';

export default function App() {
  const [currPlayers, setPlayers] = useState(9);
  const [currPosition, setPosition] = useState(1);
  const [currStage, setStage] = useState(0);
  let stageText = Images[currPosition]['stages'][currStage];
  let positionText = Images[currPosition]['pos'];
  const maxStage = Object.keys(Images[currPosition]).length - 3;
  let currImage = Images[currPosition][currStage];
  const imgWidth = Math.min(Dimensions.get('window').width * 0.9, 400);
  const imgHeight = imgWidth * 2.84; // aspect ratio for all images

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.positionContainer}>
          <Text style={styles.positionText}> {positionText} </Text>
        </View>
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
        <View style={styles.positionContainer}>
          <Text style={styles.positionText}> {stageText} </Text>
        </View>
      </View>
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
          onPress= {() => setStage(Math.min(currStage + 1, maxStage))}          >
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
    justifyContent: 'space-between',
    marginBottom: '2%',
    width: '100%',
  },
  playerText: {
    fontSize: 30,
  },
  positionContainer: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  positionText: {
    fontSize: 12,
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
