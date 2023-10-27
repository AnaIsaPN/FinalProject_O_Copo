import { Header } from "@/components/Header";
import { HeartFav } from "@/components/HeartFav";
import { Ingredients } from "@/components/Ingredients";
import { Instructions } from "@/components/Instructions";
import { RecipeBanner } from "@/components/RecipeBanner";
import { NavBar } from "@/components/NavBar";
import styles from "./[name].module.css"
import { useState, useEffect } from "react"
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify"
import { useTheme } from '@/utils/ThemeContext';
import 'react-toastify/dist/ReactToastify.css'

export default function Recipe() {
  const [recipe, setRecipe] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isUserRecipe, setIsUserRecipe] = useState(false)
  const router = useRouter();
  const { theme, toggleTheme } = useTheme()
  const notify = () => toast.error('Tens de fazer login para adicionar receitas aos favoritos!')
  const recipeName = router.query.name;

  useEffect(() => {
    fetchRecipe()
    setIsLoading(false)
  }, [router])

  const checkFav = () => {
    const createdRecipes = JSON.parse(localStorage.getItem("user"))?.createdRecipes ?? []
    setIsUserRecipe(createdRecipes?.some(ele => ele.name === recipeName))
  }

  const fetchRecipe = () => {
    const userId = JSON.parse(localStorage.getItem("user"))
    const options = { method: 'GET' };
    fetch(`/api/getRecipes/todas/${userId === null ? 'visitante' : userId._id}/${recipeName}`, options)
      .then(response => response.json())
      .then(response => {
        const localStoreUser = JSON.parse(localStorage.getItem('user'));
        if (localStoreUser) {
          const found = localStoreUser.favorites.find(item => item === response.result[0]?._id)
          setIsFavorite(found ? true : false)
        }
        setRecipe(response.result[0])
      })
      .catch(err => console.error(err));

    checkFav()
  }

  const setUserFavorite = (isFavorite) => {
    const localStoreUser = JSON.parse(localStorage.getItem('user'));
    if (!localStoreUser) {
      notify()
      return
    }

    if (!isFavorite) {
      const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "userId": localStoreUser._id, "recipeId": recipe._id })
      };

      fetch('/api/users/favorites/removerecipe/', options)
        .then(response => response.json())
        .then(response => localStorage.setItem('user', JSON.stringify(response.result)))
        .catch(err => console.error(err));
    } else {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "userId": localStoreUser._id, "drinkName": recipe.name })
      };

      fetch('/api/users/favorites/addrecipe/', options)
        .then(response => response.json())
        .then(response => localStorage.setItem('user', JSON.stringify(response.result)))
        .catch(err => console.error(err));
    }
    setIsFavorite(isFavorite)
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title={"Receita"} showBackButton={true} />
      </div>
      <div className={styles.banner}>
        <RecipeBanner drink={recipe} setUserFavorite={setUserFavorite} isFavorite={isFavorite} isUserRecipe={isUserRecipe} />
      </div>
      <div className={styles.ingredients}>
        <Ingredients drink={recipe} />
      </div>
      <div className={styles.instructions}>
        <Instructions drink={recipe} />
      </div>
      <div className={styles.footer}>
        <NavBar />
      </div>
      <ToastContainer
        toastClassName={styles.tostifyNotification}
        position="top-left"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
    </div>
  );
}