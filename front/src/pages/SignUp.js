import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import axios from "axios";

export function SignUp(props) {
  const [name, setNome] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpf, setCPF] = useState("");
  const [type, setType] = useState("");
  const [genre, setGenre] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUp = async () => {
    console.log("deu boa 2");

    // Password didn't match
    if (password !== confirmPassword){
      console.log("senhas diferentes")
    };

    // // Invalid data
    // if (!name || !age || !email || !password || !cpf) return;

    const data = {
      name,
      cpf,
      email,
      password,
      type,
      genre,
    };

    const res = await axios.post("http://localhost:8080/api/newuser", data);
    if (res.status === 201) {
      // sessionStorage.setItem("token", res.data)
      // props.navigation.navigate("Login");
    }
    console.log(data);
  };

  return (
    <View style={styleSignUp.bg}>
      <View style={styleSignUp.inputs1}>
        <View>
          <Text style={styleSignUp.textView}>Name: </Text>
          <TextInput
            style={styleSignUp.input}
            maxLength={20}
            onChangeText={(text) => setNome(text)}
          />
        </View>
      </View>

      <View style={styleSignUp.inputs1}>
        <View>
          <Text style={styleSignUp.textView}>Email:</Text>
          <TextInput
            style={styleSignUp.input}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <View>
          <Text style={styleSignUp.textView}>Password:</Text>
          <TextInput
            style={styleSignUp.input}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <View>
          <Text style={styleSignUp.textView}>Confirm Password:</Text>
          <TextInput
            style={styleSignUp.input}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
      </View>

      <View>
        <Text style={styleSignUp.textView}>User Type:</Text>
        <TextInput
          style={styleSignUp.input}
          maxLength={20}
          onChangeText={(text) => setType(text)}
        />
      </View>

      <View>
        <Text style={styleSignUp.textView}>Genre:</Text>
        <TextInput
          style={styleSignUp.input}
          maxLength={20}
          onChangeText={(text) => setGenre(text)}
        />
      </View>

      <View>
        <Text style={styleSignUp.textView}>CPF:</Text>
        <TextInput
          style={styleSignUp.input}
          maxLength={20}
          onChangeText={(text) => setCPF(text)}
        />
      </View>

      <View style={styleSignUp.buttonLogin}>
        <TouchableOpacity style={styleSignUp.button} onPress={() => signUp()}>
          <Text style={styleSignUp.textbutton}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styleSignUp.button1}
          onPress={() => props.navigation.navigate("Login")}
        >
          <Text style={styleSignUp.textbutton}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styleSignUp = StyleSheet.create({
  bg: {
    backgroundColor: "#36CECC",
    height: "100%",
    display: "flex",
  },

  input: {
    marginHorizontal: 40,
    marginTop: 10,
    padding: 10,
    backgroundColor: "#65F4F2",
    height: 45,
    borderRadius: 20,
  },

  textView: {
    marginLeft: 40,
    marginTop: 20,
  },

  button: {
    padding: 10,
    marginHorizontal: 40,
    marginTop: 40,
    backgroundColor: "#176585",
    borderRadius: 20,
  },

  button1: {
    padding: 10,
    margin: 12,
  },

  textbutton: {
    textAlign: "center",
  },
});
