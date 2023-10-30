import styles from "./Instructions.module.css"

export function Instructions({ drink }) {
    return (
        <div className={styles.containter}>
            <div className={styles.title}>
                <h2>Instruções</h2>
                <hr className={styles.decoration} />
            </div>
            <div className={styles.info}>
                <p>{drink?.instructions}</p>
            </div>
        </div>
    )
}