import Card from '../Card/Card';
import {useSelector} from "react-redux";
import "./Cards.css"
import React, { useState} from "react";
import Pagination from "../Pagination/Pagination";

export default function Cards() {
    const recipes = useSelector(state => state.recipes);

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line
    const [recipesPerPage, setRecipesPerPage] = useState(9);

    //page
    const lastPostIndex = currentPage * recipesPerPage;
    const firstPostIndex = lastPostIndex - recipesPerPage;
    const currentRecipes = recipes.slice(firstPostIndex, lastPostIndex);

    return (
        <div className="cards">
            {
                currentRecipes.map((r, index)=>{
                    return (
                        <Card
                            id={r.id}
                            key={index}
                            name={r.name}
                            image={r.image}
                            diets={r.diets}
                            dietName={r.dietName}
                        />
                    )
                })
            }
            <Pagination allRecipes={recipes.length} recipesPerPage={recipesPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    );
}