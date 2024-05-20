import React from "react";
import { Link } from "react-router-dom";
import picture from "./BrazilPic.jpg"

export const Root = () => {
    return (
        <div>
            <h1>Anna Batman</h1>
            <img src={picture} alt="Picture of me!" width="600" height="450" />
            <br></br>
            <Link to={"/contact"}>Contact me</Link>
            <br></br>
            <Link to={"/projects"}>See my work</Link>
            <br></br>
            <Link to={"/about"}>About me</Link>
        </div>
    );
};
