import { ImageBackground, SafeAreaView, StyleSheet, } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from './node_modules/expo-linear-gradient/build/LinearGradient';
import { useCallback, useState } from 'react';


import * as SplashScreen from 'expo-splash-screen';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded, fontError] = useFonts({
    "Jersey": require("./assets/fonts/Jersey10-Regular.ttf"),
    "Platypi": require("./assets/fonts/Platypi-VariableFont_wght.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    )
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar animated style='light' />
      <LinearGradient colors={['#516EE3', '#D04AA8']}
        style={styles.container}
        onLayout={onLayoutRootView}>

        <ImageBackground source={require('./assets/images/1670.png')} resizeMode='cover'
          style={styles.container}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.container}>
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  backgroundImage: {
    opacity: 0.15
  }
});
