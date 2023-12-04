import Button from "../components/Button"
import { ColorsApp } from "../../helpers/ColorsApp"
import { useState } from "react"
import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { Card, IconButton, Avatar } from "react-native-paper";

export default function Search() {
    const [search, setSearchQuery] = useState('');
    const [user, setUser] = useState({});


    async function searchUser() {
        var jwt = sessionStorage.getItem("token")
        const res = await axios.post("http://localhost:8080/api/searchUser", search, { headers: { Authorization: "Bearer " + jwt } });
        if (res.status == 200) {
            setUser(res.data)
        }
    }

    return (
        <>
            <Searchbar
                placeholder="Busque Musicos/Produtores"
                onChangeText={setSearchQuery}
                style={styleSearch.all}
            />
            <Button
                color={ColorsApp.mainButton}
                text="Search"
                textColor="white"
                top={10}
                onPress={searchUser} />

            {user.name ?
                <Card.Title
                    title={user.name}
                    subtitle={user.type}
                    left={(props) => <Avatar.Icon {...props} icon="account-outline" />}
                    right={(props) => <IconButton {...props} icon="account-multiple-plus-outline" onPress={() => { }} />}
                />
                : ""
            }
        </>
    )
}

const styleSearch = StyleSheet.create({
    all: {
        display: 'flex',
        marginTop: 30,
        width: "80%",
        alignSelf: "center"
    },

    boxUser: {
        backgroundColor: "#3786e4",
        alignSelf: "center",
        marginTop: 10
    }
})