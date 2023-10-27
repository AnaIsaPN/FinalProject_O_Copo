import { NavBar } from "../../../components/NavBar";
import { Header } from "../../../components/Header";
import styles from "../myrecipes/index.module.css"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { EmptyMyRecipesMessage } from "../../../components/EmptyMyRecipesMessage";
import { CardList } from "../../../components/CardList";
import { AddButton } from "../../../components/AddButton";

export default function MyRecipes() {
  const [user, setUser] = useState(null)
  const [myRecipes, setMyRecipes] = useState([]);
  const router = useRouter()

  useEffect(() => {
    async function fetchCreatedRipes() {
      const localStorageUser = JSON.parse(localStorage.getItem('user'));
      if (!localStorageUser) return
      setUser(localStorageUser)
      const options = { method: 'GET' };
      const res = await fetch(`/api/userRecipe/${localStorageUser._id}`, options)
      if (res.status === 200) {
        const body = await res.json()
        console.log(body)
        localStorage.setItem("user", JSON.stringify(body.result))
        setMyRecipes(body.result)
      }
    }
    fetchCreatedRipes()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title={"Suas receitas"} showBackButton={true} />
      </div>
      {myRecipes.createdRecipes?.length ?
        <div className={styles.list}>
          <div className={styles.cards} >
            <CardList list={myRecipes.createdRecipes} size={"large"} showEditButton={true} pages={"myrecipes"} />
          </div>
        </div>
        :
        <div className={styles.empty}>
          {user ?
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
        {user === null ? '' : <AddButton />}
      </div>
      <div className={styles.footer}>
        <NavBar />
      </div>
    </div>
  );
}