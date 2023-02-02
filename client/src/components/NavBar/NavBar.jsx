import {NavLink} from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = (props) => {

    return(
        <div>
            <NavLink to='/home'>HOME</NavLink>
            <NavLink to='/create'>FORM</NavLink>
            <SearchBar />
        </div>
    )
}

export default NavBar;