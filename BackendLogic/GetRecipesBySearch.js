import { GetRecipes } from "@/database/CRUD"
import { GetCreatedList } from "./GetCreatedList"

export async function GetRecipesBySearch(type,items, userId){
    let word = items 
    if(items.includes(',')) {
        word = items.replaceAll(',','').split(' ')
    } else {
        word = items.split(' ')
    }
    
    let typeDrink = type

    if(type === 'naoalcoolica') typeDrink = 'Não Alcoólico'
    if(type === 'alcoolico') typeDrink = 'Alcoólico'
    
    let recipes = ''
    if(userId === 'visitante') {
        recipes = await GetRecipes()
    } else {
        const userRecipes = await GetCreatedList(userId)
        const allRecipes= await GetRecipes()
        recipes = allRecipes.concat(userRecipes.createdRecipes)
    }
    //filtra pelo tipo, alcoolico ou não alcoólico ou os dois "todas"
    const filterAlcOrNonAlcDrinks = recipes.filter(drink => 
        drink.type === typeDrink && drink || typeDrink === 'todas' && drink)

    //Envia as bebidas caso não seja enviado nenhum valor no input. 
    //No front-end temos de dar esse valor "vazio" caso não seja enviado nenhum valor
    if(word[0] === 'vazio') return filterAlcOrNonAlcDrinks

    //filtra pelo nome da bebida, se o input "items" for um nome de uma bebida retorna logo a bebida
    const resultByName = filterAlcOrNonAlcDrinks.filter(drink => 
        drink.name.toLowerCase() === word.join(' ').toLowerCase() && drink)
    if(resultByName.length > 0) return resultByName
    
    //Filtra caso seja enviado só o primeiro nome e dá os vários tipos de bebidas ou um nome que esteja na bebida
    const resultByFirstName = filterAlcOrNonAlcDrinks.filter(drink => 
        drink.name.toLowerCase().includes(word.join(' ').toLowerCase()) && drink
        )
    if(resultByFirstName.length > 0) return resultByFirstName


    //filtrar por ingrediente
    const result = word.map(word => filterAlcOrNonAlcDrinks.filter(drink => drink.ingredients.reduce((acc, ingredient) => 
    ingredient.name.toLowerCase().includes(word.toLowerCase()) ? acc = drink : acc, 0))).flat()
        return result
}



// console.log(GetRecipesBySearch('Alcool', 'laranja, banana'))

//Cabula
// console.log(recipes[0].name)//aceder ao nome da bebida
    // console.log(recipes[0].ingredients[0].name)//aceder aos ingredientes
    // console.log(recipes[0].type)//aceder ao alcoolico

//Para teste.
//     if(Array.isArray(word)){
// } else {
//     const result = filterAlcOrNonAlcDrinks.filter(drink => drink.ingredients.reduce((acc, ingredient) => 
// ingredient.name.toLowerCase().includes(word.toLowerCase()) ? acc = drink : acc, 0))
// return result
// }
