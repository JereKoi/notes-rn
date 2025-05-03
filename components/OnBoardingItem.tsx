import React from "react";
import { Text, View, StyleSheet, ScrollView, TextInput, Image, useWindowDimensions } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { ImageSourcePropType } from "react-native";

// TODO: What to do to 'OnBoardingItem', which lacks return-type annotation, implicitly has an 'any' return type.ts(7010)
// TODO: and Binding element 'item' implicitly has an 'any' type.ts(7031)
// https://www.youtube.com/watch?v=r2NJJye0XnM

interface OnBoardingItemProps {
  item: {
    image: ImageSourcePropType;
    title: string,
    description: string,
  }
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
    flex: 0.7,
    justifyContent: "center",
  },

  title: {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 10,
    color: "#493d8a",
    textAlign: "center",
  },

  description: {
    fontWeight: "300",
    color: "#62656b",
    textAlign: "center",
    paddingHorizontal: 64,
  }
});


export default function OnBoardingItem ({item}: OnBoardingItemProps ): JSX.Element => {
  const [text, setText] = React.useState("");
  const { width } = useWindowDimensions();

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <View style={[styles.container, {width }]}>
        <Image source={item.image} style={[styles.image, { width, resizeMode: "contain" }]}/>
        <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

