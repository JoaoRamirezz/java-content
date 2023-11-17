import SwiperFlatList from "react-native-swiper-flatlist"
import { Dimensions, StyleSheet, View, Text } from "react-native"

export default function Carousel(props) {
    var arr = props.array
    var color = props.cardColor

    return (
        <>
            <SwiperFlatList
                autoplay
                autoplayDelay={2}
                autoplayLoop
                index={2}
                data={arr}
                renderItem={({ item }) => (
                    <View style={styles(color).child}>
                        <Text style={styles(color).name}>{item.name}</Text>
                        <Text style={styles(color).age}>{item.age}</Text>
                        <Text style={styles(color).city}>{item.city}</Text>
                        <Text style={styles(color).typeUser}>{item.typeUser}</Text>
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
});