import "./Navbar.css";
import { Link } from "react-router-dom";
import darklogo from "../dark.png"
import lightlogo from "../light.png"
import { useContext, useState } from "react";
import { themeContext } from "../../Context/Theme-context";

export default function Navbar(){
    const {theme,dark,toggle} = useContext(themeContext);

    async function handleClick(e){
    }

    return(
        <div className="navbar">
            <Link to="/">
                <section className="right_nav">Blog</section>
            </Link>
             <Link to="/favourite" >
             <div className="favourite">My Favourite</div>
             </Link>
            <div className="left_nav">
                <img 
                onClick={toggle}
                className="theme" 
                src={dark?lightlogo:darklogo} 
                alt="theme" />
            </div>
        </div>
    )
}