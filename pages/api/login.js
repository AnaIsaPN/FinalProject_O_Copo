import { CheckLogIn } from "@/BackendLogic/CheckLogIn"

export default async (req, res) => {
    const user = req.body
    const result = await CheckLogIn(user)
    
    if(!result) return res.status(401).json({result: false})

    res.status(200).json({result: {
        _id: result._id,
        name: result.name,
        favorites: result.favorites,
        email: result.email,
        createdRecipes: result.createdRecipes,
        img: result.img
    }})
}