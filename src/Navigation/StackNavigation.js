import { createStackNavigator } from "@react-navigation/stack";
import ProductsDetails from "../Screens/ProductsDetails";
import ViewAllScreen from "../Screens/ViewAllScreen";
import BottomNavigation from "./BottomNavigation";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductsDetails"
        component={ProductsDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ViewAllScreen"
        component={ViewAllScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
export default StackNavigation;
