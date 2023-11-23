import * as React from "react";
import { Avatar } from "react-native-paper";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import { ColorsApp } from "../../helpers/ColorsApp";
import { IoAddOutline } from "react-icons/io5";
import { useNavigation } from "@react-navigation/native"
import { useContext } from "react";
import { utilsContext } from "../../contexts/SignUpContext";




export default function Account() {
  var navigation = useNavigation()
  return (
    <View style={styleAccount.AccountContent}>
      <View style={styleAccount.Image}>
        <Avatar.Image size={150} source={require("../../assets/avatar.png")} />
      </View>


      <View>
        <Text style={styleAccount.Name}>Fulano</Text>
        <Text style={styleAccount.Function}>Produtor</Text>
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


      <TouchableOpacity style={styleAccount.buttonNew} onPress={() => navigation.navigate("NewPromo")}>
        <IoAddOutline style={styleAccount.icon} />
      </TouchableOpacity>

    </View>
  );
}

const styleAccount = StyleSheet.create({
  icon: {
    fontSize: 70,
    color: "white"
  },

  buttonNew: {
    position: "fixed",
    marginTop: 600,
    alignSelf: "flex-end",
    marginRight: 40,
    backgroundColor: "#3786e4",
    borderRadius: "100%"
  },

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
