import React from "react";
import { Link } from "react-router-dom";

export const Root = () => {
    return (
        <div>
            <h1>Anna Batman</h1>
            <img
                src="/Users/annabatman/Desktop/Code stuff/Forge/Portfolio/src/BrazilPic.jpg"
                alt="Picture of me!"
            />
            <br></br>
            <Link to={"/contact"}>Contact me</Link>
            <br></br>
            <Link to={"/projects"}>See my work</Link>
            <br></br>
            <Link to={"/about"}>About me</Link>
        </div>
    );
};
