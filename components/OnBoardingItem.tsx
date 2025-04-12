import React from "react";
import { Text, View, StyleSheet, ScrollView, TextInput, Image, useWindowDimensions } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function OnBoardingItem() {
  const [text, setText] = React.useState("");

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <View>
          <Text style={styles.text}>OnBoardingItem</Text>
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
