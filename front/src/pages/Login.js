import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";

import { PaperProvider, TextInput } from "react-native-paper";

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
        <TextInput
          style={styleLogin.input}
          label="Username or E-mail"
          secureTextEntry
          left={<TextInput.Icon icon="account" />}
        />
        <TextInput
          style={styleLogin.input}
          label="Password"
          secureTextEntry
          left={<TextInput.Icon icon="form-textbox-password" />}
        />

        <View style={styleLogin.options}>
          <TouchableOpacity style={styleLogin.button} onPress={() => props.navigation.navigate("Home")}>
            <Text style={styleLogin.textButton}>Login</Text>
          </TouchableOpacity>
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

  button: {
    padding: 15,
    marginHorizontal: 40,
    marginTop: 10,
    backgroundColor: "#3786E4",
    borderRadius: 15,
  },

  buttonSoundCloud: {
    padding: 15,
    marginHorizontal: 40,
    marginTop: 50,
    backgroundColor: "#ff7700",
    borderRadius: 15,
  },

  buttonGmail: {
    padding: 15,
    marginHorizontal: 40,
    marginTop: 10,
    backgroundColor: "white",
    borderRadius: 15,
  },
});
