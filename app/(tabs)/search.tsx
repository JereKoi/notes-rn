import React, {useEffect, useState } from "react";
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
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link, useNavigation, useRouter } from 'expo-router'

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

export default function list() {
  const [text, setText] = useState("");
  const router = useRouter();
  const navigation = useNavigation();
  const [filteredData, setFilteredData] = useState([]);
  const [showSearchbar, setShowSearchbar] = useState(false);

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Text style={styles.folderTitle}>Search tab</Text>
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
  loaderContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    backgroundColor: "#fff",
  },
  flatlist: {
    marginTop: 0,
    height: 'auto'
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
    color: "#fff",
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
    backgroundColor: "#333333",
    
    width: widthScreen / 2 - 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    textAlign: "justify",
  },
  folderTitle: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    textAlignVertical: "center",
    marginTop: 50, // Is there better way to "center" vertically text?
    color: "#fff",
    fontWeight: "bold",
  },
  addIcon: {
    marginTop: 210,
    marginRight: 5,
  },
  searchInput: {
    borderColor: "white",
    color: "white",
    height: "auto",
    width: "auto",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 200,
  }
});
