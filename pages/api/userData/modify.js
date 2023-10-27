import { ChangeUserImgProf } from "@/database/CRUD"
import { ObjectId } from "mongodb"

export default async (req, res) => {
    const user = req.body
    console.log(new ObjectId(user._id), user.img)
    const result = await ChangeUserImgProf(user._id, user.img)
    res.status(200).json({result: result})
}