import { GetRecipes } from "@/database/CRUD";
import { GetUsers } from "@/database/CRUD";
import { AddRecipeToFavList } from "@/database/CRUD";

export async function addRecipeToFavList(idUser, drinkName){
    const recipes = await GetRecipes()

    const filteredRecipe = recipes.find(drink => drink.name === drinkName && drink._id)
    const recipeID = filteredRecipe._id
    const result = await AddRecipeToFavList(idUser, recipeID)
    return {
        _id: result._id,
        img: result.img,
        name: result.name,
        email: result.email,
        favorites: result.favorites,
        createdRecipes: result.createdRecipes
    }
}