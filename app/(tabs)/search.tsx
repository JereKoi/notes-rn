import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, useNavigation, useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

const widthScreen = Dimensions.get("window").width - 10;

const numColumns = 2;
const gap = 5;
const initCardsToRender = 10;

// TODO: What interface and type ItemData do and how they differ from each other?
export interface IEntries {
  id: string;
  title: string;
  data: string[];
  date: string;
}

const HeaderIcon = () => {
  return (
    <View>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: -350,
          right: -200,
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

export default function list() {
  const [text, setText] = useState("");
  const router = useRouter();
  const navigation = useNavigation();
  const [filteredData, setFilteredData] = useState([]);
  const [showSearchbar, setShowSearchbar] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <HeaderIcon/>
        <TextInput
          placeholder="Search"
          placeholderTextColor={"white"}
          style={styles.searchInput}
        ></TextInput>
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
  searchInput: {
    fontSize: 40,
    color: "white",
    padding: 20,
    borderBottomColor: "grey",
    borderBottomWidth: 2,
  },
  hamburgerIcon: {
    alignSelf: "flex-end",
    marginEnd: 20,
  },
});
