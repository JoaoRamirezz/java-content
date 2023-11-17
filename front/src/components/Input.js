import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";


export default function Input(props) {
    return (
        <TextInput
            style={TextStyle.input}
            label={props.text}
            secureTextEntry
            left={<TextInput.Icon icon={props.icon} />}
        />
    )
}

const TextStyle = StyleSheet.create({
    input: {
        marginHorizontal: 40,
        marginTop: 10,
        padding: 0,
        height: 50,
        borderRadius: 5,
        backgroundColor: "rgba(255,255,255,0.5)"
    },
})