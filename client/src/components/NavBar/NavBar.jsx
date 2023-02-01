import {NavLink} from "react-router-dom";

const NavBar = () => {

    return(
        <div>
            <NavLink to='/home'>HOME</NavLink>
            <NavLink to='/create'>FORM</NavLink>
        </div>
    )
}

export default NavBar;