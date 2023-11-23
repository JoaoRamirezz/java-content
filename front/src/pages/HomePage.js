import { useContext } from "react";
import BottomNav from "../components/BottomNav"
import TopNav from "../components/TopNav";
import { utilsContext } from "../../contexts/SignUpContext";
import BackArrow from "../components/BackArrow";

export default function HomePage() {
    return (
        <>
            <TopNav />
            <BottomNav />
        </>
    )
}