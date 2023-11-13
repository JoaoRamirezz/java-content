import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { utilsContext } from "./contexts/SignUpContext";
import { useState } from "react";
// import { Login } from "./pages/login/Login";
// import { Home } from "./pages/Home/Home";
// import {Filter} from "./pages/Filter/Filter"
// import {SelectedHotel} from "./pages/SelectedHotel/SelectedHotel"
// import { UserPage } from "./pages/UserPage/userpage";
import { SignUp } from "./src/pages/SignUp";
import StartPage from "./src/pages/StartPage";
import Login from "./src/pages/Login";
import HomePage from "./src/pages/HomePage";

export default function App() {
  const Stack = createStackNavigator();
  const [data, setData] = useState([]);

  return (
    <utilsContext.Provider value={{ data, setData }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="StartPage" component={StartPage} />
          <Stack.Screen name="Register" component={SignUp} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </utilsContext.Provider>
  );
}
