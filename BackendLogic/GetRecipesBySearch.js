import { GetRecipes } from "@/database/CRUD"
import { GetCreatedList } from "./GetCreatedList"

export async function GetRecipesBySearch(type, items, userId) {
    let word
    if (items.includes(',')) {
        word = items.toLowerCase().replaceAll(',', '').split(' ').filter(item => item !== 'de' && item)
    } else {
        word = items.toLowerCase().split(' ')
    }

    let typeDrink = type

    if (type === 'naoalcoolica') typeDrink = 'Não Alcoólico'
    if (type === 'alcoolico') typeDrink = 'Alcoólico'

    let recipes = ''
    if (userId === 'visitante') {
        recipes = await GetRecipes()
    } else {
        const userRecipes = await GetCreatedList(userId)
        const allRecipes = await GetRecipes()
        recipes = allRecipes.concat(userRecipes.createdRecipes)
    }

    const filterAlcOrNonAlcDrinks = recipes.filter(drink =>
        drink.type === typeDrink && drink || typeDrink === 'todas' && drink)

    if (word[0] === 'vazio') return filterAlcOrNonAlcDrinks

    const resultByName = filterAlcOrNonAlcDrinks.filter(drink =>
        drink.name.toLowerCase() === word.join(' ').toLowerCase() && drink)
    if (resultByName.length > 0) return resultByName

    const result = word.map(word => filterAlcOrNonAlcDrinks.filter(drink => drink.ingredients.reduce((acc, ingredient) =>
        ingredient.name.toLowerCase().includes(word.toLowerCase()) ? acc = drink : acc, 0))).flat()

    const teste = [...new Set(result)]

    if (teste.length > 0) return teste
    const resultByFirstName = filterAlcOrNonAlcDrinks.filter(drink =>
        drink.name.toLowerCase().includes(word.join(' ').toLowerCase()) && drink
    )

    if (resultByFirstName.length > 0) return resultByFirstName
}


