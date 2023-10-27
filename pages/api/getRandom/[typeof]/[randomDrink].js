import { GetRandomDrink } from "@/BackendLogic/GetRadomDrinksByType"

export default async (req, res) => {
    const type = req.query.typeof
    const result = await GetRandomDrink(type)
    res.status(200).json({result: result})
}