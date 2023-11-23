import {
  Image,
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
} from "react-native";

import { ImSoundcloud } from "react-icons/im";
import { BiLogoGmail } from "react-icons/bi";

import ButtonIcon from "../components/ButtonIcon";
import Button from "../components/Button";
import { ColorsApp } from "../../helpers/ColorsApp";

import * as Google from "expo-google-app-auth";

export default function StartPage(props) {

  const signInAsync = async () => {
    try {
      const { type, user } = await Google.logInAsync({
        iosClientId: `485387033166-133ff288g37ae3slitttu34e4ja8jarv.apps.googleusercontent.com`,
        androidClientId: `485387033166-9dnsshtpnerlavnjuviev3gfjfpeta2u.apps.googleusercontent.com`,
      });

      if (type === "success") {
        navigation.navigate("Home", { user });
      }
    } catch (error) {
      console.error("error with login", error);
    }
  };

  return (
    <View style={styleStartPage.container}>
      <ImageBackground
        source={require("../../assets/bg.jpg")}
        style={styleStartPage.bg}
      >
        <Image
          source={require("../../assets/Logo.png")}
          style={styleStartPage.image} />

        <View style={styleStartPage.options}>

          <Button
            navigateTo="Login"
            text="Login"
            color={ColorsApp.mainButton}
            textColor="white"
          />

          <ButtonIcon
            color={ColorsApp.soundcloudButton}
            textColor="white"
            top={50}
            icon={<ImSoundcloud style={styleStartPage.icon} />}
            text="SoundCloud"
            iconColor="white"
          />

          <ButtonIcon
            color={ColorsApp.gmailButton}
            textColor="red"
            top={10}
            icon={<BiLogoGmail style={styleStartPage.iconGmail} />}
            text="Gmail"
            onPress={signInAsync}
          />

          <Text style={styleStartPage.textButtonLogin}>
            Don't have any account?
            <TouchableOpacity onPress={() => props.navigation.navigate("Register")}>
              <b> Sign Up! </b>
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
  
  textButtonLogin: {
    marginTop: 5,
    textAlign: "center",
    color: "white",
    fontSize: 13,
  },

  image: {
    alignSelf: "center",
    width: 250,
    height: 275,
  },

  container: {
    height: "100vh"
  },

  bg: {
    flex: 1,
    justifyContent: "center",
  },
});
