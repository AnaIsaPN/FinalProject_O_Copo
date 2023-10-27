import { RemoveRecipeFac } from "@/BackendLogic/RemoveRecipeFav"

export default async (req, res) => {
    const {recipeId, userId} = req.body
    const updatedFavList = await RemoveRecipeFac(recipeId, userId) 
    res.status(200).json({result: updatedFavList})
}