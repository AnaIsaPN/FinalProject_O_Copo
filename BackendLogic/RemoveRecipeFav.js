import { RemoveOneFav } from "@/database/CRUD";

export async function RemoveRecipeFac(recipeId, userId) {
    const result = await RemoveOneFav(recipeId, userId)
    
    return {
        _id: result._id,
        img: result.img,
        email: result.email,
        name: result.name,
        favorites: result.favorites,
        createdRecipes: result.createdRecipes
    }
}