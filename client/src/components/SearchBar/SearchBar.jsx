import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getRecipesByName} from "../../redux/actions";
import "./searchbar.css"

export default function SearchBar() {
    const [recipe, setRecipe] = useState("");
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();

    const handleInput = (evento) => {
        setRecipe(evento.target.value);
    }

    const onSearch = (evento) => {
        dispatch(getRecipesByName(recipe));
    }

    return (
        // <div className="searchbar">
        //     <div className="icon"></div>
        //     <input type='text' name='search' placeholder='type name'
        //            onChange={(e)=> handleInput(e)} value={recipe}
        //     />
        //     <button onClick={(e) => onSearch(e)}>Buscar</button>
        // </div>
        <div className={`searchbar ${isActive && 'active'}`}>
            <div className="icon" onClick={()=>setIsActive(!isActive)}></div>
            <div className='input'>
                <input type='text' name='search' placeholder='Search'
                       onChange={(e)=> handleInput(e)} value={recipe}
                />
            </div>
            <span className='go'></span>
            {/*<button onClick={(e) => onSearch(e)}>Buscar</button>*/}
        </div>
    );
}