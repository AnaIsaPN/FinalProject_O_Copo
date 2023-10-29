import { Header } from "../../components/Header";
import { HomeTitle } from "../../components/HomeTitle";
import { SearchForm } from "../../components/SearchForm";
import { RandomButton } from "../../components/RandomButton";
import { RecipesTitle } from "../../components/RecipesTitle";
import { FilterButton } from "../../components/FilterButton";
import { CardList } from "../../components/CardList";
import { NavBar } from "../../components/NavBar";
import styles from "./home.module.css"
import { useState, useEffect } from "react"
import { RefreshButton } from "../../components/RefreshButton";
import Loading from "../../components/Loading";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("todas");
  const [currentSearch, setCurrentSearch] = useState("");
  const [randomB, setRandomB] = useState(false)
  const [selectedOption, setSelectedOption] = useState("todas")
  const [user, setUser] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [randomDrinks, setRandomDrinks] = useState(null)

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')) === null ? { name: 'visitante' } : JSON.parse(localStorage.getItem('user')))
  }, [])

  useEffect(() => {
    fetchRecipes()
  }, [currentSearch])

  useEffect(() => {
    if (randomB) {
      randomField()
    } else {
      allList()
    }
  }, [currentFilter])

  async function allList() {
    await fetchRecipes()
    const filteredDrinks = recipes.filter(drink => drink.type === currentFilter && drink)
    setRecipes(currentFilter == "todas" ? recipes : filteredDrinks)
  }

  function randomField() {
    if (currentFilter === "todas") {
      setRecipes(randomDrinks)
    } else {
      setRecipes(randomDrinks.filter(drink => drink.type === currentFilter && drink))
    }
  }

  const generateRadomDrinks = () => {
    setRandomB(true)
    const options = { method: 'GET' }

    fetch(`/api/getRandom/${currentFilter}/randomDrink`, options)
      .then(response => response.json())
      .then(response => {
        setRecipes(response.result)
        setRandomDrinks(response.result)
      })
      .catch(err => console.error(err));
  }

  async function fetchRecipes() {
    const currentUser = JSON.parse(localStorage.getItem('user'))
    const options = { method: 'GET' };
    fetch(`/api/getRecipes/${currentFilter}/${currentUser === null ? 'visitante' : currentUser._id}/${currentSearch.length ? currentSearch : "vazio"}`, options)
      .then(response => response.json())
      .then(response => setRecipes(response.result))
      .finally(() => {
        setTimeout(() =>
          setIsLoading(false)
          , 600)
      })
      .catch(err => console.error(err));
  }

  function resetButton() {
    setRandomB(false)
    fetchRecipes()
    setCurrentFilter("todas")
    setSelectedOption("todas")
    setCurrentSearch('')
  }

  return (
    <div className={`${styles.container} ${isLoading ? styles.isLoading : ""}`}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
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

          <div className={styles.title}>
            <RecipesTitle />
            <FilterButton
              setSelectedOption={setSelectedOption}
              selectedOption={selectedOption}
              setCurrentFilter={setCurrentFilter}
            />
          </div>

          {recipes.length === 0 && currentSearch.length > 1 ?
            <h2 className={styles.notFountTitle}>Não encontrámos resultados!</h2>
            : <div className={styles.cards}>
              <CardList list={recipes} size={"small"} />
            </div>}

          <div className={styles.footer}>
            <NavBar />
          </div>
        </>
      )}
    </div>
  );
}