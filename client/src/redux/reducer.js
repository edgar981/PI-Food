import {GET_RECIPES, GET_RECIPE_DETAIL, SEARCH_RECIPE, GET_DIET_TYPES, ADD_RECIPE, FILTER, ORDER} from "./actionTypes";

const initialState = {
    recipes: [],
    recipeDetail: [],
    dietTypes: [],
    allRecipes: [],
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_RECIPES:
            return {...state, recipes: action.payload, allRecipes: action.payload};

        case GET_RECIPE_DETAIL:
            return {...state, recipeDetail: action.payload};

        case SEARCH_RECIPE:
            return {...state, recipes: action.payload};

        case ADD_RECIPE:
            return { ...state };

        case GET_DIET_TYPES:
            return {...state, dietTypes: action.payload};

        case FILTER:
            const allRecipes = state.allRecipes;

            const filtered = allRecipes.filter(r => r.diets?.some(d => d.toLowerCase() === action.payload.toLowerCase()));

            const plusCheck = () => {
                return action.payload.toLowerCase() === 'vegetarian' ? allRecipes.filter(r => r.vegetarian === true)
                    : action.payload.toLowerCase() === 'low fodmap' ? allRecipes.filter(r => r.lowFodmap === true)
                        : action.payload.toLowerCase() === 'default' ? allRecipes
                            : filtered;
            }
            return {...state, recipes: plusCheck()};

        case ORDER:
            const allRecipesOrderCopy = [...state.recipes];
            const order = allRecipesOrderCopy.sort((a, b) => {
               if (a.name.toLowerCase() > b.name.toLowerCase()) {
                   return "Ascendente" === action.payload ? 1 : -1;
               }
               if (a.name.toLowerCase() < b.name.toLowerCase()) {
                   return "Descendente" === action.payload ? 1 : -1;
               }
               return 0;
            });
            const ordered = action.payload === "default" ? allRecipesOrderCopy : order;
            return {...state, recipes: ordered}


        default:
            return {...state};
    }

}

export default rootReducer;