import { StyleSheet, Text, View } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.footerText}>
        All RIghts Reserved by Little Lemon, 2024
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
    marginBottom: 10,
  },
  footerText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic",
  },
});
