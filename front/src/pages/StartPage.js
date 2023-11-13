import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";

import { ImSoundcloud } from "react-icons/im";
import { BiLogoGmail } from "react-icons/bi";

export default function StartPage(props) {
  return (
    <View style={styleStartPage.container}>
      <ImageBackground
        source={require("../../assets/bg.jpg")}
        style={styleStartPage.bg}
      >
        <Image
          source={require("../../assets/Logo.png")}
          style={styleStartPage.image}
        />

        <View style={styleStartPage.options}>
          <TouchableOpacity style={styleStartPage.button} onPress={() => props.navigation.navigate("Login")}>
            <Text style={styleStartPage.textButton}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styleStartPage.buttonSoundCloud}>
            <Text style={styleStartPage.textButton}>
              <ImSoundcloud style={styleStartPage.icon} /> SoundCloud
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styleStartPage.buttonGmail}>
            <Text style={styleStartPage.textButtonGmail}>
              <BiLogoGmail style={styleStartPage.iconGmail} />
              Gmail
            </Text>
          </TouchableOpacity>

          <Text style={styleStartPage.textButtonLogin}>
            Don't have any account?
            <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
              <b>
                Sign Up!
              </b>
            </TouchableOpacity>
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styleStartPage = StyleSheet.create({
  icon: {
    fontSize: 30,
  },
  iconGmail: {
    fontSize: 30,
    color: "red",
  },

  textButton: {
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    color: "white",
    fontSize: 17,
  },

  textButtonGmail: {
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    color: "black",
    fontSize: 17,
  },
  textButtonLogin: {
    marginTop:5,
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
