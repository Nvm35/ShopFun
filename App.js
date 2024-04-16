import { ImageBackground, StyleSheet, } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from './node_modules/expo-linear-gradient/build/LinearGradient';

export default function App() {
  return (
    <LinearGradient colors={['#516EE3', '#D04AA8']} style={styles.container}>
      <ImageBackground source={require('./assets/images/1670.png')} resizeMode='cover'
        style={styles.container}
        imageStyle={styles.backgroundImage}
      >

        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
