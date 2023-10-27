import { GetUserList } from "@/database/CRUD";

export async function GetCreatedList(userId){
    const list = await GetUserList(userId)
    return list
}