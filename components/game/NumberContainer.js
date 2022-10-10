import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.primary700,
    borderRadius: 8,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.primary700,
  },
});
