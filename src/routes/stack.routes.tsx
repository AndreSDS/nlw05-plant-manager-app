import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../pages/Welcome";
import UserIdentification from "../pages/UserIdentification";
import Confirmation from "../pages/Confirmation";
import colors from "../../src/styles/colors";

const Stack = createStackNavigator();

const AppRoutes = () => (
  <Stack.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="UserIdentification" component={UserIdentification} />
    <Stack.Screen name="Confirmation" component={Confirmation} />
  </Stack.Navigator>
);

export default AppRoutes;
