import { addCreatedRecipe } from "@/BackendLogic/addCreatedRecipe"

export default async (req, res) => {
    const {userId, recipe} = req.body
    const result = await addCreatedRecipe(userId, recipe)
    res.status(200).json({result: result})
}