import styles from "./RecipeAddButton.module.css"

export function RecipeAddButton({ onSubmit }) {
    return (
            <button
                className={styles.submitButton}
                onClick={onSubmit}>
                Submeter
            </button>
    )
}