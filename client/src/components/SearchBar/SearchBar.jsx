import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getRecipesByName} from "../../redux/actions";
import "./searchbar.css"

export default function SearchBar() {
    const [recipe, setRecipe] = useState("");
    const [isActive, setIsActive] = useState(false);
    const [errorsSearch, setErrorsSearch] = useState("");
    const dispatch = useDispatch();

    const validate = (recipe)=>{
        const regex = /^[A-Za-z\s]+$/;
        const errorsSearch = {};

        if(!regex.test(recipe)){
            errorsSearch.recipe = 'Debe incluir un nombre valido';
        }

        return errorsSearch;
    }

    const handleInput = (evento) => {
        setRecipe(evento.target.value);

        setErrorsSearch(validate(evento.target.value));
    }

    const onSearch = (evento) => {
        if (Object.keys(errorsSearch).length === 0){
            dispatch(getRecipesByName(recipe));
        } else {
            alert("Debe incluir un nombre valido");
        }

    }

    return (
        <div className={`searchbar ${isActive && 'active'}`}>
            <div className="icon" onClick={()=>setIsActive(!isActive)}></div>
            <div className='input'>
                <input type='text' name='search' placeholder='Search'
                       onChange={(e)=> handleInput(e)} value={recipe}
                />
            </div>
            <span className={`go ${isActive && 'active'}`} onClick={(e) => onSearch(e)}></span>
        </div>
    );
}