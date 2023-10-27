import { GetUserById } from "@/database/CRUD"
import { ObjectId } from "mongodb"

export default async (req, res) => {
    const {userId} = req.query
    const getUser = await GetUserById(userId)
    res.status(200).json({result: getUser})
}