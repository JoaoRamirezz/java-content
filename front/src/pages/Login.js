import {
  Image,
  StyleSheet,
  ImageBackground,
  View
} from "react-native";

import { useState } from "react";
import { ColorsApp } from "../../helpers/ColorsApp";
import Input from "../components/Input";
import Button from "../components/Button";
import BackArrow from "../components/BackArrow"
import axios from "axios";
import jwtDecode from 'jwt-decode'


export default function Login(props) {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  async function tryLogin() {
    const data = {
      email,
      password
    }

    const res = await axios.post("http://localhost:8080/api/login", data);
    if (res.status == 200) {
      sessionStorage.setItem("token",res.data)
      props.navigation.navigate("Home")
    }
  }

  return (
    <View style={styleLogin.container}>
      <ImageBackground
        source={require("../../assets/bg.jpg")}
        style={styleLogin.bg}
      >
        <BackArrow />
        <Image
          source={require("../../assets/Logo.png")}
          style={styleLogin.image}
        />
        <Input
          text="Username or E-mail"
          icon="account"
          onChangeText={setEmail}
        />

        <Input
          text="Password"
          icon="form-textbox-password"
          onChangeText={setPassword}
          isSecurity
        />

        <View style={styleLogin.options}>
          <Button
            top={10}
            text="Login"
            color={ColorsApp.mainButton}
            textColor="white"
            onPress={tryLogin}
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
