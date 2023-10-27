import { RemoveCreatedRecipe } from "@/BackendLogic/RemoveCreatedRecipe"

export default async (req, res) =>{
    const {userId, recipeId} = req.body
    const result = await RemoveCreatedRecipe(userId, recipeId)
    res.status(200).json({result: result})
}
