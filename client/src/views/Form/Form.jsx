/*
 Un formulario controlado con JavaScript con los siguientes campos:
Nombre
Resumen del plato
Nivel de "comida saludable" (health score)
Paso a paso
 Posibilidad de seleccionar/agregar uno o más tipos de dietas
 Botón/Opción para crear una nueva receta
 */
import {useEffect, useState} from "react";
import validate from "./validation";
import {useDispatch} from "react-redux";
import {addRecipe, getDiets} from "../../redux/actions";
import {useNavigate} from "react-router-dom";

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
        console.log(Object.values(errors).length)
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
        <div>
            <h1>Este es el form</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <label>Name: </label>
                <input name="name" type="text" value={inputs.name} onChange={handleChange}/>
                {errors.name ? <p className='danger'>{errors.name}</p> : null}

                <p>Summary:</p>
                {/*<label>Summary: </label>*/}
                <textarea name="summary" value={inputs.summary} onChange={handleChange} rows="5" cols="20"></textarea><br/><br/>
                {errors.summary ? <p className='danger'>{errors.summary}</p> : null}

                <label>Health Score: </label>
                <input name="healthScore" type="number" value={inputs.healthScore} onChange={handleChange}/>
                {errors.healthScore ? <p className='danger'>{errors.healthScore}</p> : null}

                <p>Instructions:</p>
                {/*<label>Instructions: </label>*/}
                <textarea name="instructions" value={inputs.instructions} onChange={handleChange} rows="5" cols="20"></textarea><br/><br/>


                <div className="checkbox diets">
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
                <br/>

                <button type="submit"> Enviar </button>
            </form>
        </div>
    )
}

export default Form;