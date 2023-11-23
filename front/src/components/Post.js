import { StyleSheet, View} from "react-native"

export default function Post(props){
    return(
        <View style={style.post}>
            {props.text}
        </View>
    )
}


const style = StyleSheet.create({
    post: {
        marginTop: 20,
        color: "black",
        backgroundColor: "#f5f4d7",
        width: "80%",
        alignSelf: "center",
        height: "10%",
        borderRadius: "2%"
    }
})