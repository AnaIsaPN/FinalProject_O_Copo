# BackEnd

## 1 - Endpoint GET 'api/login':
Serve para fazer o login do usuário, deve verificar se já existe o utilizador através do email,
se existir retornar "Utilizador já existe com este email" Caso contrário faz login.

## 2 - Endpoit POST 'api/signin':
 Serve para fazer o registo de um novo usuário, verifica se existe o usário que se está a registar, caso exista retorna "utilizador já existente" caso contrário cria um novo usuário

## 3 - Endpoit GET 'api/getRecipes/[type]/[search]':
Na barra de pesquisa por bebida ou por nome de ingrediente, quando o usuário digitar um ou vários ingredientes e submeter o pedido, deve ser verificado na Base de dados qual é a bebida/ingrediente que corresponde ao valor submetido pelo o usário e enviar essas respostas.
Vai servir também para carregar a tela inicial com todas as bebidas, esse vai ser o valor padrão.
[type] = 'todas' || 'alcoolico' || 'naoalcoolico'
[search] = nome do ingrediente ou nome da bebida

## 4 - Endpoint GET'api/getRecipes/RandomRecepies/[typeof]/[randomDrink]'
Quando selecionado o tipo de alcoolico ou não alcoolico, deve ser possivel aceder à base de dados, filtrar o tipo da bebida, alcoolico ou não alcoolico e enviar a resposta para o front end.
[typeof] = 'todas' || 'alcoolico' || 'naoalcoolico'
[radomDrink] = valor padrão, não mexer

## 5 - Endpoit POST 'api/users/favorites/addrecippe':
 Quando o botão dos favoritos é clicado, é verificado a receita onde foi clicado o favorito e adiciona o **ID** da receita à propriedade "favoritos" do user em questão. Verificar que utilizador que está logado.

## 6 - Endpoint DELETE 'api/users/favorites/removerecipe'
 Quando o botão é clicado é enviando do front-end o **ID** bebida a ser eliminada. Faz-se um **$pull** para encontrar a receita com esse **ID** nas funções do CRUD, e remove-se da lista de favoritos do usuário.

 ## - Endpoit GET 'api/users/favorites/[userId]'
 Quando a página dos favoritos é carregada, é enviado do front-end o **ID** do user logado, e pega-se as receitas do utilizador, e envia-se para o front-end
 [userId] = ID do ulitizador logado

## 7 - Endpoint PATH 'api/createRecipe/recipe':
 o Utilizador submete uma receita feita pelo mesmo, deve ser adicionada à propriedade lista de receitas do usuário

 ## 8 Endpoit GET 'api/userRecipe/[userIdList]'
 Deve enviar a lista de receitas do utilizador. Verificar quem é o utilizador, e enviar a lista das receitas criadas.
 [userIdLis] = id do utilizador

 ## 9 Endpoit PATH 'api/userRecipe/modify/recipe'
 Deve receber um body com as alterações a serem feitas na receitas criadas do usuário. Retorna a receita modificada
 

 

## Esquema das receitas 
```js
{
    "img": 'nome do path da imagem',
    "name": 'nome da bebida',
    "ingredients":[
        {'quant': 'quantidade',
         'unity': 'unidades em ml ou g',
         'name': "nome do ingrediente"   
        }],
    "instructions: "Modo de preparação",
    "type": 'Alcoolico ou não Alcoolico',
    "alcoholPercentage": 'percentagem de alcool',
    "description": 'uma breve descrição da bebida'
}
```

## Esquema do usuário: 
```js
{
    name: 'nome do usuário',
    email: 'email do usuário',
    favorites:[
        {
            receita: 'receita favoritada'
        }
        ],
    createdRecipes: [
        {
        img: 'nome do path da imagem',
        name: 'nome da bebida',
        ingredientes:[
        {   quant: 'quantidade',
            unity: 'unidades em ml ou g',
            name: "nome do ingrediente"   
        }],
        instructions: "Modo de preparação",
        type: 'Alcoolico ou não Alcoolico',
        alcoholPercentage: 'percentagem de alcool',
        description: 'uma breve descrição da bebida'
        }
    ]
}
```
