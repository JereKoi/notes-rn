import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const widthScreen = Dimensions.get("window").width - 10;

export default function list() {
  const [text, setText] = React.useState("");

  const DATA = [
    {
      title: "06.03.2025",
      data: ["hello world"],
    },
    {
      title: "06.03.2025",
      data: ["hello world"],
    },
    {
      title: "06.03.2025",
      data: ["hello world"],
    },
    {
      title: "06.03.2025",
      data: ["hello world"],
    },
    {
      title: "06.03.2025",
      data: ["hello world"],
    },
    {
      title: "06.03.2025",
      data: ["hello world"],
    },
    {
      title: "06.03.2025",
      data: ["hello world"],
    },
    {
      title: "06.03.2025",
      data: ["hello world"],
    },
  ];

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={DATA}

          renderItem={({ item }) => (
            console.log("hello world")
          )}
         
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
    paddingHorizontal: 10,
  },
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    backgroundColor: "#fff",
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
  item: {
    backgroundColor: "gray",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    color: "#000",
    marginBottom: 10,
    fontWeight: "bold",
  },
  card: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#9e9e9e",
    padding: 10,
    minHeight: 150,
    marginVertical: 10,
    backgroundColor: "#fff",
    width: widthScreen / 2 - 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "600",
    color: "#9e9e9e",
    textAlign: "justify",
  },
});
