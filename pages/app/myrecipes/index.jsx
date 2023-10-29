import { NavBar } from "../../../components/NavBar";
import { Header } from "../../../components/Header";
import styles from "../myrecipes/index.module.css"
import { useState, useEffect } from "react"
import { EmptyMyRecipesMessage } from "../../../components/EmptyMyRecipesMessage";
import { CardList } from "../../../components/CardList";
import { AddButton } from "../../../components/AddButton";
import Loading from "../../../components/Loading";

export default function MyRecipes() {
  const [currentUser, setCurrentUser] = useState(null)
  const [myRecipes, setMyRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchCreatedRecipes()
  }, [])

  const fetchCreatedRecipes = async () => {
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    if (!localStorageUser) {
      setIsLoading(false)
      return
    }
    setCurrentUser(localStorageUser)
    const options = { method: 'GET' };
    const res = await fetch(`/api/userRecipe/${localStorageUser._id}`, options)
    if (res.status === 200) {
      const body = await res.json()
      localStorage.setItem("user", JSON.stringify(body.result))
      setMyRecipes(body.result)
      setTimeout(() =>
        setIsLoading(false)
        , 600)
    }
  }

  const onRemoveRecipe = (drink) => {
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "userId": currentUser._id, "recipeId": drink._id })
    };

    fetch('/api/userRecipe/remove/deleteRecipe/', options)
      .then(response => response.json())
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.result))
        fetchCreatedRecipes()
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
            <Header title={"Suas receitas"} showBackButton={true} />
          </div>
          {myRecipes.createdRecipes?.length ?
            <div className={styles.list}>
              <div className={styles.cards} >
                <CardList list={myRecipes.createdRecipes} size={"large"} showEditButton={true} onRemoveRecipe={onRemoveRecipe} />
              </div>
            </div>
            :
            <div className={styles.empty}>
              {currentUser ?
                <div>
                  <EmptyMyRecipesMessage message={"Ainda não adicionaste receitas."} />
                </div>
                :
                <div>
                  <EmptyMyRecipesMessage message={"É necessário fazer login para aceder às suas receitas."} />
                </div>}
            </div>
          }
          <div className={styles.addButton}>
            {currentUser === null ? '' : <AddButton />}
          </div>
          <div className={styles.footer}>
            <NavBar />
          </div></>
      )}
    </div>
  );
}