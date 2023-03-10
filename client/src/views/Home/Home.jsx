/*
Input de búsqueda para encontrar recetas por nombre
 Área donde se verá el listado de recetas. Deberá mostrar su:
Imagen
Nombre
Tipo de dieta (vegetariano, vegano, apto celíaco, etc)
 Botones/Opciones para filtrar por por tipo de dieta
 Botones/Opciones para ordenar tanto ascendentemente como descendentemente las recetas por orden alfabético y por health score (nivel de comida saludable).
 Paginado para ir buscando y mostrando las siguientes recetas, 9 recetas por pagina, mostrando las primeros 9 en la primer pagina.
 */
// eslint-disable-next-line
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import Cards from "../../components/Cards/Cards";
import {filterRecipes, getRecipes, orderRecipes, orderRecipesScore} from "../../redux/actions";
import "./home.css"


const Home = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getRecipes());
        // eslint-disable-next-line
    }, []);


    const handleClick = (e) => {
        if (e.target.name === "filter") {
            dispatch(filterRecipes(e.target.value));
        }
        if (e.target.name === "alphabetical") {
            dispatch(orderRecipes(e.target.value));
        }
        if (e.target.name === "score") {
            dispatch(orderRecipesScore(e.target.value));
        }
    }

    return(
        <div className="home">
            <div className="lp-overlay-home"></div>

            <div className="select-menu">
                <div className="por-score">
                    <select name='score' onChange={handleClick} defaultValue="default">
                        <option value="default">Health score...</option>
                        <option value="Ascendente" >Lowest to highest</option>
                        <option value="Descendente" >Highest to lowest</option>
                    </select>
                </div>

                <div className="por-letra">
                    <select name='alphabetical' onChange={handleClick} defaultValue="default">
                        <option value="default">Order...</option>
                        <option value="Ascendente" >A to Z</option>
                        <option value="Descendente" >Z to A</option>
                    </select>
                </div>

                <div className="por-dieta">
                    <select name="filter" onChange={handleClick } defaultValue="default">
                        <option value="default" >Diets...</option>
                        <option value="gluten free">Gluten Free</option>
                        <option value="dairy free">Dairy Free</option>
                        <option value="ketogenic">Ketogenic</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="lacto ovo vegetarian">Lacto ovo Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="pescatarian">Pescatarian</option>
                        <option value="paleolithic">Paleo</option>
                        <option value="primal">Primal</option>
                        <option value="low fodmap">Low FODMAP</option>
                        <option value="whole 30">Whole 30</option>
                    </select>
                </div>
            </div>
            <Cards />
        </div>
    )
}

export default Home;