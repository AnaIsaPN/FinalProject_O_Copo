import { GetRecipes } from "@/database/CRUD"

export async function GetRandomDrink(type) {
    const recipes = await GetRecipes()

    const alcDrink = recipes.filter(drink => drink.type === 'Alcoólico' && drink)
    const NonAlcDrink = recipes.filter(drink => drink.type === 'Não Alcoólico' && drink)
    
    if(type === 'Alcoólico') type = 'alcoolico'
 
    const randomNrAlc = Math.floor(Math.random() * alcDrink.length)
    const randomNrNoneAlc = Math.floor(Math.random() * NonAlcDrink.length)


    if (type === 'todas') {
        return [alcDrink[randomNrAlc],
        NonAlcDrink[randomNrNoneAlc]]
    } else if (type === 'alcoolico') {
        return [alcDrink[randomNrAlc]]
    } else {
        return [NonAlcDrink[randomNrNoneAlc]]
    }
}