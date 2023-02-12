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
import "./detail.css"
import imageDefault from "../../assets/pexels-cats-coming-920220.jpg";

const Detail = () => {
    const dispatch = useDispatch();
    const {idReceta} = useParams();

    useEffect(()=>{
        dispatch(getRecipeById(idReceta));
    },[dispatch, idReceta])

    const recipeDetail = useSelector(state => state.recipeDetail);

    return(
        <div className="wrap">
            <div className="btn-back"><Link to="/home" className="backButton">Go back to recipes</Link></div>
            <div className="detail">

                    <div className="image-detail">
                        <img src={recipeDetail?.image ? recipeDetail?.image :
                        imageDefault} alt={recipeDetail.name}/>
                    </div>
                    <div className="box">
                        <div className="name-detail"><h1>{recipeDetail?.name}</h1></div>

                        <div className="dType-detail">
                            <details>
                                <summary className="texts">Dish Type:</summary>
                                <p>{recipeDetail.dishTypes?.join(", ")}</p>
                            </details>
                        </div>

                        <div className="diets-detail">
                            <details>
                                <summary className="texts">Diet Type: </summary><p>{recipeDetail?.vegetarian === true && recipeDetail?.lowFodmap === true ? ["Vegetarian, ","low Fodmap, "] + recipeDetail?.diets
                                : recipeDetail?.vegetarian === true ? ["Vegetarian, "] + recipeDetail?.diets
                                    : recipeDetail?.lowFodmap === true ? ["low Fodmap, "] + recipeDetail?.diets
                                        : recipeDetail?.diets ? recipeDetail.diets
                                        : recipeDetail?.dietName}</p>
                            </details>
                        </div>

                        <div className="hs-detail">
                            <details>
                                <summary className="texts">Health score: </summary><p>{recipeDetail?.healthScore}</p>
                            </details>
                        </div>

                        <div className="summary-detail">
                            <details>
                                <summary className="texts">Summary:</summary><p> {recipeDetail.summary?.replace(/<[^>]*>/g, '')}</p>
                            </details>
                        </div>

                        <div className="pasoapaso">
                            <details>
                                <summary className="texts">Instructions: </summary>
                                <ul className="instructions-detail">{Array.isArray(recipeDetail.instructions) ? recipeDetail.instructions.map(r => {
                                    return(
                                        <li key={r.number}>{r.step}</li>
                                    )
                                }) : <li>{recipeDetail.instructions}</li>}
                                </ul>
                            </details>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default Detail;