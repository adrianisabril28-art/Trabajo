import { recipe } from "../models/recipeModel.js";
import { recipeViewList } from "../views/recipeView.js";

const btnListing = document.getElementById("btnListar");

// Obtenemos los datos del modelo
const getListRecipe = async () => {

    const response = await recipe();

    return response;
};

// Asociamos el evento al botón
btnListing.addEventListener("click", async () => {

    const response = await getListRecipe();

    recipeViewList(response);

});