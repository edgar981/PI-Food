// eslint-disable-next-line
import {
    GET_RECIPES,
    GET_RECIPE_DETAIL,
    GET_DIET_TYPES,
    SEARCH_RECIPE,
    LOCAL_HOST,
    FILTER,
    ORDER_AZ,
    ORDER_SCORE
} from "./actionTypes";
import axios from "axios";

export const getRecipes = () => {
    // return async function (dispatch) {
    //     const apiData = await axios.get(
    //         `https://${LOCAL_HOST}/recipes`
    //     ).catch((error) => {
    //         console.log(error.message)
    //     });
    //     const recipes = apiData.data;
    //     dispatch({type: GET_RECIPES, payload: recipes});
    // }
    return function (dispatch) {
        axios.get(`${LOCAL_HOST}/recipes`)
            .then((response) => {
                return dispatch({type: GET_RECIPES, payload: response.data})
            }).catch((error) => {
                console.log(error)
            }
        )
    }
}

export const getRecipeById = (IdRecipe) => {
    return async function (dispatch) {
        const apiData = await axios.get(
            `${LOCAL_HOST}/recipes/${IdRecipe}`
        );
        const recipe = apiData.data;
        dispatch({type: GET_RECIPE_DETAIL, payload: recipe});
    }
}

export function getRecipesByName(recipeName) {
    return async function(dispatch) {
        try {
            const apiData = await axios.get(
                `${LOCAL_HOST}/recipes?name=${recipeName}`
            );
            const recipe = apiData.data;
            dispatch({type: SEARCH_RECIPE, payload: recipe});
        } catch {
            return alert ('Recipe Not Found')
        }
    }
}

export function addRecipe(recipe) {
    return async function () {
        try {
            const apiData = await axios.post(`${LOCAL_HOST}/recipes`, recipe);
            return apiData;
        } catch (error) {
            console.log(error)
        }
    }
}

export const getDiets= () => {
    return async function (dispatch) {
        const apiData = await axios.get(
            `${LOCAL_HOST}/diets`
        );
        const diets = apiData.data;
        dispatch({type: GET_DIET_TYPES, payload: diets});
    }
}

export const orderRecipes = (order) => {
    return {
        type: ORDER_AZ,
        payload: order,
    }
}

export const filterRecipes = (d) => {
    return {
        type: FILTER,
        payload: d,
    }
}

export const orderRecipesScore = (order) => {
    return {
        type: ORDER_SCORE,
        payload: order,
    }
}