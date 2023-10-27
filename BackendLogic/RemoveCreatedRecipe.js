import {RemoveOneRecipeCreatedList} from "@/database/CRUD"

export async function RemoveCreatedRecipe(userId, recipeId){
    const result = await RemoveOneRecipeCreatedList(userId, recipeId)
    return result
}