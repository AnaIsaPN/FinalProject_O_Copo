import { Header } from "../components/Header/Header";
import { HomeTitle } from "../components/HomeTitle/HomeTitle";
import { SearchForm } from "../components/SearchForm/SearchForm";
import { RandomButton } from "../components/RandomButton/RandomButton";
import { RecipesTitle } from "../components/RecipesTitle/RecipesTitle";
import { FilterButton } from "../components/FilterButton/FilterButton";
import { CardList } from "../components/CardList/CardList";
import { NavBar } from "../components/NavBar/NavBar";
import styles from "./home.module.css"
import { useState, useEffect } from "react"
import { RefreshButton } from "../components/RefreshButton/RefreshButton";



export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("todas");
  const [currentSearch, setCurrentSearch] = useState("");
  const [randomB, setRandomB] = useState(false)//boolean para o butao random
  const [selectedOption, setSelectedOption] = useState("todas")
  const [user, setUser] = useState()
  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')) === null ? { name: 'visitante' } : JSON.parse(localStorage.getItem('user')))
  }, [])
  // Busca por receitas quando a pagina carrega e quando o currentFilter é alterado
  useEffect(() => {
    fetchRecipes()
  }, [currentSearch])

  //quando o filtro alterado, faz a verificação se está se o filtro é para a lista toda ou só para o butao random
  useEffect(() => {
    if (randomB) {
      randomField()
    } else {
      allList()
    }
  }, [currentFilter])

  //Poder filtrar o tipo quando temos a lista toda
  async function allList() {
    if (recipes.length > 2) {
      const alldrinks = await fetchRecipes()
      if (currentFilter === 'Não Alcoólico') setRecipes(pRecipes => pRecipes?.filter(drink => drink.type === currentFilter && drink))
      if (currentFilter === 'Alcoólico') setRecipes(pRecipes => pRecipes?.filter(drink => drink.type === currentFilter && drink))
      if (currentFilter === 'todas') fetchRecipes()
    }
  }

  function randomField() {

    //filtra não alcoolico, e quando temos 2 bebidas e escolhemos não alcoolico conseguimos apenas mostrar a bebida não acoolica
    //dessas duas
    if (recipes.length <= 2 && currentFilter === 'Não Alcoólico') {
      if (recipes.length === 2) {
        const removeAlcDrink = recipes.filter(drink => drink.type === currentFilter && drink)
        setRecipes(removeAlcDrink)
        return recipes
      }
      const NonAlcDrink = generateRadomDrinks()
      return NonAlcDrink
    }
    //filtra alcoolico, e quando temos 2 bebidas e escolhemos alcoolico conseguimos apenas mostrar a bebida acoolica
    //dessas duas
    if (recipes.length <= 2 && currentFilter === 'Alcoólico') {
      if (recipes.length === 2) {
        const AlcDrink = recipes.filter(drink => drink.type === currentFilter && drink)
        setRecipes(AlcDrink)
        return recipes
      }
      const alcDrink = generateRadomDrinks()
      return alcDrink
    }
    if (recipes.length <= 2 && currentFilter === 'todas') {

      const drinks = generateRadomDrinks()
      return drinks
    }
    //Na tela incial com todas as bebidas filtra pelo  valor do filtro
    // fetchRecipes()
  }

  //funcao para o onlick do botão random
  const generateRadomDrinks = () => {
    setRandomB(true)
    // funcao pegar/gerar receita aleatória que provavalemente sera chamada do CardList
    const options = { method: 'GET' }

    fetch(`http://localhost:3000/api/getRandom/${currentFilter}/randomDrink`, options)
      .then(response => response.json())
      .then(response => setRecipes(response.result))
      .catch(err => console.error(err));
  }

  // const getRecipesBySearch = (searchTerm) => {
  //   // setCurrentSearch(searchTerm)
  //   fetchRecipes()
  // }


  async function fetchRecipes() {
    const forFetch = JSON.parse(localStorage.getItem('user'))
    const options = { method: 'GET' };
    // Possiveis estados do currentFilter: todas, Alcoólico, Não Alcoólico
    // Possiveis estados do currentSearch: "" ou "conteudo"
    fetch(`/api/getRecipes/${currentFilter}/${forFetch=== null ? 'visitante' : forFetch._id}/${currentSearch.length ? currentSearch : "vazio"}`, options)
      .then(response => response.json())
      .then(response => setRecipes(response.result))
      .catch(err => console.error(err));
  }

  //funcao onlick do botão de reset
  function resetButton() {
    setRandomB(false)
    fetchRecipes()
    setCurrentFilter("todas")
    setSelectedOption("todas")
    setCurrentSearch('')//resetar a barra de pesquisa
  }

  // Funcao passada como prop pro searchForm executar no onChange do input
  const handleSearchInput = (value) => {
    getRecipesBySearch(value)
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title={"Início"} />
      </div>

      <div className={styles.homeTitle}>
        <HomeTitle user={user?.name} />
      </div>

      <div className={styles.search}>
        <SearchForm setCurrentSearch={setCurrentSearch} currentSearch={currentSearch} />
        <RefreshButton resetButton={resetButton} />
        <RandomButton generateRadomDrinks={generateRadomDrinks} />
      </div>

      <div className={styles.title} >
        <RecipesTitle />
        <FilterButton
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
          setFilter={setCurrentFilter}
          setCurrentFilter={setCurrentFilter}
          resetButton={resetButton} />
      </div>

      {recipes.length === 0 && currentSearch.length > 1 ?
        <h2 className={styles.notFountTitle}>Não encontrámos resultados!</h2>
        : <div className={styles.cards} >
          <CardList list={recipes} size={"small"} />
        </div>}

      <div className={styles.footer}>
        <NavBar />
      </div>
    </div>
  );
}