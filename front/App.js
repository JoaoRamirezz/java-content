import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, PaperProvider } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { utilsContext } from "./contexts/SignUpContext";
import { useState } from "react";
import "react-native-gesture-handler"



import {SignUp} from "./src/pages/SignUp";
import StartPage from "./src/pages/StartPage";
import Login from "./src/pages/Login";
import HomePage from "./src/pages/HomePage";
import Prices from "./src/pages/Prices";
import NewPrice from "./src/pages/NewPrice";



export default function App() {
  const Stack = createStackNavigator();
  const [data, setData] = useState([]);

  return (
    <utilsContext.Provider value={{ data, setData }}>
    <PaperProvider theme={DefaultTheme}>
        <utilsContext.Provider value={{ data, setData }}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="StartPage" component={StartPage} />
              <Stack.Screen name="Home" component={HomePage} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={SignUp} />
              <Stack.Screen name="Prices" component={Prices} />
              <Stack.Screen name="NewPrice" component={NewPrice} />
            </Stack.Navigator>
          </NavigationContainer>
        </utilsContext.Provider >
      </PaperProvider>
    </utilsContext.Provider>
  );
}
