import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";
import Button from "../components/Button";
import { ColorsApp } from "../../helpers/ColorsApp";

export function SignUp(props) {
  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCPF] = useState("");
  const [type, setType] = useState("");
  const [genre, setGenre] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = async () => {

    if (password !== confirmPassword) {
      console.log("senhas diferentes");
    }

    const data = {
      name,
      cpf,
      email,
      password,
      type,
      genre,
      type,
    };

    const res = await axios.post("http://localhost:8080/api/newuser", data);
    if (res.status === 201) {
      // sessionStorage.setItem("token", res.data)
      props.navigation.navigate("Login");
    }
    console.log(data);
  };

  return (

    <View style={styleSignUp.bg}>
      <TextInput
        mode="outlined"
        label="Name"
        style={styleSignUp.input}
        maxLength={20}
        onChangeText={(text) => setNome(text)}
      />

      <TextInput
        mode="outlined"
        label="Username"
        style={styleSignUp.input}
        maxLength={20}
        onChangeText={(text) => setNome(text)}
      />

      <TextInput
        mode="outlined"
        label="E-mail"
        style={styleSignUp.input}
        onChangeText={(text) => setEmail(text)}
      />

      <Picker style={styleSignUp.pickerStyles}>
        <Picker.Item label="Producer" value="Producer" />
        <Picker.Item label="Musician" value="Musician" />
        <Picker.Item label="Event Organizer" value="Event Organizer" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <TextInput
        mode="outlined"
        label="CPF"
        style={styleSignUp.input}
        maxLength={20}
        onChangeText={(text) => setCPF(text)}
      />

      <Picker style={styleSignUp.pickerStyles}>
        <Picker.Item label="Feminine" value="Feminine" />
        <Picker.Item label="Masculine" value="Masculine" />
        <Picker.Item label="Other" value="Other" />
      </Picker>


      <TextInput
        mode="outlined"
        label="Password"
        style={styleSignUp.input}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />

      <TextInput
        mode="outlined"
        label="Confirm Password"
        style={styleSignUp.input}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry={true}
      />

      <View style={styleSignUp.buttonLogin}>
        <Button
          top={10}
          navigateTo="Home"
          text="Login"
          color={ColorsApp.mainButton}
          textColor="white"
          onPress = {signUp()}
        />

        <TouchableOpacity
          style={styleSignUp.button1}
          onPress={() => props.navigation.navigate("StartPage")}
        >
          <Text style={styleSignUp.textbutton}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styleSignUp = StyleSheet.create({
  bg: {
    height: "100%",
    display: "flex",
  },

  pickerStyles: {
    marginHorizontal: 40,
    marginTop: 30,
    padding: 10,
    height: 50,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
  },

  input: {
    marginHorizontal: 40,
    marginTop: 30,
    padding: 0,
    height: 50,
    borderRadius: 5,
  },

  textView: {
    marginLeft: 40,
    marginTop: 20,
  },

  button1: {
    padding: 10,
    margin: 12,
  },

  textbutton: {
    textAlign: "center",
  },
});
