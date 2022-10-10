import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponents Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>higher or lower?</Text>
      </View>
      <View>
        <Text>Log Rounds</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
