import styles from "./RecipeDeleteButton.module.css"

export function RecipeDeleteButton({ handleClick }) {
    return (
        <div className={styles.buttons}>
            <button
                className={styles.trashBut}
                onClick={handleClick} >
                <img src="/assets/icons/icon-trashred.svg" />
                Excluir
            </button>
        </div>
    )
}