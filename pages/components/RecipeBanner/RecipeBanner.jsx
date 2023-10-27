import styles from "./RecipeBanner.module.css"
import { HeartFav } from "@/pages/components/HeartFav/HeartFav";

export function RecipeBanner({ drink, setUserFavorite, isFavorite, isUserRecipe }) {
    

    return (

        <div className={styles.container}>
            <div className={styles.title}>
                <h2>{drink?.name}</h2>
                <div className={styles.heart}>
                    {isUserRecipe ? '' : <HeartFav onFavClick={setUserFavorite} isFavorite={isFavorite} />}
                </div>
            </div>
            <div className={styles.type}>
                <p>Tipo: {drink?.type}</p>
                <p>Teor: {parseInt(drink?.alcoholPercentage) >= 0 ? `${parseInt(drink?.alcoholPercentage)}%` : drink?.alcoholPercentage}</p>
            </div>
            <div className={styles.photo} >
                <img
                 className={styles.img}
                    alt="drink image"
                    src={drink?.img}
                    height="250px"
                    width="150px"
                />
            </div>
            <div className={styles.info}>
                <p>{drink?.description}</p>
            </div>
        </div>
    )
}