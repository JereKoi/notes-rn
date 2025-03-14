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

const numColumns = 2;
const gap = 5;
const initCardsToRender = 10;

export interface IEntries {
  id: string;
  title: string;
  data: string[];
  date: string;
}

export default function list() {
  const [text, setText] = React.useState("");

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
      data: ["hello world"],
      date: "06.03.2025",
    },
    {
      id: "2",
      title: "06.03.2025",
      data: ["hello world"],
      date: "06.03.2025",
    },
    {
      id: "3",
      title: "06.03.2025",
      data: ["hello world"],
      date: "06.03.2025",
    },
    {
      id: "4",
      title: "06.03.2025",
      data: ["hello world"],
      date: "06.03.2025",
    },
    {
      id: "5",
      title: "06.03.2025",
      data: ["hello world"],
      date: "06.03.2025",
    },
    {
      id: "6",
      title: "06.03.2025",
      data: ["hello world"],
      date: "06.03.2025",
    },
    {
      id: "7",
      title: "06.03.2025",
      data: ["hello world"],
      date: "06.03.2025",
    },
    {
      id: "8",
      title: "06.03.2025",
      data: ["hello world"],
      date: "06.03.2025",
    },
  ];


  // TODO: How to set different styles for different components?
  const Item = ({ data }: { data: IEntries }) => {
    return (
      <View style={styles.card}>
        <Text>{data.title}</Text>
        <Text>{data.data}</Text>
        <Text>{data.date}</Text>
      </View>
    );
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
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
    borderTopRightRadius: 20,
    marginTop: 15,
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
});
