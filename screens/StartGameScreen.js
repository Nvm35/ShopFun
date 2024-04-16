import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen() {
  const [enteredNumber, setEneteredNumber] = useState('');

  function numberInHandl(enteredText) {
    setEneteredNumber(enteredNumber)
  }

  function confirmInHand() {
    onPress();
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput}
        maxLength={2} keyboardType="number-pad"
        autoCapitalize="none"
        onChangeText={numberInHandl}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>

        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInHand}>Confirm</PrimaryButton>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 6,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 10 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    color: '#ddb52f',
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: '600',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  }
})