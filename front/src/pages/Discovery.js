import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Carousel from '../components/Carousel';
import { usersList } from '../data/users';
import { otherUsers } from '../data/otherUsers';
import { ColorsApp } from '../../helpers/ColorsApp';

export default function Discovery() {
    return (
        <>
            <Text style={DiscStyle.text}>Na sua cidade: </Text>
            <Carousel
                cardColor={ColorsApp.carouselColors[(Math.floor(Math.random() * ColorsApp.carouselColors.length))]}
                array={usersList}
            />

            <Text style={DiscStyle.text}>Com seu genero musical: </Text>
            <Carousel
                cardColor={ColorsApp.carouselColors[(Math.floor(Math.random() * ColorsApp.carouselColors.length))]}
                array={otherUsers}
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
