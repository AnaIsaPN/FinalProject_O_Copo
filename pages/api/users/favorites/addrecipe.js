import { addRecipeToFavList } from "@/BackendLogic/addRecipeToFavList"

export default async (req, res) => {
    const {drinkName, userId} = req.body
    const addFavList = await addRecipeToFavList(userId, drinkName)
    res.status(200).json({result: addFavList}) 
}