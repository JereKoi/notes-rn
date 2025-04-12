import React from "react";
import { Text, View, StyleSheet, ScrollView, TextInput, TouchableOpacity, } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";

export default function CreateNote() {
  const [text, setText] = React.useState("");

const HeaderIcon = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: -108,
          right: -50,
          zIndex: 1,
        }}
        onPress={() => console.log("Clicked burger icon")}
      >
        <Feather
          name="menu"
          size={50}
          style={styles.hamburgerIcon}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <View>
        <HeaderIcon />
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
    backgroundColor: "black",
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
  hamburgerIcon: {
    alignSelf: "flex-end",
    marginEnd: 20,
    marginBottom: 40,
  },
});
