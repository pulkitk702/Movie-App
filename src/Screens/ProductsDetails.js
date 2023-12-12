import { View, Text, Dimensions, Image } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const ProductsDetails = ({ route }) => {
  const { item } = route.params;
  //   <Text
  //   style={{
  //     fontSize: 14,
  //     textAlign: "center",
  //     fontWeight: "bold",
  //     lineHeight: 20,
  //     opacity: 0.5,
  //   }}
  // >
  //   {item.description}
  // </Text>
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ alignItems: "center" }}>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <Carousel
            //loop
            width={width}
            height={width / 2}
            autoPlay={true}
            data={item.images}
            scrollAnimationDuration={1000}
            // onSnapToItem={(index) => }
            renderItem={({ item, index }) => (
              <View
                style={{
                  flex: 1,

                  justifyContent: "center",
                }}
              >
                <Image
                  source={{ uri: item }}
                  resizeMode="contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            )}
          />
        </View>
      </View>
      <View style={{ marginTop: height / 4 + 20 }}>
        <View
          style={{
            width: "100%",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              textAlign: "center",
              fontWeight: "bold",
              lineHeight: 20,
            }}
          >
            {item.title}
          </Text>
        </View>
        <View
          style={{
            width: "90%",
            marginTop: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignSelf: "center",
          }}
        >
          <View
            style={{
              alignSelf: "flex-start",
              width: "40%",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                textAlign: "left",
                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              Description:
            </Text>
            <Text
              style={{
                fontSize: 15,

                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              Price:
            </Text>

            <Text
              style={{
                fontSize: 15,

                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              discountPercentage:
            </Text>
            <Text
              style={{
                fontSize: 15,

                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              rating:
            </Text>
            <Text
              style={{
                fontSize: 15,

                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              stock:
            </Text>
            <Text
              style={{
                fontSize: 15,

                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              brand:
            </Text>
            <Text
              style={{
                fontSize: 15,

                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              category:
            </Text>
          </View>
          <View
            style={{
              alignSelf: "flex-start",
              width: "55%",
              opacity: 0.5,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                textAlign: "left",
                fontWeight: "bold",
                lineHeight: 20,
              }}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {item.description}
            </Text>
            <Text
              style={{
                fontSize: 15,

                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              {item.price}
            </Text>

            <Text
              style={{
                fontSize: 15,

                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              {item.discountPercentage}
            </Text>
            <Text
              style={{
                fontSize: 15,

                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              {item.rating}
            </Text>
            <Text
              style={{
                fontSize: 15,

                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              {item.stock}
            </Text>
            <Text
              style={{
                fontSize: 15,

                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              {item.brand}
            </Text>
            <Text
              style={{
                fontSize: 15,

                fontWeight: "bold",
                lineHeight: 20,
              }}
            >
              {item.category}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductsDetails;
