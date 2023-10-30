import { GetUsers, CreateNewUser } from "@/database/CRUD";

export async function RegisterNewUser(newUser){
    const users = await GetUsers()

    const checkIfUserExist = users.some(user => user.email === newUser.email)

    if(checkIfUserExist) return 'Este utilizador já existe!'

    const RegistUser = {
        "img": "",
        "name": newUser.name,
        "email": newUser.email,
        "password": newUser.password,
        "favorites": [],
        "createdRecipes": []
    }
    
    const createNewUser = await CreateNewUser(RegistUser)
    return createNewUser
}