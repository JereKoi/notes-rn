import React from "react"
import { Text, View, StyleSheet, ScrollView, TextInput } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function list() {
  const [text, setText] = React.useState("");

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <View>
          <Text style={styles.text}>Notes screen</Text>
          <TextInput
            value={text}
            style={styles.textInput}
            placeholder="Type here..."
            keyboardType="default"
            multiline
            textAlignVertical="top"
            placeholderTextColor={"white"}
            submitBehavior="newline"
            onChangeText={(text) => {
              setText(text);
              console.log("Saved text:", text)
            }}
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
    color: "#fff",
    borderColor: "gray",
    borderWidth: 1,
  },
});
