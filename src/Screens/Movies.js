import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Movies = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#122727" }}>
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <View style={styles.moviesHeaderContainer}>
            <Text style={styles.moviesHeader}>Popular</Text>
            <View style={styles.moviesViewAllHeader}>
              <Text style={styles.moviesViewAll}>See all</Text>
              <FontAwesome
                size={16}
                name="angle-right"
                color={"grey"}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
          <FlatList
            horizontal={true}
            style={styles.flatList}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.Title}
            renderItem={({ item }) => (
              <View style={styles.moviesContainer}>
                <View>
                  <Image
                    source={{
                      uri: item.Poster,
                    }}
                    resizeMode="cover"
                    style={{
                      width: 150,
                      height: 200,
                    }}
                  />
                </View>
                <View style={{ width: "100%" }}>
                  <Text
                    style={styles.moviesTitle}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.Title}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text style={styles.moviesSubTitle}>{item.Year}</Text>
                    <Text style={[styles.moviesSubTitle, { marginLeft: 1 }]}>
                      ,{item.Runtime}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <View style={{ marginTop: 40 }}>
          <View style={styles.moviesHeaderContainer}>
            <Text style={styles.moviesHeader}>Playing In Theatres</Text>
            <View style={styles.moviesViewAllHeader}>
              <Text style={styles.moviesViewAll}>See all</Text>
              <FontAwesome
                size={16}
                name="angle-right"
                color={"grey"}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
          <FlatList
            horizontal={true}
            style={styles.flatList}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.Title}
            renderItem={({ item }) => (
              <View style={styles.moviesContainer}>
                <View>
                  <Image
                    source={{
                      uri: item.Poster,
                    }}
                    resizeMode="cover"
                    style={{
                      width: 200,
                      height: 150,
                    }}
                  />
                </View>
                <View
                  style={{
                    width: "100%",
                  }}
                >
                  <Text
                    style={[styles.moviesTitle, { width: "95%" }]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.Title}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text style={styles.moviesSubTitle}>{item.Year}</Text>
                    <Text style={[styles.moviesSubTitle, { marginLeft: 1 }]}>
                      ,{item.Runtime}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
        <View style={{ marginTop: 40, paddingBottom: 40 }}>
          <View style={styles.moviesHeaderContainer}>
            <Text style={styles.moviesHeader}>Trending</Text>
            <View style={styles.moviesViewAllHeader}>
              <Text style={styles.moviesViewAll}>See all</Text>
              <FontAwesome
                size={16}
                name="angle-right"
                color={"grey"}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
          <FlatList
            horizontal={true}
            style={styles.flatList}
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.Title}
            renderItem={({ item }) => (
              <View style={styles.moviesContainer}>
                <View>
                  <Image
                    source={{
                      uri: item.Poster,
                    }}
                    resizeMode="cover"
                    style={{
                      width: 150,
                      height: 200,
                    }}
                  />
                </View>
                <View style={{}}>
                  <Text
                    style={styles.moviesTitle}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.Title}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    <Text style={styles.moviesSubTitle}>{item.Year}</Text>
                    <Text style={[styles.moviesSubTitle, { marginLeft: 1 }]}>
                      ,{item.Runtime}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Movies;
const styles = StyleSheet.create({
  moviesHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    alignSelf: "center",
  },
  moviesHeader: {
    color: "white",
    fontSize: 18,

    fontWeight: "bold",
    lineHeight: 20,
  },
  moviesViewAllHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  moviesViewAll: {
    color: "grey",
    fontSize: 14,

    fontWeight: "600",
    lineHeight: 20,
  },
  moviesContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  moviesTitle: {
    marginTop: 5,
    color: "white",
    width: 150,
    textAlign: "left",
    color: "white",
    fontFamily: "Urbanist",
    fontSize: 15,

    fontWeight: "bold",
    lineHeight: 20,
  },
  moviesSubTitle: {
    color: "grey",
    fontSize: 12,

    fontWeight: "700",
    lineHeight: 18,
  },
  flatList: {
    marginLeft: 10,
    marginTop: 10,

    width: "100%",
  },
});
