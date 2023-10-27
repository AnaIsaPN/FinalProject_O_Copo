# FrontEnd


## Tela inicial:
Deve ter o logo da app com o nome da app, um slogan e um botão para prosseguir para a página de Login.

////////////////////////////////////////////////////////////////////////////
## Tela Login:
Logo da App com o nome.

Campo de texto do tipo email, só deve ser premitido submter caso seja mesmo um email.
Campo da password, tem de ser do tipo password.

Botão de **Entrar** deve levar à página de **Receitas** caso a autenticação seja validada e (se for um usuário que já esteja registado), guardar esse valor num state, pode ser o nome e o email vindo do backend.

Botão de **Registo** deve levar à página de registo.

Botão de **Entrar** como convidado deve levar o usuáio à página de **Receitas**, neste caso não guardar nada no state de usuário pois é apenas um visitante.

///////////////////////////////////////////////////////////////////////////////
## Tela de Registo

Botão de "voltar" no canto superior esquerdo que quando é clicado leva à **Tela de Login**

Titulo da página deve ser "Registo" ou algo idêntico.

Logo da App e nome por baixo do título.

Campo de texto **email** deverá apenas receber texto com formato de email, o input deve ter um placeholder para informar de que tipo o input se trata.

Campo de texto **Nome Usuário** deverá receber uma string, o input deve ter um placeholder para informar de que tipo o input se trata.

Campo de texto **Password** deverá ser tdo tipo password, o input deve ter um placeholder para informar de que tipo o input se trata.

Campo de texto **Confirma Password** deve ser do tipo password, o input deve ter um placeholder para informar de que tipo o input se trata.

Todos os campos de texto devem ter um icon referente à utilização, o input deve ter um placeholder para informar de que tipo o input se trata.

Parágrafo com o valor da subscrição.

Botão **Submeter**, se todos os dados forem válidados, ou seja, se não existir nenhum usário com o mesmo email, levar para a página **Sugestões**, guardar os dados do utilizador, o email e o nome do usuário num state, caso os dados não sejam validados apresentar um texto "Dados não válidos" ou "Usuário com este email já registado"

//////////////////////////////////////////////////////////////////////////////
## Tela das Sugestões

Terá uma saudação como título, caso o utilizador esteja logado, apresentar "Bem-vindo, nome do usuário", caso contrário, apenas "Bem-vindo"

Barra de **pesquisa** por baixo do título onde aceita texto, este input deve guardar o seu valor num state para enviar o seu valor para o backend, onChange. Fazer uma função que passe os valores guardados nesse state ao pedido do back end **Endpoit GET 'api/getRecipes/bySearch':**

Ao lado da barra de **pesquisa** terá um botão **dado** que quando premido irá fazer um pedido ao backend por receitas aleatórias, ou seja, fazer uma função que faça esse pedido à api **Endpoit GET 'api/getRecipes/RandomRecepies':** onClick. (Gerar alcoolica ou não alcoolica consoante o **filtro**)

Por baixo do botão **dado** terá um toggle?? **Alcoolico/Nao Alcoolico** que irá fazer um pedido ao backend pelo tipo de bebida, alcoolica ou não alcoolica, será pela api **EndPoint GET 'api/getRecipes/byType':**, fazer uma função que enviará um possivel state com o valor de alcoolico ou não alcoolico. 

### Por baixo disto tudo:

**Titulo Receitas** 

Por baixo do **Titulo Receitas** irá ter um campo que irá mostrar as receitas pedidas ao backend conforme os valores passado pelos inputs. terá todas as receitas disponiveis, com as imagens de cada bebida e os respectivos nomes. Todos estes valores veem do backend e deve ser guardados no state, fazer um .map ao state, e ler os valores das propriedades, neste caso o .name e o .img.

### No fim da página:

Ter uma espécie de barra/menu

Da esquerda para a direita:

**Botão/Icon Usuário**
Perfil do usuário, quando clicado, leva para a página de **Perfil** do usuário. Verificar se está logado ou não.

**Botão/Icon Home**
Acho que não vale a pena estar aqui visto este ser a home page, ou seria para a tela de Login?????!!!!!

**Botão/Icon Favoritos**
Favoritos, deve levar para página dos favoritos do usuário, aqui poderá ser necessário fazer uma verificação, caso o utilizador esteja logado, deve ser redirecionado para página, caso contrário, mostrar uma mensagem de "Precisa de se registar para aceder à lista de favoritos" ou então levar para a pagina dos favoritos onde será apresentado um texto "Ainda não subscreveu o serviço".

**Botão/Icon Minhas Receitas**
Lista das minhas receitas, deve levar para a página das minhas receitas criadas, aqui poderá ser necessário fazer uma verificação, caso o utilizador esteja logado, deve ser redirecionado para página, caso contrário, mostrar uma mensagem de "Precisa de se registar para aceder à sua lista de receitas"

///////////////////////////////////////////////////////////////////////////////

# Receita

Canto superior esquerdo deve ter um **botão de voltar** que leva à página de **Inicio**

Icon dos **Favoritos** ao lado do **titulo**

Quando clicado no botão dos **favoritos** deve ser enviado ao backend a receita a ser adicionado à lista dos favoritos do usuário

Deve ter o **Título** da bebida centrado

Por do **Titulo** deve ter o **Teor Alcoolico** e o **Tipo** com uma cor mais clara deforma ao usuário perceber que é uma informação

Por baixo do **Teor Alcoolico** deve ter a **img** da bebida

Por baixo da **Descrição** irá ter um **titulo Ingredientes**

