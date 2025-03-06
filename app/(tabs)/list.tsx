import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  SectionList,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function list() {
  const [text, setText] = React.useState("");

  const DATA = [
    {
      title: "06.03.2025",
      data: ["hello world"],
    },
  ];

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
        />
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
