import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";
import Button from "../components/Button";
import { ColorsApp } from "../../helpers/ColorsApp";




export function SignUp(props) {
  const [userName, setUserName] = useState("")
  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCPF] = useState("");
  const [type, setType] = useState("");
  const [genre, setGenre] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [musicalGenre, setMusicalGenre] = useState("");




  async function UsersignUp() {
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
      userName,
      city,
      musicalGenre
    };

    await axios.post("http://localhost:8080/api/newuser", data).then(res => {
      console.log(res)
      if (res.status === 200) {
        // sessionStorage.setItem("token", res.data)
        props.navigation.navigate("Login");
      }
    });

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
        onChangeText={(text) => setUserName(text)}
      />

      <TextInput
        mode="outlined"
        label="E-mail"
        style={styleSignUp.input}
        onChangeText={(text) => setEmail(text)}
      />

      <Picker style={styleSignUp.pickerStyles} onValueChange={(text) => setType(text)}>
        <Picker.Item label="Tipo de Usuário..." value="" />
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

      <Picker style={styleSignUp.pickerStyles} onValueChange={(text) => setGenre(text)}>
        <Picker.Item label="Genero..." value="" />
        <Picker.Item label="Feminine" value="Feminine" />
        <Picker.Item label="Masculine" value="Masculine" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <Picker style={styleSignUp.pickerStyles} onValueChange={(text) => setMusicalGenre(text)}>
        <Picker.Item label="Genero Musical..." value="" />
        <Picker.Item label="Trap" value="Trap" />
        <Picker.Item label="Funk" value="Funk" />
        <Picker.Item label="Rap" value="Rap" />
        <Picker.Item label="Reggae" value="Reggae" />
        <Picker.Item label="R&B" value="R&B" />
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

      <TextInput
        mode="outlined"
        label="Cidade"
        style={styleSignUp.input}
        onChangeText={(text) => setCity(text)}
      />

      <View style={styleSignUp.buttonLogin}>
        <Button
          top={10}
          text="Login"
          color={ColorsApp.mainButton}
          textColor="white"
          onPress={() => UsersignUp()}
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
