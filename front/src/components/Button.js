import { TouchableOpacity, StyleSheet , Text} from "react-native"
import { useNavigation } from "@react-navigation/native"

export default function Button(props) {
    var buttonColor = props.color
    var textColor = props.textColor
    var marginTop = props.top

    
    var nav = props.navigateTo
    var navigation = useNavigation()
    var onPress = props.onPress

    return (
        <TouchableOpacity style={styleButton(buttonColor, textColor, marginTop).button} onPress={navigation ? () => navigation.navigate(nav) : onPress}>
            <Text style={styleButton(buttonColor, textColor, marginTop).textButton}>{props.text}</Text>
        </TouchableOpacity>
    )
}


const styleButton = (color, textColor, Top) => StyleSheet.create({
    button: {
        padding: 15,
        marginHorizontal: 40,
        marginTop: Top,
        backgroundColor: color,
        borderRadius: 15,
    },

    textButton: {
        textAlign: "center",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        color: textColor,
        fontSize: 17,
    },
})