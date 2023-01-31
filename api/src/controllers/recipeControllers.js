const {Recipe, Diet} = require("../db")
const axios = require("axios");
const {API_KEY} = process.env;

const objFilter = (obj) => {
    return {
        id: obj.id,
        image: obj.image,
        name: obj.title,
        dishTypes: obj.dishTypes,
        diets: obj.diets,
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

const getRecipeById = async (idReceta, source) => {
    const recipe =
        source === "api" ? (await axios.get(`https://api.spoonacular.com/recipes/${idReceta}/information?apiKey=${API_KEY}`)).data
            : await Recipe.findByPk(idReceta, {
                include: {
                    model: Diet,
                    attributes: ["name"],
                    through: {
                        attributes: [],
                    }
                }
            });

    const recipeFiltered = objFilter(recipe);

    return recipeFiltered;
}

const createRecipe = async (name, summary, healthScore, instructions, dietName) => {

    const newRecipe = await Recipe.create({name, summary, healthScore, instructions});
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

module.exports = {getRecipeById, createRecipe, searchRecipesByName}