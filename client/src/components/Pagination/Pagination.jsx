import React from "react";
import './pagination.css';

export default function Pagination({recipesPerPage, allRecipes, setCurrentPage, currentPage}) {

    const pages = [];

    for (let i = 1; i <= Math.ceil(allRecipes/recipesPerPage); i++) {
        pages.push(i)
    };

    return (
        <div className="pagination">
            {
                pages.map((page,index) => {
                    return <button key={index} onClick={() => setCurrentPage(page)} className={page === currentPage ? 'active' : ''}>{page}</button>
                })
            }
        </div>
    )
};