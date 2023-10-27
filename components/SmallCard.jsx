import styles from "./SmallCard.module.css"
import Link from "next/link";


export function SmallCard({ drink }) {

   // const localStoreUser = JSON.parse(localStorage.getItem('user'));
   // const isRecipe = localStoreUser.createdRecipes.some(userRecipe => userRecipe.name === drink.name)
   
   return (
      <Link
         className={styles.container}
         href={`/app/recipes/${drink?.name}`}
      >

         <div className={styles.photo} >
            <img src={drink?.img} />
         </div>

         <div className={styles.title}>
            <span >{drink?.name}</span>
         </div>

      </Link>
   )
}