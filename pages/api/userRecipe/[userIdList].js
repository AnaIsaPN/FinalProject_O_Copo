import { GetCreatedList } from "@/BackendLogic/GetCreatedList"

export default async (req, res) => {
    const {userIdList} = req.query
    const createdList = await GetCreatedList(userIdList)
    res.status(200).json({result: createdList})
}