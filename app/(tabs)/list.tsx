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

  type ItemData = {
    id: string;
    title: string;
    data: string[];
    date: string;
  };

  const DATA: ItemData[] = [
    {
      id: "1",
      title: "06.03.2025",
      data: ["hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world"],
      date: "06.03.2025",
    },
    {
      id: "2",
      title: "06.03.2025",
      data: ["hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world"],
      date: "06.03.2025",
    },
    {
      id: "3",
      title: "06.03.2025",
      data: ["hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world"],
      date: "06.03.2025",
    },
    {
      id: "4",
      title: "06.03.2025",
      data: ["hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world"],
      date: "06.03.2025",
    },
    {
      id: "5",
      title: "06.03.2025",
      data: ["hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world"],
      date: "06.03.2025",
    },
    {
      id: "6",
      title: "06.03.2025",
      data: ["hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world"],
      date: "06.03.2025",
    },
    {
      id: "7",
      title: "06.03.2025",
      data: ["hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world"],
      date: "06.03.2025",
    },
    {
      id: "8",
      title: "06.03.2025",
      data: ["hello worldhello worldhello worldhello worldhello worldhello worldhello worldhello world"],
      date: "06.03.2025",
    },
  ];

  const onPressNote = () => {
    console.log("Do here reroute to single note view");
  }

  const ShowSearchBar = () => {
    setShowSearchbar(!showSearchbar);
  }

  // TODO: How to set different components on different places on page?
  const Item = ({ data }: { data: IEntries }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.date}</Text>
        <Text style={styles.description}>{data.data}</Text>
      </View>
    );
  };


  // TODO: What is touchableopacity?
  // TODO: How to place AntDesign vectors vertically next to each other?
  // TODO: How routing really should be done?
  // TODO: how to place icons lower?
  // TODO: Is it possible to style AntDesign icons on stylesheet?
  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Text style={styles.folderTitle}>Here change folder name by user</Text>
        <View style={{flexDirection:"row"}}>
        <AntDesign name="plus" size={24} style={styles.addIcon} color="white" onPress={() => router.push("../createNote") }/>
        <AntDesign name="search1" size={24} style={styles.addIcon} color="white" onPress={ShowSearchBar} />
        {showSearchbar && <TextInput placeholder="Search" placeholderTextColor={"white"} style={styles.searchInput}></TextInput>}
        </View>
        <FlatList
          style={styles.flatlist}
          data={DATA}
          renderItem={({ item }) => <Item data={item} />}
          keyExtractor={(item: IEntries) => item.id}
          horizontal={false}
          initialNumToRender={initCardsToRender}
          numColumns={numColumns}
          key={numColumns}
          contentContainerStyle={{gap}}
          columnWrapperStyle={{gap}}
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
