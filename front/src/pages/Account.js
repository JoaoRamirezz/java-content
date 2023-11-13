import * as React from "react";
import { Avatar } from "react-native-paper";
import { View, StyleSheet, Text } from "react-native";
import Prices from "../components/Prices";

const test = [1,2,3,4,5]

export default function Account() {
  return (
    <View style={styleAccount.AccountContent}>
      <View style={styleAccount.Image}>
        <Avatar.Image size={150} source={require("../../assets/avatar.png")} />
      </View>
      <View>
        <Text style={styleAccount.Name}>Fulano de Tal</Text>
        <Text style={styleAccount.Function}>Producer</Text>
      </View>


      <View style={styleAccount.works}>
        <Prices title={test}/>
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
    fontSize: 20
  },
  
  Function:{
    fontSize:13,
    textAlign:'center'
  }
});
