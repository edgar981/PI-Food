/*
imagen, nombre, tipo de dieta.
 */
import {Link} from "react-router-dom";
// import {useState, useEffect} from "react";
// import {useDispatch} from "react-redux";
import "./Card.css"
import React from "react";

export default function Card(props) {

    // const dispatch = useDispatch();

    return (
        <div className="card">
            <div className="card-cover">
            </div>
            <Link to={`/detail/${props.id}`}>
                <img  src={props.image} alt={props.name} />
                <div className="card-body">
                    <h2>{props.name}</h2>
                    <p>{props.diets}</p>
                    <p>Read more...</p>
                </div>
            </Link>

        </div>
    );
}