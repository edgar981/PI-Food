import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {getRecipesByName} from "../../redux/actions";

export default function SearchBar() {
    const [recipe, setRecipe] = useState("");
    const dispatch = useDispatch();

    const handleInput = (evento) => {
        setRecipe(evento.target.value);
    }

    const onSearch = (evento) => {
        dispatch(getRecipesByName(recipe));
    }

    return (
        <div>
            <input type='text' name='search' placeholder='type name'
                   onChange={(e)=> handleInput(e)} value={recipe}
            />
            <button onClick={(e) => onSearch(e)}>Buscar</button>
        </div>
    );
}