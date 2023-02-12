/*
 Un formulario controlado con JavaScript con los siguientes campos:
Nombre
Resumen del plato
Nivel de "comida saludable" (health score)
Paso a paso
 Posibilidad de seleccionar/agregar uno o más tipos de dietas
 Botón/Opción para crear una nueva receta
 */
import React, {useEffect, useState} from "react";
import validate from "./validation";
import {useDispatch} from "react-redux";
import {addRecipe, getDiets} from "../../redux/actions";
import {useNavigate} from "react-router-dom";
import "./form.css"
import imageForm from "../../assets/pexels-larissa-deruzzi-6546181.jpg";

const Form = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        name: '',
        summary: '',
        healthScore: 0,
        instructions: '',
        dietName: [],
    });

    const [errors, setErrors] = useState({
        name: '',
        summary: '',
        healthScore: 0,
        instructions: '',
        dietName: [],
    });

    useEffect(()=>{
        dispatch(getDiets());
    },[dispatch])

    const handleChange = (evento) => {
        setInputs({
                ...inputs,
                [evento.target.name]: evento.target.value,
            }
        );

        setErrors(validate({
                ...inputs,
                [evento.target.name]: evento.target.value,
            })
        );

    }

    const handleCheck = (evento) => {
        let arrDietsCopy = inputs.dietName;
        let pos = arrDietsCopy.indexOf(evento.target.value);

        if (pos >= 0){
            arrDietsCopy.splice(pos, 1);
        } else{
            arrDietsCopy.push(evento.target.value);
        }

        setInputs({
            ...inputs,
            dietName: arrDietsCopy,
        });

        setErrors(validate({
                ...inputs,
                [evento.target.name]: evento.target.value,
            })
        );

    }


    const handleSubmit = (evento) => {
        evento.preventDefault();
        if (Object.keys(errors).length === 0){
            dispatch(addRecipe(inputs));
            navigate("/home");
            return window.alert("Datos Completos");
        } else {
            return window.alert("Debe llenar todos los campos");
        }

    }


    return(
        <div className="form">
            <div className="lp-overlay-form"></div>
            <div className="form-card">

                <div className="text-form">
                    <h1>Create your recipe</h1>
                </div>

                <form onSubmit={e => handleSubmit(e)} className="formulario">
                    <div className="d-name">
                        <input name="name" type="text" className="n-name" value={inputs.name} onChange={handleChange} required="required"/>
                        <span>Name</span>
                        {errors.name ? <p className='danger'>{errors.name}</p> : null}
                    </div>

                    <div className="d-summary">
                        <textarea name="summary" className="n-summary" value={inputs.summary} required="required"
                                  onChange={handleChange} rows="5" cols="20"></textarea>
                        <span>Summary</span>
                        {errors.summary ? <p className='danger'>{errors.summary}</p> : null}<br/>
                    </div>

                    <div className="d-hs">
                        <label className="l-hs">Health Score</label>
                        <input name="healthScore" type="number" className="healthScore" value={inputs.healthScore} onChange={handleChange}/>
                    </div>
                    <div className="l-hse">{errors.healthScore ? <p className='danger'>{errors.healthScore}</p> : null}</div>

                    <div className="d-instructions">
                        <textarea className="instructions" name="instructions" required="required" value={inputs.instructions} onChange={handleChange} rows="5" cols="20"></textarea><br/><br/>
                        <span>Instructions</span>
                    </div>


                    <div className="checkbox-diets">
                        <input type="checkbox" name="gluten free" value={"gluten free"} onChange={handleCheck}/>
                        <label htmlFor="gluten free">Gluten free</label><br/>
                        <input type="checkbox" name="ketogenic" value={"ketogenic"} onChange={handleCheck}/>
                        <label htmlFor="ketogenic">Ketogenic</label><br/>
                        <input type="checkbox" name="vegetarian" value={"vegetarian"} onChange={handleCheck}/>
                        <label htmlFor="vegetarian">Vegetarian</label><br/>
                        <input type="checkbox" name="lacto ovo vegetarian" value={"lacto ovo vegetarian"} onChange={handleCheck}/>
                        <label htmlFor="lacto ovo vegetarian">Lacto ovo vegetarian</label><br/>
                        <input type="checkbox" name="vegan" value={"vegan"} onChange={handleCheck}/>
                        <label htmlFor="vegan">Vegan</label><br/>
                        <input type="checkbox" name="pescatarian" value={"pescatarian"} onChange={handleCheck}/>
                        <label htmlFor="pescatarian">Pescatarian</label><br/>
                        <input type="checkbox" name="paleolithic" value={"paleolithic"} onChange={handleCheck}/>
                        <label htmlFor="paleolithic">Paleolithic</label><br/>
                        <input type="checkbox" name="primal" value={"primal"} onChange={handleCheck}/>
                        <label htmlFor="primal">Primal</label><br/>
                        <input type="checkbox" name="low fodmap" value={"low fodmap"} onChange={handleCheck}/>
                        <label htmlFor="low fodmap">Low fodmap</label><br/>
                        <input type="checkbox" name="whole 30" value={"whole 30"} onChange={handleCheck}/>
                        <label htmlFor="whole 30">Whole 30</label><br/>
                        <input type="checkbox" name="dairy free" value={"dairy free"} onChange={handleCheck}/>
                        <label htmlFor="dairy free">Dairy free</label><br/>
                    </div>
                    {errors.dietName ? <p className='danger'>{errors.dietName}</p> : null}
                    <div className="btn-div">
                        <button type="submit" className="submit-btn"> Send </button>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Form;