import styles from "./Ingredients.module.css"

export function Ingredients({ drink }) {

    const getIngredientString = (ingredient) => {
        if (ingredient.quant === null && ingredient.unity === null) {
            return ingredient.name
        } else if (ingredient.unity === null) {
            return `${ingredient.quant} ${ingredient.name}`
        } else {
            return `${ingredient.quant} ${ingredient.unity} de ${ingredient.name}`
        }

    }

    return (
        <div className={styles.container}>

            <div className={styles.title}>
                <h2>Ingredientes</h2>
                <hr className={styles.decoration} />
            </div>

            <div className={styles.info}>
                {drink?.ingredients && drink?.ingredients.map((ingredient, i) => (
                    <p key={i}>
                        {getIngredientString(ingredient)}
                    </p>
                ))}
            </div>
        </div>
    )
}