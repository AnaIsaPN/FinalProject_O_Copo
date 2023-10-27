import { GetUsers } from "@/database/CRUD";

export async function CheckLogIn(user){
    const dbUsers = await GetUsers()

    //Filtra o user pelo email
    const filterUser = dbUsers.find(dbuser => dbuser.email === user.email && dbuser.name)
    
    if(!filterUser) return filterUser

    //Filtra a password para ver se está correta
    const filterPw = dbUsers.find(dbuser => dbuser.password === user.password && dbuser)
    if(!filterPw) return filterPw
    
    return filterUser
}