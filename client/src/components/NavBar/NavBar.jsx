import {NavLink, useNavigate} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./navbar.css"
import React, {useState} from "react";

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return(
        <div className="nav">
            <div className='logo' onClick={()=>navigate("/")}>PI-FOOD</div>
            <div className={`nav-items ${isOpen && "open"}`}>
                <div className="sb"><SearchBar /></div>
                <NavLink to='/home' className="link-to">HOME</NavLink>
                <NavLink to='/create' className="link-to">FORM</NavLink>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
            {/*<div></div>*/}

        </div>
    )
}

export default NavBar;