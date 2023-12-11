import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Movies, Celebrites, TvShows, TMDB, Search } from "../Screens/index";
const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTitleStyle: {
          color: "white",
        },
        tabBarActiveTintColor: "#4EAB48",
        tabBarInactiveTintColor: "white",
        tabBarStyle: { backgroundColor: "black" },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarLabel: "Movies",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-movies" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TvShows"
        component={TvShows}
        options={{
          tabBarLabel: "TvShows",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="tv" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Celebrites"
        component={Celebrites}
        options={{
          tabBarLabel: "Celebrites",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TMDB"
        component={TMDB}
        options={{
          tabBarLabel: "TMDB",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="local-movies" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomNavigation;
