import React from "react";
import HomeHeader from "../containers/HomeHeader";
import ThreeColumns from "./ThreeColumns";
import Onas from "./Onas";
import KomuPomagamy from "./KomuPomagamy";
import Steps from "./Steps";
import Contact from "./Contact";

export default class Home extends React.Component {
    render() {
        return (
            <div className="home" id="home">
                <HomeHeader/>
                <ThreeColumns/>
                <Steps/>
                <Onas/>
                <KomuPomagamy/>
                <Contact/>
            </div>
        )
    }
}