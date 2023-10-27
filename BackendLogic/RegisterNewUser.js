import { GetUsers, CreateNewUser } from "@/database/CRUD";

export async function RegisterNewUser(newUser){
    const users = await GetUsers()

    //Verifico se existe algum usuário na colecção com o mesmo email, 
    //para impedir que se registe com o mesmo email.
    const checkIfUserExist = users.some(user => user.email === newUser.email)

    if(checkIfUserExist) return 'Este utilizador já existe!'


    //Estrutura de registo
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