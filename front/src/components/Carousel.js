import SwiperFlatList from "react-native-swiper-flatlist"
import { Dimensions, StyleSheet, View, Text } from "react-native"
import Button from "./Button"
import { ColorsApp } from "../../helpers/ColorsApp"

export default function Carousel(props) {
    var arr = props.array
    var color = props.cardColor

    return (
        <>
            <SwiperFlatList
                autoplay
                autoplayDelay={4}
                autoplayLoop
                index={2}
                data={arr}
                renderItem={({ item }) => (
                    <View style={styles(color).child}>
                        <Text style={styles(color).name}>{item.name}</Text>
                        <Text style={styles(color).age}>{item.age}</Text>
                        <Text style={styles(color).city}>{item.city}</Text>
                        <Text style={styles(color).typeUser}>{item.typeUser}</Text>
                        <Button
                            top={10}
                            navigateTo="Home"
                            text="add"
                            color={ColorsApp.mainButton}
                            textColor="white"/>
                    </View>
                )}
            />

        </>
    )
}

const { width } = Dimensions.get('window');

const styles = (color) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },

    child: {
        backgroundColor: color,
        height: 200,
        width,
        justifyContent: 'center',
    },

    name: {
        fontSize: 40,
        textAlign: 'center'
    },

    age: {
        fontSize: 15,
        textAlign: 'center'
    },

    city: {
        fontSize: 17,
        textAlign: 'center'
    },

    typeUser: {
        fontSize: 17,
        textAlign: 'center'
    },

    buttonAdd: {
        width: "50%"
    }
});