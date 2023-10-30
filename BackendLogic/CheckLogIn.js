import { GetUsers } from "@/database/CRUD";

export async function CheckLogIn(user){
    const dbUsers = await GetUsers()

    const filterUser = dbUsers.find(dbuser => dbuser.email === user.email && dbuser.name)
    
    if(!filterUser) return filterUser

    const filterPw = dbUsers.find(dbuser => dbuser.password === user.password && dbuser)
    if(!filterPw) return filterPw
    
    return filterUser
}