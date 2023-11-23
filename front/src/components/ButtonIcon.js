import { useNavigation } from "@react-navigation/native"
import { TouchableOpacity, StyleSheet, Text } from "react-native"

export default function ButtonIcon(props) {
    var buttonColor = props.color
    var textColor = props.textColor
    var marginTop = props.top
    var icon = props.icon
    var text = props.text

    var nav = props.navigation
    var navigation = useNavigation()
    var onPress = props.onPress

    return (
        <TouchableOpacity style={styleButton(buttonColor, textColor, marginTop).button} onPress={navigation ? () => navigation.navigate(nav) : onPress}>
            <Text style={styleButton(buttonColor, textColor, marginTop).textButton}>
                {icon}
                {text}
            </Text>
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