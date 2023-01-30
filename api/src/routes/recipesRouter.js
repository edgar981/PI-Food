const { Router } = require("express");
const {createRecipeHandler, getRecipeHandler, getRecipesHandler} = require("../handlers/recipesHandler");

const recipesRouter = Router();

recipesRouter.post("/", createRecipeHandler);

recipesRouter.get("/", getRecipesHandler);

recipesRouter.get("/:idReceta", getRecipeHandler);

module.exports = recipesRouter;