import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { utilsContext } from "./contexts/SignUpContext";
import { useState } from "react";
// import { Login } from "./pages/login/Login";
// import { Home } from "./pages/Home/Home";
// import {Filter} from "./pages/Filter/Filter"
// import {SelectedHotel} from "./pages/SelectedHotel/SelectedHotel"
// import { UserPage } from "./pages/UserPage/userpage";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from "./src/screens";

export default function App() {
  const Stack = createStackNavigator();
  const [data, setData] = useState([]);

  return (
    <utilsContext.Provider value={{ data, setData }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </utilsContext.Provider>
  );
}
