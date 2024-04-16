import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function PrimaryButton({ children, onPress }) {

  return (
    <View style={styles.outerContainer}>
      <Pressable style={({ pressed }) => pressed ? [styles.container, styles.pressed] : styles.container}
        onPress={onPress}
        android_ripple={{ color: 'blue' }}>

        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#BC598178",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  },
  outerContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.75,

  }
})