import { StyleSheet, View } from "react-native";
import Square from "./components/Square";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Square text="A"></Square>
        <Square text="B"></Square>
        <Square text="C"></Square>
      </View>
      <View style={styles.row}>
        <Square text="D"></Square>
        <Square text="E"></Square>
        <Square text="F"></Square>
      </View>
      <View style={styles.row}>
        <Square text="G"></Square>
        <Square text="H"></Square>
        <Square text="I"></Square>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5762B7",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
});
