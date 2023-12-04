import { StyleSheet, Text } from 'react-native';
import Carousel from '../components/Carousel';
import { ColorsApp } from '../../helpers/ColorsApp';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TopNav from '../components/TopNav';

export default function Discovery() {
    const [cityUsers, setCities] = useState([])
    const [genreUsers, setGenres] = useState([])

    useEffect(() => {
        async function findByCity() {
            var jwt = sessionStorage.getItem("token")
            const res = await axios.get("http://localhost:8080/api/findCity", {headers:{Authorization:"Bearer "+jwt}});
            if (res.status == 200) {
                setCities(res.data)
            }
        }
        async function findByGenre() {
            var jwt = sessionStorage.getItem("token")
            const res = await axios.get("http://localhost:8080/api/findGenre", {headers:{Authorization:"Bearer "+jwt}});
            if (res.status == 200) {
                setGenres(res.data)
            }
        }
        findByCity()
        findByGenre()
    },[])
    

    return (
        <>
            <TopNav />
            <Text style={DiscStyle.text}>Na sua cidade: </Text>
            <Carousel
                cardColor={ColorsApp.carouselColors[(Math.floor(Math.random() * ColorsApp.carouselColors.length))]}
                array={cityUsers}
            />

            <Text style={DiscStyle.text}>Com seu genero musical: </Text>
            <Carousel
                cardColor={ColorsApp.carouselColors[(Math.floor(Math.random() * ColorsApp.carouselColors.length))]}
                array={genreUsers}
            />
        </>
    )
}

const DiscStyle = StyleSheet.create({
    text: {
        fontSize: 25,
        alignSelf: "flex-start",
        marginBottom: 20,
        marginTop: 20
    }
})
