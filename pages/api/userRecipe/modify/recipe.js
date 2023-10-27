import { RemoveOneRecipeCreatedList } from "@/database/CRUD"
import { editCreatedRecipe } from "@/BackendLogic/editCreatedRecipe"

export default async (req, res) => {
    const {userId, recipe} = req.body
    console.log(recipe)
    const recipeId = String(recipe._id)
    const removeCreatedRecipe = await RemoveOneRecipeCreatedList(userId, recipeId)
    const updateRecipe = await editCreatedRecipe(userId, recipe)
    res.status(200).json({result: updateRecipe})
}