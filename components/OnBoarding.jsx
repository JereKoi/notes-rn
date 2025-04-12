import React from "react";
import { Text, View, StyleSheet, ScrollView, TextInput, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import OnBoardingItem from "../components/OnBoardingItem"

export default function OnBoarding() {
  const [text, setText] = React.useState("");

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <View>
          <FlatList data={slides} renderItem={({ item}) => <OnBoardingItem item={item} />}></FlatList>
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
