import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";
import { CardList } from "../../components/CardList";
import styles from "./favorites.module.css"
import { useState, useEffect } from "react"
import { EmptyFavoritesMessage } from "../../components/EmptyFavoritesMessage";
import Loading from "../../components/Loading";

export default function Favorites() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    if (!localStorageUser) {
      setIsLoading(false)
      return
    }
    setCurrentUser(localStorageUser)
    fetchUserRecipes()
  }, []);

  const fetchUserRecipes = () => {
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    if (!localStorageUser) return
    fetch(`/api/users/favorites/show/${localStorageUser._id}`, { method: 'GET' })
      .then(response => response.json())
      .then(response => setFavoriteRecipes(response.result))
      .finally(() => {
        setTimeout(() =>
          setIsLoading(false)
          , 600)
      })
      .catch(err => console.error(err));
  }

  const onRemoveRecipe = (drink) => {
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "userId": currentUser._id, "recipeId": drink._id })
    };

    fetch('/api/users/favorites/removerecipe/', options)
      .then(response => response.json())
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.result))
        fetchUserRecipes()
      })
      .catch(err => console.error(err));
  }

  return (
    <div className={`${styles.container} ${isLoading ? styles.isLoading : ""}`}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.header}>
            <Header title={"Lista de favoritos"} showBackButton={true} />
          </div>
          {favoriteRecipes.length ?
            <div className={styles.list}>
              <div className={styles.cards} >
                <CardList list={favoriteRecipes} size={"large"} onRemoveRecipe={onRemoveRecipe} />
              </div>
            </div>
            :
            <div className={styles.empty}>
              {currentUser ?
                <div>
                  <EmptyFavoritesMessage message={"Ainda não adicionaste receitas aos favoritos."} />
                </div>
                :
                <div>
                  <EmptyFavoritesMessage message={"É necessário fazer login para aceder aos favoritos."} />
                </div>}
            </div>
          }
          <div className={styles.footer}>
            <NavBar />
          </div>
        </>
      )}
    </div>
  );
}