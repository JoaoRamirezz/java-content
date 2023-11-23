import { IoArrowBack } from "react-icons/io5";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BackArrow() {
    var navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.goBack()} style={style.main}>
            <IoArrowBack style={style.icon}/>
        </TouchableOpacity>
    )
}


const style = StyleSheet.create({
    icon: {
        marginTop:15,
        fontSize: 30,
    },

    main:{
        position: "absolute",
        top: 0,
        left: 0,
    }

})
