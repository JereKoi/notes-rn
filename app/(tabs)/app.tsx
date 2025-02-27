import { Text, View, StyleSheet, ScrollView } from "react-native";
import { TextInput } from "react-native";

export default function NotesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.text}>Notes screen</Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    backgroundColor: "powderblue",
  },
  text: {
    color: "#fff",
    fontSize: 100,
  },
  textInput: {
    height: 40,
    color: "#fff",
    borderColor: "gray",
    borderWidth: 1,
  },
});
