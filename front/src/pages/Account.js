import * as React from "react";
import { Avatar } from "react-native-paper";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import { ColorsApp } from "../../helpers/ColorsApp";
import { useNavigation } from "@react-navigation/native"
import { useState, useEffect } from "react";
import axios from "axios";




export default function Account() {
  var navigation = useNavigation()
  const [user, setUser] = useState({});

  useEffect(() => {
    async function findUser() {
      var jwt = sessionStorage.getItem("token")
      await axios.get("http://localhost:8080/api/userData", { headers: { Authorization: "Bearer " + jwt } }).then((res) => {
        if (res.status == 200) {
          setUser(res.data)
        }
      });
    }
    findUser()
  }, [])


  return (
    <View style={styleAccount.AccountContent}>
      <View style={styleAccount.Image}>
        <Avatar.Image size={150} source={require("../../assets/avatar.png")} />
      </View>


      <View>
        <Text style={styleAccount.Name}>{user.name}</Text>
        <Text style={styleAccount.Function}>{user.type}</Text>
      </View>


      <View style={styleAccount.Works}>
        <Button
          top={10}
          navigateTo="Prices"
          text="Prices"
          color={ColorsApp.mainButton}
          textColor="white"
        />
      </View>

    </View>
  );
}

const styleAccount = StyleSheet.create({

  AccountContent: {
    alignItems: "center",
  },
  Image: {
    marginTop: 20,
  },
  Name: {
    fontSize: 20,
  },

  Function: {
    fontSize: 13,
    textAlign: 'center'
  },
});
