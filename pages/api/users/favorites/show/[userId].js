import { GetListFavorites } from "@/BackendLogic/GetFavoritesList"

export default async (req, res) => {
    const {userId} = req.query
    const getList = await GetListFavorites(userId) 
    res.status(200).json({result: getList.length > 0 ? getList : []})
}