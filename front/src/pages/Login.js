import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";

export default function Login(props) {
  return (
    <View style={styleLogin.container}>
      <ImageBackground
        source={require("../../assets/bg.jpg")}
        style={styleLogin.bg}
      >
        <Image
          source={require("../../assets/Logo.png")}
          style={styleLogin.image}
        />

        <Input
          text="Username or E-mail"
          icon="account"
        />

        <Input
          text="Password"
          icon="form-textbox-password"
        />

        <View style={styleLogin.options}>
          <Button
            text="Login"
            color="#3786e4"
            textColor="white"
          />
        </View>
      </ImageBackground>
    </View>
  );
}

const styleLogin = StyleSheet.create({
  icon: {
    fontSize: 30,
  },

  input: {
    marginHorizontal: 40,
    marginTop: 10,
    padding: 0,
    height: 50,
    borderRadius: 5,
  },

  textButton: {
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    color: "white",
    fontSize: 17,
  },

  textButtonLogin: {
    marginTop: 5,
    textAlign: "center",
    color: "white",
    fontSize: 13,
  },

  image: {
    width: 250,
    height: 275,
    marginHorizontal: "9vh",
  },

  container: {
    height: "100vh",
  },

  bg: {
    flex: 1,
    justifyContent: "center",
  },
});
