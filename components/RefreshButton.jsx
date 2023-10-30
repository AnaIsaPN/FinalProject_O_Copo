import styles from "./RefreshButton.module.css"

export function RefreshButton({resetButton}) {
    return (
        <button className={styles.refreshButton}
        onClick={resetButton}
        ><img src="/assets/icons/icon-refresh.svg" alt="" />
        </button>
    )
}




