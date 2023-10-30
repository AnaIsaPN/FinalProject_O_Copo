import styles from "./RandomButton.module.css"

export function RandomButton({ generateRadomDrinks }) {
    return (
        <div>
            <button className={styles.DiceButton}
                onClick={generateRadomDrinks}>
                <img src="/assets/icons/icon-dice.svg" alt="" />
            </button>
        </div>
    )
}