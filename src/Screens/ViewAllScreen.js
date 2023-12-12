import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import { ActivityIndicator } from "react-native";
const ViewAll = ({ navigation, route }) => {
  const { item } = route.params;
  const [data, setData] = useState(item);
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/products`);
      if (data.length > 0) {
        setIndex(index + 1);
        setData((itemValue) => [...itemValue, ...item]);
      } else {
        setData(item);
      }

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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        style={{ flex: 1, backgroundColor: "white" }}
        onEndReached={() => {
          setLoading(true);
          fetchData();
        }}
        showsVerticalScrollIndicator={false}
        onEndReachedThreshold={0.5}
        data={data}
        keyExtractor={(item) => item.id + index}
        renderItem={({ item }) => (
          <View style={{ flex: 1, width: "100%", marginTop: 10 }}>
            <TouchableOpacity
              style={styles.moviesContainer}
              onPress={() =>
                navigation.navigate("ProductsDetails", { item: item })
              }
            >
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Image
                    source={{
                      uri: item.thumbnail,
                    }}
                    resizeMode="cover"
                    style={{
                      width: 150,
                      height: 200,
                      marginLeft: 20,
                    }}
                  />
                </View>
                <View style={{ width: "100%", marginLeft: 10 }}>
                  <Text
                    style={[styles.moviesTitle, { color: "black" }]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.title}
                  </Text>
                  <View style={{}}>
                    <Text style={styles.moviesSubTitle}>{item.price}</Text>
                    <Text style={[styles.moviesSubTitle]}>{item.rating}</Text>
                    <Text style={[styles.moviesSubTitle]}>{item.brand}</Text>
                    <Text style={[styles.moviesSubTitle, { width: 210 }]}>
                      {item.description}
                    </Text>
                    <Text style={[styles.moviesSubTitle]}>{item.price}</Text>
                    <Text style={[styles.moviesSubTitle]}>
                      {item.discountPercentage}
                    </Text>
                    <Text style={[styles.moviesSubTitle]}>{item.rating}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ViewAll;
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
    alignSelf: "center",
    justifyContent: "center",
    marginRight: 20,
    width: "100%",
  },
  moviesTitle: {
    marginTop: 5,
    color: "black",
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
    lineHeight: 20,
  },
  flatList: {
    marginLeft: 10,
    marginTop: 10,

    width: "100%",
  },
});
