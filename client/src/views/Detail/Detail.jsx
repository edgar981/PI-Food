/*
Los campos mostrados en la ruta principal para cada receta (imagen, nombre, tipo de plato y tipo de dieta)
 Resumen del plato
 Nivel de "comida saludable" (health score)
 Paso a paso

 */
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getRecipeById} from "../../redux/actions";
import {Link} from "react-router-dom";

const Detail = () => {
    const dispatch = useDispatch();
    const {idReceta} = useParams();

    useEffect(()=>{
        dispatch(getRecipeById(idReceta));
    },[dispatch, idReceta])

    const recipeDetail = useSelector(state => state.recipeDetail);

    return(
        <div>
            <Link to="/home"><button className="backButton">Go back to recipes</button></Link>
            <div>
                <img src={recipeDetail?.image} alt={recipeDetail.name}/>
            </div>
            <div>
                <h1>{recipeDetail?.name}</h1>
                <div>
                    <h2 className="texts">Dish Type: </h2>
                        {recipeDetail.dishTypes?.map(e => {
                            return(
                                <h2 key={e}>{e}</h2>
                            )
                        })}
                </div>
                <h2>Diet Type: {recipeDetail?.vegetarian === true && recipeDetail?.lowFodmap === true ? ["Vegetarian, ","low Fodmap, "] + recipeDetail?.diets
                    : recipeDetail?.vegetarian === true ? ["Vegetarian, "] + recipeDetail?.diets
                    : recipeDetail?.lowFodmap === true ? ["low Fodmap, "] + recipeDetail?.diets
                    : recipeDetail?.diets}</h2>
                <h2>Health score: {recipeDetail?.healthScore}</h2>
                <h2>Summary: {recipeDetail.summary?.replace(/<[^>]*>/g, '')}</h2>

                <div className="pasoapaso">
                    <h2>Instructions: </h2>
                    <ul className="instructions">{Array.isArray(recipeDetail.instructions) ? recipeDetail.instructions.map(r => {
                            return(
                                <li key={r.number}>{r.step}</li>
                            )
                        }) :
                        <li>{recipeDetail.instructions}</li>
                    }</ul>
                </div>

            </div>

        </div>
    )
}

export default Detail;