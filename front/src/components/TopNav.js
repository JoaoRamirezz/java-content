import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function TopNav(props) {
    var navigation = useNavigation()
    return (
        <Appbar.Header>
            <Appbar.Content title="" />
            <Appbar.Action icon="logout" onPress={() => navigation.navigate("StartPage")} />
        </Appbar.Header>
    )
}