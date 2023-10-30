import { AddCreatedRecipe } from "@/database/CRUD";
import { ObjectId } from "mongodb";

export async function editCreatedRecipe(userId, recipe){
    const recipeId = recipe._id 
    let newObject = (({ _id, ...recipe }) => recipe)(recipe)
    const recipeUpdated = {_id: new ObjectId(recipeId),...newObject}
    const result = await AddCreatedRecipe(userId, recipeUpdated)
    return result
}