Por baixo do **titulo Ingredientes** irá ter uma lista dos **ingredientes** da bebida em questão

Por baixo dos **ingredientes** um titulo **Receita**

Por baixo da **Receita** ter um texto **modo de preparação**

Tudo isto poderá ser feito com o **.map** onde vamos mappear o array vindo do backend com a receita escolhinda iremos usar as propriedades ordenadas conforme o estipulado como **.name** (nome da bebida)   **.type** (tipo bebida),  **.alcoholPercentage** (Teor alcoolico), **.img** (imagem da bebida) **.description** (descrição breve da bebida) **.ingredients** que vai ter de ser mappeado novamente para acedermos as propriedades **.quant** (quantidade) **.unity** (ml / g) **.name** e por fim **.instructions** (receita).

ATENÇÃO AOS VALORES NULL: poderá ter de ser necessário fazer condições para não ser mostrado na tela o "null".

No fim da página:

Ter uma espécie de barra/menu

Da esquerda para a direita:

**Botão/Icon Usuário**
Perfil do usuário, quando clicado, leva para a página de **Perfil** do usuário.

**Botão/Icon Home**
Leva para a pagina **Inicio**

**Botão/Icon Favoritos**
Favoritos, deve levar para página dos favoritos do usuário, aqui poderá ser necessário fazer uma verificação, caso o utilizador esteja logado, deve ser redirecionado para página, caso contrário, mostrar uma mensagem de "Precisa de se registar para aceder à lista de favoritos"!

**Botão/Icon Minhas Receitas**
Lista das minhas receitas, deve levar para a página das minhas receitas criadas, aqui poderá ser necessário fazer uma verificação, caso o utilizador esteja logado, deve ser redirecionado para página, caso contrário, mostrar uma mensagem de "Precisa de se registar para aceder à sua lista de receitas"

///////////////////////////////////////////////////////////////////////////////

# Lista de Favoritos

Botão voltar canto superior esquerdo que leva para à página anterior **Receita**

Titulo **Lista de Favoritos**

**Lista de receitas favoritadas**

Possivelmente usar o useEffects para quando a página é carregada fazer um pedido ao backend para enviar a lista de favoritos e guardar isso num state.
Pode-se usar o **.map** para acerdermos às propriedades **.img** e **.name**

Cada card irá ter um icon X para poder eliminar a receita dos favoritos, quando premido irá eliminar a receita dos favoritos, fazer uma função que vá para o end point **Endpoint DELETE 'api/users/removeFav'** e envie dos valores da receita ou nome da receita quando clicada, o backend irá tratar de eliminar a receita dos favoritos, e assim actualiza a lista de favoritos do usuário.

No fim da pagina: 

Ter uma espécie de barra/menu

Da esquerda para a direita:

**Botão/Icon Usuário**
Perfil do usuário, quando clicado, leva para a página de **Perfil** do usuário.

**Botão/Icon Home**
Leva à página de **Sugestões**

**Botão/Icon Favoritos**
Faz sentido ter este botão nesta página?!

**Botão/Icon Minhas Receitas**
Lista das minhas receitas, deve levar para a página das minhas receitas criadas, aqui poderá ser necessário fazer uma verificação, caso o utilizador esteja logado, deve ser redirecionado para página, caso contrário, mostrar uma mensagem de "Precisa de se registar para aceder à sua lista de receitas" ou então levar para a pagina de registo. Algo a discutir!

//////////////////////////////////////////////////////////////////////////////

## Lista de Receitas Criadas

Botão **Voltar** que leva para a página anterior **lista Favoritos**

Titulo **Lista de receitas criadas**

Por baixo do titulo ter um botão **+** que leva à pagina de **adicionar receira**

Card com a imagem da bebida e o nome da bebida

Quando a Página é carregada, talvez usar um useEffects para automaticamente fazer um pedido ao backend pela lista de receitas criadas do usuário e carrega-la na página.
Usar o **.map** para aceder às propriedades **.img** **.name**

No fim da página:

Ter uma espécie de barra/menu

Da esquerda para a direita:

**Botão/Icon Usuário**
Perfil do usuário, quando clicado, leva para a página de **Perfil** do usuário.

**Botão/Icon Home**
Leva para a página de **sugestões**

**Botão/Icon Favoritos**
Favoritos, deve levar para página dos favoritos do usuário, aqui poderá ser necessário fazer uma verificação, caso o utilizador esteja logado, deve ser redirecionado para página, caso contrário, mostrar uma mensagem de "Precisa de se registar para aceder à lista de favoritos" ou então levar para a pagina de registo. Algo a discutir!

**Botão/Icon Minhas Receitas**
Vale a pena estar aqui?!

//////////////////////////////////////////////////////////////////////////////

## Pagina Usuário

Botão **voltar** canto superior esquerdo

Titulo **Perfil**

Por baixo do **titulo** **Fotografia do usuário**

Por baixo da **Fotografia** **titulo Dados**

Por baixo do **titulo Dados**

Texto com infromação do cliente, poderemos meter o nr de receitas favoritadas, e de receitas criadas.

**Botão logout** sugestão de um state para deslogar o usuário.

No fim da página:

Ter uma espécie de barra/menu

Da esquerda para a direita:

**Botão/Icon Usuário**
Vale a pena ?! 

**Botão/Icon Home**
Leva para a página de **sugestões**

**Botão/Icon Favoritos**
Favoritos, deve levar para página dos **favoritos** do usuário.

**Botão/Icon Minhas Receitas**
Favoritos, deve levar para página das **receitas criadas** do usuário.



















