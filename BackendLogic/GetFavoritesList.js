import { FavoriteList, GetRecipes } from "@/database/CRUD";
import { ObjectId } from "mongodb";

export async function GetListFavorites(userId){
    
    const getFavList = await FavoriteList(userId)
    const allRecipes = await GetRecipes()

    const favList = getFavList.map(recipeId => allRecipes.reduce((acc, drink) => 
    String(new ObjectId(drink._id)) === String(new ObjectId(recipeId)) ? acc = drink : acc , 0))
    
    return favList
}