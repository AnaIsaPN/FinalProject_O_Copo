import { AddCreatedRecipe } from "@/database/CRUD";
import { ObjectId } from "mongodb";

export async function addCreatedRecipe(userId, recipe){
    const recipeWithId = {_id: new ObjectId(), ...recipe}
    const result = await AddCreatedRecipe(userId, recipeWithId)
    return result
}