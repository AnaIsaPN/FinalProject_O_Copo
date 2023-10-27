import { RegisterNewUser } from "@/BackendLogic/RegisterNewUser"

export default async (req, res) => {
// { name: 'Daniel', email: 'teste@gmail.com', password: '1234' }
    const userData= req.body
    const result = await RegisterNewUser(userData)

    if(result === 'Este utilizador já existe!') res.status(401).json({result: result})

    res.status(200).json({result: {
        _id: result._id,
        name: result.name,
        favorites: result.favorites,
        email: result.email,
        createdRecipes: result.createdRecipes,
        img: result.img
    }})
}