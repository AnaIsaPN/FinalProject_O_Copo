import { GetRecipesBySearch } from "../../../../../BackendLogic/GetRecipesBySearch"

export default async function (req, res) {
    const type = req.query.type
    const items = req.query.search
    const userId = req.query.userId
    console.log(userId)
    const result = await GetRecipesBySearch(type, items, userId)
    res.status(200).json({ result: result})
}