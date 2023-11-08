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
    const [firstName, setNome] = useState("");
    const [lastName, setSobrenome] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [cpf, setCPF] = useState("");
  
    const signUp = async () => {
      // Password didn't match
      if (password !== confirmPassword) return;
  
      // Invalid data
      if (!firstName || !age || !email || !password || !cpf || !lastName) return;
  
      const data = {
        email,
        firstName,
        lastName,
        password,
        birthday: new Date(age),
        CPF: cpf,
      };
  
      const res = await axios.Get("http://localhost:8080/api/", data);
      if (res.status === 201) {
        sessionStorage.setItem("token", res.data)
        props.navigation.navigate("Login");
      }
    };
  
    return (
      <View style={styleSignUp.bg}>
        <View style={styleSignUp.inputs1}>
          <View>
            <Text style={styleSignUp.textView}>Primeiro nome: </Text>
            <TextInput
              style={styleSignUp.input}
              maxLength={20}
              onChangeText={(text) => setNome(text)}
            />
          </View>
  
          <View>
            <Text style={styleSignUp.textView}>Ultimo nome: </Text>
            <TextInput
              style={styleSignUp.input}
              maxLength={20}
              onChangeText={(text) => setSobrenome(text)}
            />
          </View>
        </View>
  
        <View style={styleSignUp.inputs1}>
          <View>
            <Text style={styleSignUp.textView}>Data nascimento:</Text>
            <TextInput
              style={styleSignUp.input}
              onChangeText={(text) => setAge(text)}
            />
          </View>
  
          <View>
            <Text style={styleSignUp.textView}>CPF:</Text>
            <TextInput
              style={styleSignUp.input}
              onChangeText={(text) => setCPF(text)}
            />
          </View>
        </View>
  
        <View>
          <Text style={styleSignUp.textView}>Email:</Text>
          <TextInput
            style={styleSignUp.input}
            maxLength={20}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
  
        <View>
          <Text style={styleSignUp.textView}>Senha:</Text>
          <TextInput
            style={styleSignUp.input}
            maxLength={20}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
  
        <View>
          <Text style={styleSignUp.textView}>Confirmar Senha:</Text>
          <TextInput
            style={styleSignUp.input}
            maxLength={20}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
  
        <View style={styleSignUp.buttonLogin}>
          <TouchableOpacity style={styleSignUp.button} onPress={() => signUp()}>
            <Text style={styleSignUp.textbutton}>Login</Text>
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
      display: "flex"
    },
  
  
    input: {
      marginHorizontal: 40,
      marginTop: 10,
      padding: 10,
      backgroundColor: "#65F4F2",
      height: 45,
      borderRadius: 20
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
      borderRadius: 20
    },
  
    button1: {
      padding: 10,
      margin: 12
    },
  
    textbutton: {
      textAlign: "center"
    }
  });
