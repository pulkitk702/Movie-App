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
import { TouchableOpacity } from "react-native-gesture-handler";

const Movies = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");

      setData(response.data.products);
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
  const filteredPopular = data.filter((product) => product.brand === "Apple");
  const filteredMost = data.filter(
    (product) => product.category === "groceries"
  );
  const filteredTrending = data.filter(
    (product) => product.category === "skincare"
  );

  const renderHorizontalItems = (getdata, imageStyle) => {
    return (
      <FlatList
        horizontal={true}
        style={styles.flatList}
        showsHorizontalScrollIndicator={false}
        data={getdata}
        keyExtractor={(item) => item.Title}
        renderItem={({ item }) => (
          <View key={item.id} style={{ marginTop: 10 }}>
            <TouchableOpacity
              style={styles.moviesContainer}
              onPress={() =>
                navigation.navigate("ProductsDetails", { item: item })
              }
            >
              <View>
                <Image
                  source={{
                    uri: item.thumbnail,
                  }}
                  resizeMode="cover"
                  style={{
                    width: imageStyle ? 250 : 150,
                    height: imageStyle ? 150 : 200,
                  }}
                />
              </View>
              <View style={{ width: "100%" }}>
                <Text
                  style={styles.moviesTitle}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.title}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                  }}
                >
                  <Text style={styles.moviesSubTitle}>{item.price}</Text>
                  <Text style={[styles.moviesSubTitle, { marginLeft: 1 }]}>
                    ,{item.rating}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#122727" }}>
      <ScrollView>
        <View style={{ marginTop: 20 }}>
          <View style={styles.moviesHeaderContainer}>
            <Text style={styles.moviesHeader}>Popular</Text>
            <View style={styles.moviesViewAllHeader}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ViewAllScreen", {
                    item: filteredPopular,
                  });
                }}
              >
                <Text style={styles.moviesViewAll}>See all</Text>
              </TouchableOpacity>
              <FontAwesome
                size={16}
                name="angle-right"
                color={"grey"}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
          {renderHorizontalItems(filteredPopular, false)}
        </View>
        <View style={{ marginTop: 40 }}>
          <View style={styles.moviesHeaderContainer}>
            <Text style={styles.moviesHeader}>Playing In Theatres</Text>
            <View style={styles.moviesViewAllHeader}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ViewAllScreen", { item: filteredMost });
                }}
              >
                <Text style={styles.moviesViewAll}>See all</Text>
              </TouchableOpacity>
              <FontAwesome
                size={16}
                name="angle-right"
                color={"grey"}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
          {renderHorizontalItems(filteredMost, true)}
        </View>
        <View style={{ marginTop: 40, paddingBottom: 40 }}>
          <View style={styles.moviesHeaderContainer}>
            <Text style={styles.moviesHeader}>Trending</Text>
            <View style={styles.moviesViewAllHeader}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ViewAllScreen", {
                    item: filteredTrending,
                  });
                }}
              >
                <Text style={styles.moviesViewAll}>See all</Text>
              </TouchableOpacity>
              <FontAwesome
                size={16}
                name="angle-right"
                color={"grey"}
                style={{ marginLeft: 5 }}
              />
            </View>
          </View>
          {renderHorizontalItems(filteredTrending, false)}
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
