import { Text, View, StyleSheet, ScrollView } from "react-native";
import { TextInput } from "react-native";

export default function NotesScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Notes screen</Text>
        
      </View>
      <TextInput style={styles.textInput}></TextInput>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
  }
});
