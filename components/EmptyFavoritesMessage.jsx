import styles from "./EmptyFavoritesMessage.module.css"

export function EmptyFavoritesMessage({ message }) {
  return (
    <div className={styles.container}>
      <img src="/assets/icons/icon-empty.svg" alt="" />
      <h2 className={styles.title}>{message}</h2>
    </div>
  );
}