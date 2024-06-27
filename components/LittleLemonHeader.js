import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText} numberOfLines={2}>
        Little Lemon
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EE9972",
  },
  headerText: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 40,
  },
});
