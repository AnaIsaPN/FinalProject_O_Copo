import { CreateNewUser, DeleteUser } from "@/database/CRUD"
import { ObjectId } from "mongodb"

export async function updateUser(user){
    const userId = new ObjectId(user._id)
    const deleteuser = await DeleteUser(userId)
    
    const destruturingId = (({_id, ...user}) => user)(user)
    const updatedUser = {_id: userId,...destruturingId}
    const result = await CreateNewUser(updatedUser)
    return result
}