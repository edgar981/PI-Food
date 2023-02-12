const {Recipe, Diet} = require("../db")
const axios = require("axios");
const {API_KEY} = process.env;

const objFilter = (obj) => {
    return {
        id: obj.id,
        vegetarian: obj.vegetarian,
        lowFodmap: obj.lowFodmap,
        image: obj.image,
        name: obj.title,
        dishTypes: obj.dishTypes,
        diets: obj.diets.join(", "),
        summary: obj.summary,
        healthScore: obj.healthScore,
        instructions: obj.analyzedInstructions[0]?.steps.map(p => {
            return {
                number: p.number,
                step: p.step,
            }
        }),
    }
}

const objFilterDb = (obj) => {
    return {
        id: obj.id,
        name: obj.name,
        summary: obj.summary,
        healthScore: obj.healthScore,
        instructions: obj.instructions,
        dietName: obj.dietName.join(", ")
    }
}

const getRecipeById = async (idReceta, source) => {

    if(source === "api"){
        const recipe = (await axios.get(`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${API_KEY}`)).data;
        const recipeFiltered = objFilter(recipe);
        return recipeFiltered;
    } else{
        const recipe = await Recipe.findByPk(idReceta);
        const recipedbf = objFilterDb(recipe);
        return recipedbf;
    }

}

const createRecipe = async (name, summary, healthScore, instructions, dietName) => {

    const newRecipe = await Recipe.create({name, summary, healthScore, instructions, dietName});
    let dietRecipes = await Diet.findAll({      //Busco y matcheo las dietas pasadas por body en mi db
        where: {name: dietName}                         //filtro por nombre
    });

    await newRecipe.addDiet(dietRecipes);           //Agrego y relaciono a la nueva receta sus dietas.
    return newRecipe;
}

const searchRecipesByName = async (name) => {
    const databaseRecipes = await Recipe.findAll({where: {name: name} });

    const apiRecipesRaw = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data;

    const apiRecipes = apiRecipesRaw.results.map(r => objFilter(r));

    const filteredApi = apiRecipes.filter(r => r.name.toLowerCase().includes(name.toLowerCase()));

    return [...filteredApi, ...databaseRecipes];
}

const getAllRecipes = async () => {
    const databaseRecipes = await Recipe.findAll();

    const apiRecipesRaw = (
        await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
    ).data;

    const apiRecipes = apiRecipesRaw.results.map(r => objFilter(r));


    return [...databaseRecipes, ...apiRecipes];
}

module.exports = {getRecipeById, createRecipe, searchRecipesByName, getAllRecipes}