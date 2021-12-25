import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
// redux
import { Provider } from "react-redux";
import store from "./store";
// react navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screens
import Add from "./screens/Add";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#0f4c75" />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Add"
          screenOptions={{
            headerStyle: { backgroundColor: "#0f4c75" },
            title: "netflix clone",
            headerTitleStyle: {
              textAlign: "center",
              color: "#00b7c2",
            },
          }}
        >
          <Stack.Screen name="Add" component={Add} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
