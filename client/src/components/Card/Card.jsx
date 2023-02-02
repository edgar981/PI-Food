/*
imagen, nombre, tipo de dieta.
 */
import {Link} from "react-router-dom";
// import {useState, useEffect} from "react";
// import {useDispatch} from "react-redux";

export default function Card(props) {

    // const dispatch = useDispatch();

    return (
        <div className="card">
            <Link to={`/detail/${props.id}`}>
                <h2>{props.name}</h2>
                <img  src={props.image} alt={props.name} />
            </Link>
            <h2>{props.diets}</h2>

        </div>
    );
}