import styles from "./EmptyMyRecipesMessage.module.css"

export function EmptyMyRecipesMessage({ message }) {
  return (
    <div className={styles.container}>
      <img src="/assets/icons/icon-notes-off.svg" alt="" />
      <h2 className={styles.title}>{message}</h2>
    </div>
  );
}