import React, { useEffect, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthContext, AuthProvider } from "./AuthProvider";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RegisterPage2 from "../pages/RegisterPage2";
import RegisterPage3 from "../pages/RegisterPage3";
import AddEvent from "../pages/AddEvent";
import LoggedIn from "../pages/LoggedIn";
import Loading from "./Loading";
import BottomNavigator from "./BottomNavigator";

const Stack = createStackNavigator();

const AppRouter = () => {
  const { userData } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("user_data")
      .then((data) => {
        console.log(data);
        if (data) {
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  
  return (
    <NavigationContainer>
      {userData ? (
        <BottomNavigator />
      ) : (
        <Stack.Navigator initialRouteName="HomePage" headerMode="none">
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="RegisterPage" component={RegisterPage} />
          <Stack.Screen name="RegisterPage2" component={RegisterPage2} />
          <Stack.Screen name="RegisterPage3" component={RegisterPage3} />
          <Stack.Screen name="AddEvent" component={AddEvent} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppRouter;
