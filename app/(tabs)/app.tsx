import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import OnBoarding from "../../components/OnBoarding"


export default function App() {
  const [text, setText] = React.useState("");

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <View>
          <FlatList></FlatList>
          <OnBoarding/>
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
