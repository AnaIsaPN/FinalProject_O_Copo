import { FavoriteList, GetRecipes } from "@/database/CRUD";
import { ObjectId } from "mongodb";

export async function GetListFavorites(userId){
    
    //Pegar a listas de favoritos do usuário e pegar todas as receitas da colecção
    const getFavList = await FavoriteList(userId)
    const allRecipes = await GetRecipes()
    
    //Fazer um map, que há de ser a quantidade de favoritos que o usuário tem, e filtrar pelo id da 
    //receita
    const favList = getFavList.map(recipeId => allRecipes.reduce((acc, drink) => 
    String(new ObjectId(drink._id)) === String(new ObjectId(recipeId)) ? acc = drink : acc , 0))
    
    return favList
}