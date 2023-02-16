const {DataTypes} = require("sequelize");
const {getRecipeById, createRecipe, searchRecipesByName, getAllRecipes} = require("../controllers/recipeControllers");

const createRecipeHandler = async (req, res) => {
    /*
    Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
    Crea una receta en la base de datos relacionada con sus tipos de dietas.
     */
    const { name, summary, healthScore, instructions, dietName} = req.body;

    try {
        const newRecipe = await createRecipe(name, summary, healthScore, instructions, dietName);
        res.status(200).json(newRecipe);
    } catch (error){
        res.status(400).json({error: error.message});
    }
}

const getRecipeHandler = async (req, res) => {
    /*
    Obtener el detalle de una receta en particular
    Debe traer solo los datos pedidos en la ruta de detalle de receta
    Incluir los tipos de dieta asociados
     */
    const {idReceta} = req.params;

    const source = isNaN(idReceta) ? "bdd" : "api";  //condition to get a single recipe

    try {
        const recipe = await getRecipeById(idReceta, source);
        res.status(200).json(recipe);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getRecipesHandler = async (req, res) => {
    /*
    Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
    Si no existe ninguna receta mostrar un mensaje adecuado
     */
    const { name } = req.query;

    if (name){
        const results = await searchRecipesByName(name); //Passing name to the search function and find recipe
        if (results.length){
            res.status(200).json(results);
        } else{
            res.status(400).send("Recipe not found");
        }
    } else{
        const respuesta = await getAllRecipes();
        res.status(200).json(respuesta);
    }

}


module.exports = {
    createRecipeHandler,
    getRecipeHandler,
    getRecipesHandler
}

