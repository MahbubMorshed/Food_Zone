import React from "react";
import {
  createNativeStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/native-stack";

import SettingsScreen from "../../features/settings/screens/SettingsScreen";
import FavouriteScreen from "../../features/settings/screens/FavouriteScreen";
import CameraScreen from "../../features/settings/screens/CameraScreen";

const SettingsStack = createNativeStackNavigator();

const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={
        {
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }
      }
    >
      <SettingsStack.Screen
        options={{
          header: () => null,
        }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouriteScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
