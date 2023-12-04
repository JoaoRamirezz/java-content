import BottomNav from "../components/BottomNav"
import BackArrow from "../components/BackArrow"
import { StyleSheet, TouchableOpacity } from "react-native"
import { MdOutlineEdit } from "react-icons/md";

export default function Prices() {
    return (
        <>
            <BackArrow />
            <TouchableOpacity style={styleAccount.buttonNew} onPress={() => navigation.navigate("NewPrice")}>
                <MdOutlineEdit style={styleAccount.icon} />
            </TouchableOpacity>

        </>
    )
}

const styleAccount = StyleSheet.create({
    icon: {
        fontSize: 60,
        color: "white"
      },
    
      buttonNew: {
        position: "fixed",
        marginTop: 710,
        alignSelf: "flex-end",
        marginRight: 40,
        backgroundColor: "#3786e4",
        borderRadius: "100%"
      },
})