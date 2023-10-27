import { NavBar } from "../components/NavBar/NavBar";
import { Header } from "../components/Header/Header";
import { CardList } from "../components/CardList/CardList";
import styles from "./favorites.module.css"
import { useState, useEffect } from "react"
import { EmptyFavoritesMessage } from "../components/EmptyFavoritesMessage/EmptyFavoritesMessage";

export default function Favorites() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    if (!localStorageUser) return
    setCurrentUser(localStorageUser)
    const options = { method: 'GET' };
    fetch(`/api/users/favorites/show/${localStorageUser._id}`, options)
      .then(response => response.json())
      .then(response => setFavoriteRecipes(response.result))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title={"Lista de favoritos"} showBackButton={true} />
      </div>
      <div className={styles.footer}>
        <NavBar />
      </div>
      {favoriteRecipes.length ?
        <div className={styles.list}>
          <div className={styles.cards} >
            <CardList list={favoriteRecipes} size={"large"} pages={"favorites"}/>
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
    </div>
  );
}