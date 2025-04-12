import React from "react";
import { Text, View, StyleSheet, ScrollView, TextInput, Image, useWindowDimensions } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";


// TODO: What to do to 'OnBoardingItem', which lacks return-type annotation, implicitly has an 'any' return type.ts(7010)
// TODO: and Binding element 'item' implicitly has an 'any' type.ts(7031)

export default function OnBoardingItem = ({{item} }) => {
  const [text, setText] = React.useState("");
  const { width } = useWindowDimensions();

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <View style={[styles.container, {width }]}>
        <Image source={item.image} style={[styles.image, { width, resizeMode: "contain" }]}/>
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

  image: {
    
  }
});
