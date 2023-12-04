import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function TopNav(props) {
    var [user, setUser] = useState({})
    var navigation = useNavigation()
    var hello = "Hello, " + user
    useEffect(() => {
        async function findUser() {
          var jwt = sessionStorage.getItem("token")
          await axios.get("http://localhost:8080/api/userData", { headers: { Authorization: "Bearer " + jwt } }).then((res) => {
            if (res.status == 200) {
              setUser(res.data.name)
            }
          });
        }
        findUser()
      }, [])

    return (
        <Appbar.Header>
            <Appbar.Content title={hello} />
            <Appbar.Action icon="logout" onPress={() => navigation.navigate("StartPage")} />
        </Appbar.Header>
    )
}