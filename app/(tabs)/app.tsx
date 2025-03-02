import React from "react"
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function NotesScreen() {
const [value, onChangeText] = React.useState()

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
          <View>
            <Text style={styles.text}>Notes screen</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Type here..."
              keyboardType="default"
              multiline
            />
          </View>
      </SafeAreaView>
    </SafeAreaProvider>
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
    height: "40%",
    color: "#fff", // Why color does not work?
    borderColor: "gray",
    borderWidth: 1,
  },
});